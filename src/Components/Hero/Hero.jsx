import React from 'react'
import { Container } from "react-bootstrap"
import { TypeAnimation } from "react-type-animation";
import upWorkIcon from "../../assets/upWork.png"
import fiverrIcon from "../../assets/fiverr.png"
import "./Hero.css"

const Hero = () => {
    return (
        <>
            <section className="HomeSection" id="HomeSection">
                <Container fluid="lg" className="hero-cont">
                    <h2 data-aos="zoom-out-up" className="mb-3">
                        WELCOME TO MY WORLD
                    </h2>
                    <div className="content dflex justify-content-center arrowRight">
                        <div>
                            <h1>
                                I'm Arifa Iqbal a
                                <TypeAnimation
                                    preRenderFirstString={true}
                                    sequence={[
                                        500,
                                        " Web Developer .", // initially rendered starting point
                                        1000,
                                        " Professional Coder .",
                                        1000,
                                    ]}
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </h1>
                        </div>
                    </div>
                    <h2 data-aos="zoom-out-up" className="mt-3">
                        I’m available for a freelance job. Hire me
                    </h2>
                    <div data-aos="zoom-in-up" className="accounts d-flex  mb-3">
                        <a href="https://www.upwork.com/freelancers/~0197ee973195e77bb9">
                            <img src={upWorkIcon} alt="" />
                        </a>

                        <a href="https://www.fiverr.com/arifa_iqbal">
                            <img src={fiverrIcon} alt="" />
                        </a>
                    </div>
                </Container>

            </section>
        </>
    )
}

export default Hero

