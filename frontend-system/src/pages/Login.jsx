import React, { useState } from "react";
import axios from "axios";
import LocalStorageHelper from "../helpers/localstorage-helper";

const Login = () => {
    const [formData, setFormData] = useState({
        emailOrCnpj: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { emailOrCnpj, password } = formData;

            if (!emailOrCnpj || !password) {
                throw new Error("Email/CNPJ and password are required");
            }

            let payload = { password };
            if (emailOrCnpj.includes("@")) {
                payload.email = emailOrCnpj;
            } else {
                payload.cnpj = emailOrCnpj;
            }

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/users/login`,
                payload
            );

            const { token } = response.data;
            console.log("Token", token);
            LocalStorageHelper.setToken(token);

            window.location.href = "/";
        } catch (error) {
            console.error("Login error", error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">
                                Email or CNPJ
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite seu email ou CNPJ"
                                name="emailOrCnpj"
                                value={formData.emailOrCnpj}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Senha</label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite sua senha"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="shadow-md w-full p-2 rounded border-gray-500 bg-zinc-500 text-white hover:bg-zinc-600 "
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-gray-700">Não tem conta? </span>
                    <a
                        href="/register"
                        className="text-zinc-500 hover:underline"
                    >
                        Registre-se agora
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
