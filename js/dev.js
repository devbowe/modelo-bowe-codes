const elements = document.querySelectorAll("[data-code]");

elements.forEach((el) => {
    el.addEventListener("dblclick", (e) => {
        el.classList.toggle("active");

        const htmlCode = el.outerHTML;
        window.navigator.clipboard.writeText(htmlCode);
    });
});

// Modal logic
const root = document.documentElement;
const formStyles = document.forms[0];
const formBtn = document.querySelector("button.modalbtnSubmit");
const btnCloseForm = document.querySelector("button.close-modal");
const btnOpenForm = document.querySelector("button.modalbtn");
const modalForm = document.querySelector(".modal");

const clrBody = document.querySelector("input[name='clr-body']");
const clrText = document.querySelector("input[name='clr-text']");
const clrBtn = document.querySelector("input[name='clr-btn']");
const clrAccentPrimary = document.querySelector(
    "input[name='clr-accent-primary']"
);
const ffPrimary = document.querySelector("input[name='ff-primary']");
const ffTitle = document.querySelector("input[name='ff-title']");

formBtn.addEventListener("click", (e) => {
    e.preventDefault();

    root.style.setProperty("--clr-body", clrBody.value);
    root.style.setProperty("--clr-text", clrText.value);
    root.style.setProperty("--clr-btn", clrBtn.value);
    root.style.setProperty("--clr-accent-primary", clrAccentPrimary.value);
    root.style.setProperty("--ff-primary", ffPrimary.value);
    root.style.setProperty("--ff-title", ffTitle.value);
});

btnOpenForm.addEventListener("click", (e) => {
    modalForm.classList.add("modal-active");
});

btnCloseForm.addEventListener("click", (e) => {
    modalForm.classList.remove("modal-active");
});
