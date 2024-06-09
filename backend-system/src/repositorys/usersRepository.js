const { PrismaClient } = require("@prisma/client");
const { comparePassword } = require("../utils/password");

const prisma = new PrismaClient();

const createUser = async (user) => {
    const newUser = await prisma.user.create({
        data: {
            nomeRazaoSocial: user.nomeRazaoSocial,
            cnpj: user.cnpj,
            endereco: user.endereco,
            bairro: user.bairro,
            cep: user.cep,
            municipio: user.municipio,
            telefoneFax: user.telefoneFax,
            uf: user.uf,
            inscricaoEstadual: user.inscricaoEstadual,
            email: user.email,
            password: user.password,
        },
        select: {
            id: true,
            nomeRazaoSocial: true,
            email: true,
            createdAt: true,
        },
    });
    return newUser;
};

const loginUser = async ({ email, cnpj, password }) => {
    let userFound;
    if (email) {
        userFound = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                nomeRazaoSocial: true,
                email: true,
                createdAt: true,
                password: true,
            },
        });
    } else if (cnpj) {
        userFound = await prisma.user.findUnique({
            where: { cnpj },
            select: {
                id: true,
                nomeRazaoSocial: true,
                email: true,
                createdAt: true,
                password: true,
            },
        });
    }

    if (!userFound || !comparePassword(password, userFound.password)) {
        throw new Error("Invalid email, CNPJ, or password");
    }

    return userFound;
};

module.exports = {
    createUser,
    loginUser,
};
