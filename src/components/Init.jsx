/* eslint-disable jsx-a11y/alt-text */
import { React, useState, useEffect } from "react";
import { MainAfterContent } from './CardContents';


export default function InitEntrySystem() {
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const image = document.querySelector("#img");
        const nameBios = document.querySelector("#name-bios");
        const memory = document.querySelector("#memory");
        const skills = document.querySelector("#skills");
        const learnings = document.querySelector("#learnings");
        const startedPortfolio = document.querySelector("#started-portfolio");
        const modules = document.querySelector("#modules");
        const graphic = document.querySelector("#graphic");
        const startingPortfolio = document.querySelector("#starting-portfolio"); 
        
        setTimeout(() => {
            image.style.display = "block";
            image.style.opacity = 1;
        }, 1000);
            
        setTimeout(() => {
            nameBios.style.display = "block";
            nameBios.style.opacity = 1;
        }, 1500);
            
        setTimeout(() => {
            memory.style.display = "block";
            memory.style.opacity = 1;
        }, 2500);
            
        setTimeout(() => {
            skills.style.display = "block";
            skills.style.opacity = 1;
        }, 3000);
            
        setTimeout(() => {
            learnings.style.display = "block";
            learnings.style.opacity = 1;
        }, 3500);
            
        setTimeout(() => {
            startedPortfolio.style.display = "block";
            startedPortfolio.style.opacity = 1;
        }, 4000);
            
        setTimeout(() => {
            modules.style.display = "block";
            modules.style.opacity = 1;
        }, 4500);
            
        setTimeout(() => {
            graphic.style.display = "block";
            graphic.style.opacity = 1;
        }, 5000);
            
        setTimeout(() => {
            startingPortfolio.style.display = "block";
            startingPortfolio.style.opacity = 1;
        }, 5500);

        setTimeout(() => {
            const elements = document.querySelectorAll(".fade-in");
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.display = "none";
                    el.style.opacity = 0;
                }, (index + 1) * 100);
            });
            
            setShowMain(true);
        }, 6000);
    }, []);

    return (
        <>
            <div id="main">
                <div id="img" className="fade-in">
                    <img src="Logo-Portfolio.png" />
                </div>
                <div id="elements" className="fade-in p-2">
                    <p id="name-bios" className="fade-in">
                        Henrique Lima (C)2024.
                    </p>
                    <p id="memory" className="fade-in">
                        Memory Testing... 
                    </p>
                    <p id="skills" className="fade-in">
                        Analyzing Skills and Projects...
                    </p>
                    <p id="learnings" className="fade-in">
                        Optimizing Learnings...
                    </p>
                    <p id="started-portfolio" className="fade-in">
                        [ <span>OK</span> ] Started Portfolio.
                    </p>
                    <p id="modules" className="fade-in">
                        [ <span>OK</span> ] Started Modules.
                    </p>
                    <p id="graphic" className="fade-in">
                        [ <span>OK</span> ] Started Graphic Interface.
                    </p>
                    <p id="starting-portfolio" className="fade-in">
                        Starting Portfolio...
                    </p>
                </div>
                {showMain && <MainAfterContent />}
            </div>
        </>
    );
}