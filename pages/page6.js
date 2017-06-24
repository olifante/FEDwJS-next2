import Footer from "../components/footer1"
import Head from "next/head"
export default function() {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="description" content="Sample" />
                <meta name="keywords" content="sample, react, demo" />
            </Head>
            <h1>
                Hello World!
            </h1>
            <div className="yellow">Welcome to next.js!</div>
            <Footer />
        </div>
    )
}
