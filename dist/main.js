const content = document.querySelector("#content");
const home_btn = document.querySelector("#home-button");
const about_btn = document.querySelector("#about-button");
const projects_btn = document.querySelector("#projects-button");
const contact_btn = document.querySelector("#contact-button");
home_btn.addEventListener("click", () => {
    about_btn.classList.remove("active");
    projects_btn.classList.remove("active");
    contact_btn.classList.remove("active");
    const newContentHome = document.createElement("div");
    newContentHome.setAttribute("id", "home-content");
    content.appendChild(newContentHome);
    const home_content = document.querySelector("#home-content");
    home_content.classList.add("emerge");
    const emerge_div = document.querySelector("#home-content.emerge");
    setTimeout(() => {
        emerge_div.classList.add("show");
    }, 200);
    home_btn.classList.add("active");
    home_btn.setAttribute("disabled", "");
});
