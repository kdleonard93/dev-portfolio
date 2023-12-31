import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import type { RequestEvent } from '@sveltejs/kit'

const schema = z.object({
    name: z.string().default(''),
    email: z.string().email(),
    phone: z.string().optional(), 
    message: z.string()    
  });

export const load = (async () => {
    const form = await superValidate(schema);
    return {form};  
}) satisfies PageServerLoad;


  export const actions = {
    default: async ({ request }: RequestEvent) => {
      const form = await superValidate(request, schema);
      
      if (form.valid) {
        const transporter = nodemailer.createTransport({/* SMTP settings */});
        await transporter.sendMail({
          from: process.env.ZOHO_USER, // Sender address
          to: 'contact@digitaldopamine.dev', // Receiver address
          subject: 'New Contact Form Submission',
          text: `Name: ${form.data.name}\nEmail: ${form.data.email}\nMessage: ${form.data.message}`
        });
  
        // Handle successful email sending
      } else {
        // Handle validation errors
      }
  
      return { form };
    }
}

