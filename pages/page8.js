import Footer from "../components/footer2"
import Head from "next/head"
import { Button } from "react-bootstrap"
export default () =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="description" content="Sample" />
      <meta name="keywords" content="sample, react, deemo" />
    </Head>
    <h1>
      Hello World!
    </h1>
    <p className="yellow">Welcome to your new clean React site</p>
    <Button>Click me!</Button>
    <Footer text="Footer™ ©2016 Tiago Henriques" />
  </div>
