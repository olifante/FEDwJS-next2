import Footer from "../components/footer2"
import Head from "next/head"
import { Button } from "react-bootstrap"
export default function() {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="description" content="Sample" />
                <meta name="keywords" content="sample, react, demo" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"
                />
            </Head>
            <h1>
                Hello World!
            </h1>
            <div className="yellow">Welcome to next.js!</div>
            <p>
                <Button>Click this bootstrap button!</Button>
            </p>
            <Footer text="Footer™ ©2017 Tiago Henriques" />
        </div>
    )
}
