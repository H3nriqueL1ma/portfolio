/* eslint-disable jsx-a11y/alt-text */
import { React, useState, useEffect } from "react";
import { MainAfterContent, HomeContent, AboutContent } from './CardContents';


export default function InitEntrySystem() {
    const [showMainContent, setShowMainContent] = useState(false);
    
    useEffect(() => {
        window.addEventListener("load", () => {
            const main = document.querySelector("#main");
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
                image.setAttribute("style", "opacity: 1;")
            }, 1000);
        
            setTimeout(() => {
                nameBios.setAttribute("style", "opacity: 1;");
            }, 1500);
        
            setTimeout(() => {
                memory.setAttribute("style", "opacity: 1;");
            }, 2500);
        
            setTimeout(() => {
                skills.setAttribute("style", "opacity: 1;");
            }, 3000);
        
            setTimeout(() => {
                learnings.setAttribute("style", "opacity: 1;");
            }, 3500);
        
            setTimeout(() => {
                startedPortfolio.setAttribute("style", "opacity: 1;");
            }, 4000);
        
            setTimeout(() => {
                modules.setAttribute("style", "opacity: 1;");
            }, 4500);
        
            setTimeout(() => {
                graphic.setAttribute("style", "opacity: 1;");
            }, 5000);
        
            setTimeout(() => {
                startingPortfolio.setAttribute("style", "opacity: 1;");
            }, 5500);
        
            setTimeout(() => {
                main.innerHTML = '';
            }, 6000);
    });    
    }, []);

    const home = document.querySelector("#home");
    const about = document.querySelector("#sobre");
    const card = document.querySelector("#card");
  
    home.addEventListener("click", () => {
        card.innerHTML = '';
        card.innerHTML = `
          <HomeContent />
        `;
    });
  
    about.addEventListener("click", () => {
        card.style.alignContent = "start";
        card.innerHTML = '';
        card.innerHTML = `
          <AboutContent />
        `;
    })

    return (
        <>
            <div id="main">
                {showMainContent && <MainAfterContent />}
                <div id="img" className="fade-in">
                    <img src="Logo-Portfolio.png" />
                </div>
                <div className="fade-in p-2">
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
            </div>
        </>
    );
}