/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export function MainAfterContent() {
    return (
        <>
            <div className="row m-0 justify-content-center">
                <div className="p-0">
                    <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <a id="home" className="nav-link">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="sobre" className="nav-link">Sobre</a>
                                    </li>
                                    <li className="nav-item">
                                        <a id="resumo" className="nav-link">Resumo</a>
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
                <div id="card" className="p-4 text-center align-content-center">
                    <h1>Henrique Lima</h1>
                    <h2>Desenvolvedor Back-end e Baixo Nível.</h2>
                </div>
                <div>
                    <a href="https://github.com/H3nriqueL1ma" target="_blank" rel="noreferrer noopener">
                        <i className="bi bi-github"></i>
                    </a> 
                    <a href="https://www.linkedin.com/in/henrique-lima-51b957264/" target="_blank" rel="noreferrer noopener">
                        <i className="bi bi-linkedin"></i>
                    </a> 
                </div>
            </div>
        </>
    );
};

export function HomeContent() {
    return (
        <>
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
        </>
    );
};

export function AboutContent() {
    return (
        <>
            <h4>Olá! Me chamo Henrique!</h4>
            <p>Sou desenvolvedor back-end, ainda sou um iniciante na área e não possuo experiência profissional, mas sempre estou estudando as tecnologias mais utilizadas no mercado. Além disso, nos tempos vagos sou desenvolvedor de baixo nível por hobby.</p>
        </>
    );
}

export default { MainAfterContent, HomeContent, AboutContent };