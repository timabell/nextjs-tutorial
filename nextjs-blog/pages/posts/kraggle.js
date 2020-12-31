import Link from 'next/link'
import Head from 'next/head'

export default function Kraggle() {
    return (
        <>
            <Head>
                <title>squirrel!</title>
            </Head>
            <h1>Beware, the kraggle</h1>
            <Link href="/"><a>home</a></Link>
        </>
    )
}
