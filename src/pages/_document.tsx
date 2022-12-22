import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <head>
                <link rel="stylesheet" href=
                    "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
            </head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}