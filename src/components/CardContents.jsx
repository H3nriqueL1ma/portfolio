/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import { React, useState, useEffect } from "react";

export function MainAfterContent() {
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const home = document.querySelector("#home");
        const about = document.querySelector("#sobre");

        const elements = document.querySelectorAll(".fade-in-2");
        const elementsInline = document.querySelectorAll(".fade-in-2-inline");

        home.addEventListener("click", () => {
            setShowMain(false);
            elements.forEach((el) => {
                el.style.display = "block";
                el.style.opacity = 1;
            });
            elementsInline.forEach((el) => {
                el.style.display = "inline";
                el.style.opacity = 1;
            });
        });

        about.addEventListener("click", () => {
            elements.forEach((el) => {
                el.style.display = "none";
                el.style.opacity = 0;
            });
            elementsInline.forEach((el) => {
                el.style.display = "none";
                el.style.opacity = 0;
            });
            setShowMain(true);
        });
    }, [])

    return (
        <>
            <div className="row m-0 justify-content-center">
                <div className="p-0">
                    <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a id="home" className="nav-link">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="sobre" className="nav-link">Sobre</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="portfolio" className="nav-link">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="contato" className="nav-link">Contato</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div style={ {padding: "1rem 5rem"} }>
                    <h3 style={ {color: "white"} }>Henrique Lima GRUB 0.1.0</h3>
                </div>
                <div id="card" className="pt-3 pb-3 pe-2 ps-2 text-center align-content-center">
                    <h1 className="fade-in-2">Henrique Lima</h1>
                    <h2 className="fade-in-2">Desenvolvedor Back-end e Baixo Nível.</h2>
                    <a href="https://github.com/H3nriqueL1ma" target="_blank" rel="noreferrer noopener" className="fade-in-2-inline">
                        <i className="bi bi-github"></i>
                    </a> 
                    <a href="https://www.linkedin.com/in/henrique-lima-51b957264/" target="_blank" rel="noreferrer noopener" className="fade-in-2-inline">
                        <i className="bi bi-linkedin"></i>
                    </a> 
                    {showMain && <AboutContent />}
                </div>
            </div>
        </>
    );
};

export function HomeContent() {
    return (
        <>
            <div>
                <h1>Henrique Lima</h1>
                <h2>Desenvolvedor Back-end e Baixo Nível.</h2>
                <div>
                    <a href="https://github.com/H3nriqueL1ma" target="_blank" rel="noreferrer noopener">
                        <i classNameName="bi bi-github"></i>
                    </a> 
                    <a href="https://www.linkedin.com/in/henrique-lima-51b957264/" target="_blank" rel="noreferrer noopener">
                        <i classNameName="bi bi-linkedin"></i>
                    </a> 
                </div>
            </div>
        </>
    );
};

export function AboutContent() {
    return (
        <>
            <div className="text-start">
                <h4 style={ {backgroundColor: "white", color: "black", padding: "4px 5px 0"} }>Olá! Me chamo Henrique!</h4>
                <p style={ {margin: "10px 5px"} }>Sou desenvolvedor back-end, ainda sou um iniciante na área e não possuo experiência profissional, mas sempre estou estudando as tecnologias mais utilizadas no mercado. Além disso, nos tempos vagos sou desenvolvedor de baixo nível por hobby.</p>
                <h4 className="m-0 mt-4" style={ {backgroundColor: "white", color: "black", padding: "4px 5px 0"} }>Escolaridade</h4>
                <p style={ {margin: "10px 5px"} }>
                    <u>Dez_2022 - Atualmente</u> <i class="bi bi-calendar"></i><br/>
                    Aprimorei meus conhecimentos e ainda continuo aprimorando com conteúdos disponíveis na internet, como cursos online, documentações e livros.
                </p>
                <p style={ {margin: "10px 5px"} }>
                    <u>Fev_2024 - Atualmente</u> <i class="bi bi-calendar"></i><br/>
                    Comecei uma formação técnica em Informática para a Internet pelo SENAC. Onde estou estudando desenvolvimento web fullstack.
                </p>
                <h4 className="m-0 mt-4" style={ {backgroundColor: "white", color: "black", padding: "4px 5px 0"} }>Conhecimento Técnico</h4>
                <p id="techs-content" className="d-flex justify-content-center" style={ {margin: "10px 5px"} }>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-javascript-plain" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-typescript-plain" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-react-original" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-nextjs-plain" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-sass-original" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-bootstrap-plain" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-nodejs-plain-wordmark" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-fastify-plain" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-mysql-original" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-c-plain" style={ {fontSize: "40pt"} }></i>
                    </div>
                    <div className="text-center" style={ {padding: "10px 10px 6px", borderRadius: "2px"} }>      
                        <i class="devicon-java-plain" style={ {fontSize: "40pt"} }></i>
                    </div>
                </p>
            </div>
        </>
    );
}

export default { MainAfterContent, HomeContent, AboutContent };