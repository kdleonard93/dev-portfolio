// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const Wet: CustomThemeConfig = {
	name: 'wet',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": "Montserrat, system-ui",
		"--theme-font-family-heading": "Poppins, system-ui",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #2176AE 
		"--color-primary-50": "222 234 243", // #deeaf3
		"--color-primary-100": "211 228 239", // #d3e4ef
		"--color-primary-200": "200 221 235", // #c8ddeb
		"--color-primary-300": "166 200 223", // #a6c8df
		"--color-primary-400": "100 159 198", // #649fc6
		"--color-primary-500": "33 118 174", // #2176AE
		"--color-primary-600": "30 106 157", // #1e6a9d
		"--color-primary-700": "25 89 131", // #195983
		"--color-primary-800": "20 71 104", // #144768
		"--color-primary-900": "16 58 85", // #103a55
		// secondary | #0EB1D2 
		"--color-secondary-50": "219 243 248", // #dbf3f8
		"--color-secondary-100": "207 239 246", // #cfeff6
		"--color-secondary-200": "195 236 244", // #c3ecf4
		"--color-secondary-300": "159 224 237", // #9fe0ed
		"--color-secondary-400": "86 200 224", // #56c8e0
		"--color-secondary-500": "14 177 210", // #0EB1D2
		"--color-secondary-600": "13 159 189", // #0d9fbd
		"--color-secondary-700": "11 133 158", // #0b859e
		"--color-secondary-800": "8 106 126", // #086a7e
		"--color-secondary-900": "7 87 103", // #075767
		// tertiary | #C8C2AE 
		"--color-tertiary-50": "247 246 243", // #f7f6f3
		"--color-tertiary-100": "244 243 239", // #f4f3ef
		"--color-tertiary-200": "241 240 235", // #f1f0eb
		"--color-tertiary-300": "233 231 223", // #e9e7df
		"--color-tertiary-400": "217 212 198", // #d9d4c6
		"--color-tertiary-500": "200 194 174", // #C8C2AE
		"--color-tertiary-600": "180 175 157", // #b4af9d
		"--color-tertiary-700": "150 146 131", // #969283
		"--color-tertiary-800": "120 116 104", // #787468
		"--color-tertiary-900": "98 95 85", // #625f55
		// success | #26C485 
		"--color-success-50": "222 246 237", // #def6ed
		"--color-success-100": "212 243 231", // #d4f3e7
		"--color-success-200": "201 240 225", // #c9f0e1
		"--color-success-300": "168 231 206", // #a8e7ce
		"--color-success-400": "103 214 170", // #67d6aa
		"--color-success-500": "38 196 133", // #26C485
		"--color-success-600": "34 176 120", // #22b078
		"--color-success-700": "29 147 100", // #1d9364
		"--color-success-800": "23 118 80", // #177650
		"--color-success-900": "19 96 65", // #136041
		// warning | #dfc027 
		"--color-warning-50": "250 246 223", // #faf6df
		"--color-warning-100": "249 242 212", // #f9f2d4
		"--color-warning-200": "247 239 201", // #f7efc9
		"--color-warning-300": "242 230 169", // #f2e6a9
		"--color-warning-400": "233 211 104", // #e9d368
		"--color-warning-500": "223 192 39", // #dfc027
		"--color-warning-600": "201 173 35", // #c9ad23
		"--color-warning-700": "167 144 29", // #a7901d
		"--color-warning-800": "134 115 23", // #867317
		"--color-warning-900": "109 94 19", // #6d5e13
		// error | #b91f04 
		"--color-error-50": "245 221 217", // #f5ddd9
		"--color-error-100": "241 210 205", // #f1d2cd
		"--color-error-200": "238 199 192", // #eec7c0
		"--color-error-300": "227 165 155", // #e3a59b
		"--color-error-400": "206 98 79", // #ce624f
		"--color-error-500": "185 31 4", // #b91f04
		"--color-error-600": "167 28 4", // #a71c04
		"--color-error-700": "139 23 3", // #8b1703
		"--color-error-800": "111 19 2", // #6f1302
		"--color-error-900": "91 15 2", // #5b0f02
		// surface | #B4C5E4 
		"--color-surface-50": "244 246 251", // #f4f6fb
		"--color-surface-100": "240 243 250", // #f0f3fa
		"--color-surface-200": "236 241 248", // #ecf1f8
		"--color-surface-300": "225 232 244", // #e1e8f4
		"--color-surface-400": "203 214 236", // #cbd6ec
		"--color-surface-500": "180 197 228", // #B4C5E4
		"--color-surface-600": "162 177 205", // #a2b1cd
		"--color-surface-700": "135 148 171", // #8794ab
		"--color-surface-800": "108 118 137", // #6c7689
		"--color-surface-900": "88 97 112", // #586170
	}
}