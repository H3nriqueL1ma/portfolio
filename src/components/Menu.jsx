import { Button, Container, Navbar } from "react-bootstrap";

export default function Menu() {
    return (
        <>
        <Navbar className="bg-body-tertiary justify-content-between" id="navbar">
            <Container className="m-0">
                <Navbar.Brand>
                    <h1 id="title" className="java-text"><span>public class</span> Developer <span>extends</span> Portfolio { '{' }</h1> 
                </Navbar.Brand>
            </Container>
            <div>
                <Button id="github-button" className="social-button">
                    <i className="bi bi-linkedin"></i>
                </Button>
            </div>
            <div id="github-div">
                <Button id="github-button" className="social-button">
                    <i className="bi bi-github"></i>
                </Button>
            </div>
        </Navbar>
        </>
    );
}