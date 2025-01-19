import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/myLogo.png'
import "./Navbar.css"

const NavBar = () => {
    const [isDarkBg, setIsDarkBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 70) {
                setIsDarkBg(true);
            } else {
                setIsDarkBg(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const darkBgClass = isDarkBg ? "darkBg" : "";
    return (
        <>

            <Navbar expand="lg" className={`navbar ${darkBgClass}`} >
                <Container fluid="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="logo"> <img src={Logo} alt="" />

                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#HomeSection">Home</Nav.Link>
                            <Nav.Link href="#aboutSection">About</Nav.Link>
                            <Nav.Link href="#skillSection">Skills</Nav.Link>
                            <Nav.Link href="#resumeSect">Resume</Nav.Link>
                            <Nav.Link href="#servicesSect">services</Nav.Link>
                            <Nav.Link href="#myWorkSect">My Projects</Nav.Link>
                            <Nav.Link href="#contactSect">contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
