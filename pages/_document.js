import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="fa-IR">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                {/* <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                /> */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="theme-color" content="#4CB3CA"></meta>
                <meta name="title" content="FireDev.ir | ارائه خدمات نرم افزاری و برنامه نویسی در اصفهان" />
                <meta name="description" content="خدمات نرم افزاری در سراسر استان اصفهان با تیمی مجربوب سایت شخصی رضا براتی" />
                <meta name="keywords" content="برنامه نویسی در اصفهان , خدمات نرم افزاری , رضا براتی , وب سایت شخصی و خدماتی" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="fa-IR" />
                <meta httpEquiv="content-language" content="fa" />
                <meta name="author" content="رضا براتی"></meta>
                <meta charset="utf-8"/>
            </Head>
            <body dir='rtl'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}