const { checkSchema } = require("express-validator");

const sanitize = (value) => {
    return value.replace(/[^\d]/g, "");
};

const validateCreateUser = checkSchema({
    nomeRazaoSocial: {
        in: ["body"],
        isString: {
            errorMessage: "Name must be a string",
        },
        isLength: {
            options: {
                max: 200,
                min: 1,
            },
            errorMessage: "Razão Social must be between 1 and 200 characters",
        },
        notEmpty: {
            errorMessage: "Razão Social Cannot be empty",
        },
    },
    cnpj: {
        in: ["body"],
        customSanitizer: {
            options: (value) => sanitize(value),
        },
        isString: {
            errorMessage: "CNPJ must be a string",
        },
        isLength: {
            options: {
                max: 14,
                min: 14,
            },
            errorMessage: "CNPJ must be 14 characters",
        },
        notEmpty: {
            errorMessage: "CNPJ Cannot be empty",
        },
    },
    endereco: {
        in: ["body"],
        isString: {
            errorMessage: "Endereço must be a string",
        },
        isLength: {
            options: {
                max: 200,
                min: 1,
            },
            errorMessage: "Endereço must be between 1 and 200 characters",
        },
        notEmpty: {
            errorMessage: "Endereço Cannot be empty",
        },
    },
    bairro: {
        in: ["body"],
        isString: {
            errorMessage: "Bairro must be a string",
        },
        isLength: {
            options: {
                max: 200,
                min: 1,
            },
            errorMessage: "Bairro must be between 1 and 200 characters",
        },
        notEmpty: {
            errorMessage: "Bairro Cannot be empty",
        },
    },
    cep: {
        in: ["body"],
        isString: {
            errorMessage: "CEP must be a string",
        },
        isLength: {
            options: {
                max: 8,
                min: 8,
            },
            errorMessage: "CEP must be 8 characters",
        },
        notEmpty: {
            errorMessage: "CEP Cannot be empty",
        },
    },
    municipio: {
        in: ["body"],
        isString: {
            errorMessage: "Municipio must be a string",
        },
        isLength: {
            options: {
                max: 200,
                min: 1,
            },
            errorMessage: "Municipio must be between 1 and 200 characters",
        },
        notEmpty: {
            errorMessage: "Municipio Cannot be empty",
        },
    },
    telefoneFax: {
        in: ["body"],
        customSanitizer: {
            options: (value) => sanitize(value),
        },
        isString: {
            errorMessage: "Telefone/Fax must be a string",
        },
        isLength: {
            options: {
                max: 11,
                min: 10,
            },
            errorMessage: "Telefone/Fax must be between 10 and 11 characters",
        },
        matches: {
            options: /^[1-9]{2}[0-9]{8,9}$/,
            errorMessage: "Telefone/Fax must be a valid phone number",
        },
        notEmpty: {
            errorMessage: "Telefone/Fax Cannot be empty",
        },
    },
    uf: {
        in: ["body"],
        isString: {
            errorMessage: "UF must be a string",
        },
        isLength: {
            options: {
                max: 2,
                min: 2,
            },
            errorMessage: "UF must be 2 characters",
        },
        notEmpty: {
            errorMessage: "UF Cannot be empty",
        },
    },
    inscricaoEstadual: {
        in: ["body"],
        isString: {
            errorMessage: "Inscrição Estadual must be a string",
        },
        isLength: {
            options: {
                max: 20,
                min: 1,
            },
            errorMessage:
                "Inscrição Estadual must be between 1 and 20 characters",
        },
        notEmpty: {
            errorMessage: "Inscrição Estadual Cannot be empty",
        },
    },
    email: {
        in: ["body"],
        isEmail: {
            errorMessage: "Email must be a valid email",
        },
        isString: {
            errorMessage: "Email must be a string",
        },
        isLength: {
            options: {
                max: 200,
                min: 1,
            },
            errorMessage: "Email must be between 1 and 200 characters",
        },
        notEmpty: {
            errorMessage: "Email cannot be empty",
        },
    },
    password: {
        in: ["body"],
        isString: {
            errorMessage: "Password must be a string",
        },
        isLength: {
            options: {
                max: 20,
                min: 8,
            },
            errorMessage: "Password must be between 8 and 20 characters",
        },
        notEmpty: {
            errorMessage: "Password cannot be empty",
        },
    },
});

const validateLoginUser = checkSchema({
    email: {
        in: ["body"],
        isEmail: {
            errorMessage: "Email must be a valid email",
        },
        isLength: {
            options: { max: 200 },
            errorMessage: "Email must be at most 200 characters",
        },
        optional: true,
    },
    cnpj: {
        in: ["body"],
        customSanitizer: {
            options: (value) => sanitize(value),
        },
        isString: {
            errorMessage: "CNPJ must be a string",
        },
        isLength: {
            options: { max: 14, min: 14 },
            errorMessage: "CNPJ must be 14 characters",
        },
        optional: true,
    },
    password: {
        in: ["body"],
        isString: {
            errorMessage: "Password must be a string",
        },
        isLength: {
            options: { max: 20, min: 8 },
            errorMessage: "Password must be between 8 and 20 characters",
        },
        notEmpty: {
            errorMessage: "Password cannot be empty",
        },
    },
});

module.exports = {
    validateCreateUser,
    validateLoginUser,
};
