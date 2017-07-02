import Head from "next/head"
import {
    Jumbotron,
    Navbar,
    NavItem,
    MenuItem,
    Nav,
    NavDropdown
} from "react-bootstrap"

let Page = function() {
    return (
        <div>
            <Head>
                <title>My page with navigation bar!</title>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"
                />
            </Head>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav activeKey="2">
                        <NavItem eventKey={1} href="/item1">
                            Item 1
                        </NavItem>
                        <NavItem eventKey={2} href="/item2">
                            Item 2
                        </NavItem>
                        <NavItem eventKey={3} href="/item3">
                            Item 3
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron>This is the second item.</Jumbotron>
        </div>
    )
}

export default Page
