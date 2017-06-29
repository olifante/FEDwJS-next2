import Head from "next/head"

let Page = function() {
    return (
        <div>
            <Head>
                <title>Some demo React pages</title>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"
                />
            </Head>
            <h1>Some demo React pages</h1>
            <ul>
                <li>
                    <a href="page1">Page 1</a>
                    - a single div
                </li>
                <li>
                    <a href="page2">Page 2</a>
                    - add h1 heading and use Head component to add a title to the page
                </li>
                <li>
                    <a href="page3">Page 3</a>
                    - add meta tags
                </li>
                <li>
                    <a href="page4">Page 4</a>
                    - JSX uses "className", not "class"
                </li>
                <li>
                    <a href="page5">Page 5</a>
                    - add basic HTML5 footer
                </li>
                <li>
                    <a href="page6">Page 6</a>
                    - use Footer component
                </li>
                <li>
                    <a href="page7">Page 7</a>
                    - modify Footer to accepts props
                </li>
                <li>
                    <a href="page8">Page 8</a>
                    - use React Bootstrap
                </li>
            </ul>
        </div>
    )
}

export default Page
