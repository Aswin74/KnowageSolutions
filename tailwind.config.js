/** @type {import('tailwindcss').Config} */
import { transform } from "framer-motion"
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./public/assets/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                ks: {
                    // primary: "#007f5f",
                    primary: "#34d399",
                    primary_dark: "#10B981",
                    // secondary: "#bc4749",
                    // white: "#f0efeb",
                    secondary: "#FACC15",
                    white: "#f4f4f5",
                    black: "#212529",
                    gray: "#D9D9D9",
                },
                color: {
                    1: "#AC6AFF",
                    2: "#FFC876",
                    3: "#FF776F",
                    4: "#7ADB78",
                    5: "#858DFF",
                    6: "#FF98E2",
                },
                stroke: {
                    gray: "#b8b8b870",
                    // 1: "#26242C",
                    tint: "#d0e3f0",
                },
                n: {
                    1: "#FFFFFF",
                    2: "#CAC6DD",
                    3: "#ADA8C3",
                    4: "#757185",
                    5: "#3F3A52",
                    6: "#252134",
                    7: "#15131D",
                    8: "#0E0C15",
                    9: "#474060",
                    10: "#43435C",
                    11: "#1B1B2E",
                    12: "#2E2A41",
                    13: "#6C7275",
                },
            },
            fontFamily: {
                sans: ["var(--font-sora)", ...fontFamily.sans],
                code: "var(--font-code)",
                grotesk: "var(--font-grotesk)",
                inter: "var(--font-inter) ",
            },
            letterSpacing: {
                tagline: ".15em",
            },
            spacing: {
                0.25: "0.0625rem",
                7.5: "1.875rem",
                15: "3.75rem",
            },
            opacity: {
                15: ".15",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            borderWidth: {
                DEFAULT: "0.0625rem",
            },
            backgroundImage: {
                "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
                "conic-gradient":
                    "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
                "poly-grid": "url('/src/assets/Poly_Grid.svg')",
                university: "url('/src/assets/hero/university.png')",
                university2: "url('/src/assets/hero/university2.jpg')",
                waveBg: "url('/src/assets/courses/nonSvg/WaveBg.jpg')",
                waveLg: "url('/src/assets/courses/nonSvg/WaveLg.jpg')",
                wave2: "url('/src/assets/Wave2.svg')"
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({})
            addComponents({
                ".container": {
                    "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
                        {},
                },
                ".hlarge": {
                    "@apply text-[2rem] md:text-[3rem] lg:text-[4.5rem] leading-[3rem] lg:leading-[5rem] font-semibold":
                        {},
                },
                ".h1": {
                    "@apply font-semibold text-[2.75rem] leading-[3.25rem] md:text-[4rem] md:leading-[4.75rem] lg:text-[4.25rem] lg:leading-[5.0625rem] xl:text-[4.75rem] xl:leading-[5.5rem]":
                        {},
                },
                ".h2": {
                    "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
                        {},
                },
                ".h3": {
                    "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
                },
                ".h4": {
                    "@apply text-[2rem] leading-normal": {},
                },
                ".h5": {
                    "@apply text-xl leading-normal": {},
                },
                ".h6": {
                    "@apply font-semibold text-lg leading-8": {},
                },
                ".body-1": {
                    "@apply text-[0.875rem] leading-[1.75rem] md:text-[1rem] md:leading-[2rem] lg:text-[1.25rem] lg:leading-9":
                        {},
                },
                ".body-2": {
                    "@apply font-light text-[0.875rem] leading-6 md:text-base":
                        {},
                },
                ".caption": {
                    "@apply text-sm": {},
                },
                ".tagline": {
                    "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
                        {},
                },
                ".quote": {
                    "@apply font-code text-lg leading-normal": {},
                },
                ".button": {
                    "@apply font-code text-xs font-bold uppercase tracking-wider":
                        {},
                },
            })
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },

                ".ks-flipper":{
                    transform:"rotateY(180deg)"
                }
            })
        }),
    ],
}
