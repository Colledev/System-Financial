const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const { comparePassword } = require("../utils/password");

const createUser = async (user) => {
    const newUser = await prisma.user.create({
        data: user,
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
        },
    });
    return newUser;
};

const loginUser = async (user) => {
    const userFound = await prisma.user.findUnique({
        where: {
            email: user.email,
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            password: true,
        },
    });
    if (!userFound || !comparePassword(user.password, userFound.password)) {
        throw new Error("Invalid e-mail or password");
        return;
    }
    return userFound;
};

module.exports = {
    createUser,
    loginUser,
};
