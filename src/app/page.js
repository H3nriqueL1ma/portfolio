"use client"

import Contato from "@/components/Contato";
import DevContent from "@/components/DevContent";
import Menu from "@/components/Menu";
import Projetos from "@/components/Projetos";
import {useEffect} from "react";
import {Puff} from "react-loading-icons";

export default function Home() {
    useEffect(() => {
        const intro = document.querySelector("#intro");
        const mainContent = document.querySelector("#main-content");

        setTimeout(() => {
            intro.classList.add("fade-out");
            setTimeout(() => {
                intro.classList.add("d-none");
            }, 1200);

            setTimeout(() => {
                mainContent.classList.remove("d-none");
                mainContent.classList.remove("invisible");
                mainContent.classList.add("fade-in");
            }, 1500);
        }, 4000);
    }, []);

    return (
        <>
            <div id="intro" className="d-flex justify-content-center align-items-center">
                <div className="text-intro">
                    <h1>Henrique Lima</h1>
                    <div id="loading" className="text-center">
                        <Puff />
                    </div>
                </div>
            </div>

            <div id="main-content" className="invisible d-none">
                <Menu/>
                <DevContent/>
                <Projetos/>
                <Contato/>
            </div>
        </>
    );
}
