const formButtonSubmit = document.querySelector("[data-form-button]");
const formFields = Array.from(document.querySelectorAll("[data-required]"));

const validations = {
    text: function (field) {
        return field.value.trim() === "" ? false : true;
    },

    email: function (field) {
        if (validacaoEmail(field.value) && emailCorporativo(field.value)) {
            return true;
        } else {
            return false;
        }
    },

    phone: function (field) {
        return field.value.length < 10 ? false : true;
    },

    select: function (field) {
        return field.value === "nulo" || field.value === "" ? false : true;
    },

    checkbox: function (field) {
        return field.checked === "false" || field.checked === false
            ? false
            : true;
    },

    false: function () {
        return true;
    },
};

formButtonSubmit.addEventListener("click", (e) => {
    let hasError = true;

    for (let i = 0; i < formFields.length; i++) {
        const field = formFields[i];

        const fieldType = field.getAttribute("data-required");

        if (!validations[fieldType](field)) {
            console.log(fieldType);
            showPopUpValidation(
                e,
                field,
                field.getAttribute("validation-message")
            );
            hasError = true;
            break;
        } else {
            hasError = false;
        }
    }

    if (hasError) {
        e.preventDefault();
        return false;
    } else {
        e.preventDefault();

        setTimeout(() => {
            window.location.href =
                "https://hml.bowe.com.br/aec/solucoes-customizadas/obrigado.html";
        }, 1500);
    }

    return true;
});

/* VALIDATIONS */
function showPopUpValidation(event, field, message) {
    Swal.fire({
        icon: "warning",
        text: message,
        timer: 2500,
        onAfterClose: () => {
            field.focus();
        },
    });

    event.preventDefault();
}

function validacaoEmail(email) {
    var verifica =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return verifica.test(String(email).toLowerCase());
}

function emailCorporativo(email) {
    const invalidDomains = [
        "@gmail.",
        "@yahoo.",
        "@hotmail.",
        "@live.",
        "@aol.",
        "@outlook.",
        "@terra.",
        "@bol.",
        "@uol.",
    ];

    for (let i = 0; i < invalidDomains.length; i++) {
        const domain = invalidDomains[i];
        if (email.indexOf(domain) != -1) {
            return false;
        }
    }
    return true;
}

const phoneField = document.querySelector("input[data-required='phone']");
phoneField && phoneField.addEventListener("input", handlePhoneInput, false);

function handlePhoneInput(e) {
    e.target.value = phoneMask(e.target.value);
}

function phoneMask(phone) {
    return phone
        .replace(/\D/g, "")
        .replace(/^(\d)/, "($1")
        .replace(/^(\(\d{2})(\d)/, "$1) $2")
        .replace(/(\d{5})(\d{1,4})/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
}
