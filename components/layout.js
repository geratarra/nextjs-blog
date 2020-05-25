import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Gerardo Tarragona Serna'
export const siteTitle = 'Gerardo\'s Blog'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iI0ZGQ0M0RCIgZD0iTTM2IDE4YzAgOS45NDEtOC4wNTkgMTgtMTggMTgtOS45NCAwLTE4LTguMDU5LTE4LTE4QzAgOC4wNiA4LjA2IDAgMTggMGM5Ljk0MSAwIDE4IDguMDYgMTggMTgiLz48ZWxsaXBzZSBmaWxsPSIjNjY0NTAwIiBjeD0iMTEuNSIgY3k9IjEyLjUiIHJ4PSIyLjUiIHJ5PSI1LjUiLz48ZWxsaXBzZSBmaWxsPSIjNjY0NTAwIiBjeD0iMjQuNSIgY3k9IjEyLjUiIHJ4PSIyLjUiIHJ5PSI1LjUiLz48cGF0aCBmaWxsPSIjNjY0NTAwIiBkPSJNMTggMjJjLTMuNjIzIDAtNi4wMjctLjQyMi05LTEtLjY3OS0uMTMxLTIgMC0yIDIgMCA0IDQuNTk1IDkgMTEgOSA2LjQwNCAwIDExLTUgMTEtOSAwLTItMS4zMjEtMi4xMzItMi0yLTIuOTczLjU3OC01LjM3NyAxLTkgMXoiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNOSAyM3MzIDEgOSAxIDktMSA5LTEtMiA0LTkgNC05LTQtOS00eiIvPjwvc3ZnPg==" rel="icon" type="image/x-icon" />
                <meta
                    name="description"
                    content="Building my personal blog site with Next.js"
                />
                {/* <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                /> */}
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/images/profile.jpg"
                                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}