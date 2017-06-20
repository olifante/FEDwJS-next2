import Head from "next/head"
import { Button } from "react-bootstrap"
export default () =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
    <Button>Click me!</Button>
  </div>
