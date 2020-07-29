import Head from 'next/head'
import Header from './header'

export default function ({ children, title="E-Commerce" }) {
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            </Head>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}