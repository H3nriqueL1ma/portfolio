/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export function MainAfterContent() {
    const [showMain, setShowMain] = useState(false);
    const [showMain2, setShowMain2] = useState(false);
    const [showMain3, setShowMain3] = useState(false);

    useEffect(() => {
        const home = document.querySelector("#home");
        const about = document.querySelector("#sobre");
        const portfolio = document.querySelector("#portfolio");
        const contact = document.querySelector("#contato");

        const elements = document.querySelectorAll(".fade-in-2");
        const elementsInline = document.querySelectorAll(".fade-in-2-inline");

        home.addEventListener("click", () => {
            setShowMain(false);
            setShowMain2(false);
            setShowMain3(false);
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
            setShowMain2(false);
            setShowMain3(false);
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

        portfolio.addEventListener("click", () => {
            setShowMain(false);
            setShowMain3(false);
            elements.forEach((el) => {
                el.style.display = "none";
                el.style.opacity = 0;
            });
            elementsInline.forEach((el) => {
                el.style.display = "none";
                el.style.opacity = 0;
            });
            setShowMain2(true);
        });

        contact.addEventListener("click", () => {
            setShowMain(false);
            setShowMain2(false);
            elements.forEach((el) => {
                el.style.display = "none";
                el.style.opacity = 0;
            });
            elementsInline.forEach((el) => {
                el.style.display = "none";
                el.style.opacity = 0;
            });
            setShowMain3(true);
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
                <div id="title" style={ {padding: "1rem 5rem"} }>
                    <h3 className="line typing-animation" style={ {color: "white"} }>Henrique Lima GRUB 0.1.0</h3>
                </div>
                <div id="card" className="pt-3 pb-3 pe-2 ps-2 text-center align-content-center justify-content-center fade-transition">
                    <h1 className="fade-in-2">Henrique Lima</h1>
                    <h2 id="subtitle" className="fade-in-2 pt-1">Desenvolvedor Back-end e Baixo Nível.</h2>
                    <a href="https://github.com/H3nriqueL1ma" target="_blank" rel="noreferrer noopener" className="fade-in-2-inline">
                        <i className="bi bi-github"></i>
                    </a> 
                    <a href="https://www.linkedin.com/in/henrique-lima-51b957264/" target="_blank" rel="noreferrer noopener" className="fade-in-2-inline">
                        <i className="bi bi-linkedin"></i>
                    </a> 
                    {showMain && <AboutContent />}
                    {showMain2 && <PortfolioContent />}
                    {showMain3 && <ContactContent />}
                </div>
            </div>
        </>
    );
};

function AboutContent() {
    return (
        <>
            <div className="text-start">
                <h4 className="h4-about">Olá! Me chamo Henrique!</h4>
                <p style={ {margin: "10px 5px"} }>Sou <span style={ {color: "rgb(46, 46, 221)"} }>desenvolvedor back-end</span>, ainda sou um iniciante na área e não possuo experiência profissional, mas sempre estou estudando as tecnologias mais utilizadas no mercado. Além disso, nos tempos vagos sou desenvolvedor de baixo nível por hobby.</p>
                <h4 className="m-0 mt-4 h4-about">Escolaridade</h4>
                <p style={ {margin: "10px 5px"} }>
                    <u>Dez_2022 - Atualmente</u> <i className="bi bi-calendar"></i><br/>
                    Aprimorei meus conhecimentos e ainda continuo aprimorando com conteúdos disponíveis na internet, como cursos online, documentações e livros.
                </p>
                <p style={ {margin: "10px 5px"} }>
                    <u>Fev_2024 - Atualmente</u> <i className="bi bi-calendar"></i><br/>
                    Comecei uma formação técnica em Informática para a Internet pelo SENAC. Onde estou estudando desenvolvimento web fullstack.
                </p>
                <h4 className="m-0 mt-4 h4-about">Conhecimento Técnico</h4>
                <p id="techs-content" className="row justify-content-center" style={ {margin: "10px 5px"} }>
                    <div className="text-center icons col-1">      
                        <i className="devicon-javascript-plain font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-typescript-plain font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-react-original font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-nextjs-plain font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-sass-original font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-bootstrap-plain font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-nodejs-plain-wordmark font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-fastify-plain font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-mysql-original font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-c-plain font-icons"></i>
                    </div>
                    <div className="text-center icons col-1">      
                        <i className="devicon-java-plain font-icons"></i>
                    </div>
                </p>
            </div>
        </>
    );
}

function PortfolioContent() {
    return (
        <>
            <div className="row justify-content-around">
                <div className="col-5 portfolio-card text-center">
                    <div className="m-2">
                        <img id="img-1" className="m-0 img-portfolio" src="portfolio-1-img.png" alt="" />
                    </div>
                    <h2>JetBridge</h2>
                    <p className="p-2 m-2 description-text">Página de uma empresa que oferece serviços de desenvolvimento de sites, feito para um Projeto Integrador estudantil.</p>
                    <a href="https://jetbridge.onrender.com/" target="_blank">
                        <button>Acesse aqui <i className="bi bi-rocket-takeoff-fill"></i></button>
                    </a>
                </div>

                <div className="col-5 portfolio-card text-center">
                    <div className="m-2">
                        <img id="img-2" className="m-0 img-portfolio" src="portfolio-2-img.png" alt="" />
                    </div>
                    <h2>Grooming Pet</h2>
                    <p className="p-2 m-2 description-text">Site de uma empresa de serviços de PetMóvel, com agendamento de tosa e outros serviços, também feito para um Projeto Integrador estudantil.</p>
                    <a href="https://projeto-site-grooming-pet.onrender.com/" target="_blank">
                        <button>Acesse aqui <i className="bi bi-rocket-takeoff-fill"></i></button>
                    </a>
                </div>

                <div className="col-5 portfolio-card text-center">
                    <div className="m-2">
                        <img id="img-3" className="m-0 img-portfolio" src="portfolio-3-img.png" alt="" />
                    </div>
                    <h2>GOTO ANTARCTIC</h2>
                    <p className="p-2 m-2 description-text">Uma tentativa de cópia de uma template do Behance, para exercitar minhas habilidades front-end.</p>
                    <a href="https://h3nriquel1ma.github.io/site-template-behance-ice/" target="_blank">
                        <button>Acesse aqui <i className="bi bi-rocket-takeoff-fill"></i></button>
                    </a>
                </div>
            </div>
        </>
    );
};

function ContactContent() {
    const { register, handleSubmit } = useForm();

    async function SubmitForm(data) {
        
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(SubmitForm)}>
                    <div id="content-form" className="text-start">
                        <h3>Entre em contato!</h3><br/>
                        <div>
                            <label htmlFor="name">Seu Nome</label><br/>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Qual seu nome?"
                                autoFocus
                                {...register("clientName")}/>
                        </div>
                        <div>
                            <label htmlFor="email">Seu E-mail</label><br/>
                            <input 
                            type="text" 
                            id="email" 
                            placeholder="Qual seu e-mail?"
                            {...register("clientEmail")}/>
                        </div>
                        <div>
                            <label htmlFor="message">Sua Mensagem</label><br/>
                            <textarea 
                            rows={4} 
                            cols={29} 
                            type="text" 
                            id="message" 
                            placeholder="Qual sua mensagem?"
                            {...register("clientMessage")}/>
                        </div>

                        <div className="text-end mt-5">
                            <button>Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default { MainAfterContent };