import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      "colors": {
            "error-container": "#93000a",
            "tertiary-fixed-dim": "#ffb95f",
            "surface": "#111319",
            "primary-fixed-dim": "#c3c0ff",
            "secondary-fixed-dim": "#68dba9",
            "outline-variant": "#464554",
            "on-tertiary": "#472a00",
            "on-error": "#690005",
            "on-surface": "#e2e2eb",
            "primary-container": "#4338ca",
            "on-secondary-container": "#00311f",
            "secondary": "#68dba9",
            "surface-tint": "#c3c0ff",
            "primary-fixed": "#e3dfff",
            "surface-container-low": "#191b22",
            "on-surface-variant": "#c7c4d7",
            "surface-dim": "#111319",
            "on-secondary": "#003825",
            "on-primary-fixed": "#100069",
            "tertiary-container": "#744800",
            "on-tertiary-fixed-variant": "#653e00",
            "on-secondary-fixed-variant": "#005137",
            "on-tertiary-fixed": "#2a1700",
            "primary": "#c3c0ff",
            "secondary-fixed": "#85f8c4",
            "surface-container-lowest": "#0c0e14",
            "inverse-surface": "#e2e2eb",
            "surface-bright": "#373940",
            "background": "#111319",
            "surface-variant": "#33343b",
            "surface-container-high": "#282a30",
            "surface-container-highest": "#33343b",
            "inverse-primary": "#5148d7",
            "on-secondary-fixed": "#002114",
            "secondary-container": "#25a475",
            "on-primary-container": "#c1beff",
            "error": "#ffb4ab",
            "tertiary-fixed": "#ffddb8",
            "on-primary": "#1f00a4",
            "on-background": "#e2e2eb",
            "on-primary-fixed-variant": "#372abf",
            "surface-container": "#1e1f26",
            "outline": "#918fa0",
            "inverse-on-surface": "#2e3037",
            "tertiary": "#ffb95f",
            "on-tertiary-container": "#ffb759",
            "on-error-container": "#ffdad6"
      },
      "borderRadius": {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
      },
      "spacing": {
            "margin-mobile": "1.25rem",
            "gutter": "1.5rem",
            "space-lg": "1.5rem",
            "space-xl": "2.5rem",
            "space-md": "1rem",
            "space-xs": "0.25rem",
            "gutter-sm": "1rem",
            "margin-tablet": "2rem",
            "space-2xl": "4rem",
            "margin": "4rem",
            "space-sm": "0.5rem"
      },
      "fontFamily": {
            "body-sm": [
                  "Inter"
            ],
            "headline-sm": [
                  "Hanken Grotesk"
            ],
            "label-caps": [
                  "Inter"
            ],
            "headline-lg-mobile": [
                  "Hanken Grotesk"
            ],
            "display-mobile": [
                  "Hanken Grotesk"
            ],
            "body-md": [
                  "Inter"
            ],
            "headline-md": [
                  "Hanken Grotesk"
            ],
            "body-lg": [
                  "Inter"
            ],
            "headline-lg": [
                  "Hanken Grotesk"
            ],
            "label-code": [
                  "JetBrains Mono"
            ],
            "display": [
                  "Hanken Grotesk"
            ]
      },
      "fontSize": {
            "body-sm": [
                  "0.8125rem",
                  {
                        "lineHeight": "1.25rem",
                        "letterSpacing": "0",
                        "fontWeight": "400"
                  }
            ],
            "headline-sm": [
                  "1.125rem",
                  {
                        "lineHeight": "1.5rem",
                        "letterSpacing": "-0.015em",
                        "fontWeight": "600"
                  }
            ],
            "label-caps": [
                  "0.6875rem",
                  {
                        "lineHeight": "0.875rem",
                        "letterSpacing": "0.08em",
                        "fontWeight": "600"
                  }
            ],
            "headline-lg-mobile": [
                  "1.75rem",
                  {
                        "lineHeight": "2.125rem",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "600"
                  }
            ],
            "display-mobile": [
                  "2.25rem",
                  {
                        "lineHeight": "2.5rem",
                        "letterSpacing": "-0.03em",
                        "fontWeight": "700"
                  }
            ],
            "body-md": [
                  "0.9375rem",
                  {
                        "lineHeight": "1.5rem",
                        "letterSpacing": "-0.005em",
                        "fontWeight": "400"
                  }
            ],
            "headline-md": [
                  "1.5rem",
                  {
                        "lineHeight": "1.875rem",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "600"
                  }
            ],
            "body-lg": [
                  "1.125rem",
                  {
                        "lineHeight": "1.75rem",
                        "letterSpacing": "-0.01em",
                        "fontWeight": "400"
                  }
            ],
            "headline-lg": [
                  "2.25rem",
                  {
                        "lineHeight": "2.75rem",
                        "letterSpacing": "-0.025em",
                        "fontWeight": "600"
                  }
            ],
            "label-code": [
                  "0.75rem",
                  {
                        "lineHeight": "1rem",
                        "letterSpacing": "0.04em",
                        "fontWeight": "500"
                  }
            ],
            "display": [
                  "3.5rem",
                  {
                        "lineHeight": "3.75rem",
                        "letterSpacing": "-0.035em",
                        "fontWeight": "700"
                  }
            ]
      }
}
  },
  plugins: [],
}

export default config
