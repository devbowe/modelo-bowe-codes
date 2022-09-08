const sections = document.querySelectorAll("[data-code]");

sections.forEach((section) => {
    section.addEventListener("dblclick", (e) => {
        section.classList.toggle("active");
    });
});
