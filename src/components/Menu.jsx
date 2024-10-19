import Link from "next/link";
import { Button, Container, Navbar } from "react-bootstrap";

export default function Menu() {
    return (
        <>
        <Navbar className="bg-body-tertiary justify-content-between" id="navbar">
            <Container className="m-0">
                <Navbar.Brand>
                    <img src="logo.png" alt="logo" width={60} />
                </Navbar.Brand>
            </Container>
            <div className="d-flex">
                <div>
                    <Link target="_blank" rel="noopener noreferrer"
                          href={"https://www.linkedin.com/in/henrique-lima-51b957264/"}>
                        <Button id="github-button" className="social-button">
                            <i className="bi bi-linkedin"></i>
                        </Button>
                    </Link>
                </div>
                <div id="github-div">
                    <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/H3nriqueL1ma"}>
                        <Button id="github-button" className="social-button">
                            <i className="bi bi-github"></i>
                        </Button>
                    </Link>
                </div>
            </div>
        </Navbar>
        </>
    );
}