import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        nomeRazaoSocial: "",
        cnpj: "",
        endereco: "",
        bairro: "",
        cep: "",
        municipio: "",
        telefoneFax: "",
        uf: "",
        inscricaoEstadual: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">
                    Cadastro
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">
                                Nome/Razão Social
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite o nome ou razão social"
                                name="nomeRazaoSocial"
                                value={formData.nomeRazaoSocial}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">CNPJ</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite o CNPJ"
                                name="cnpj"
                                value={formData.cnpj}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Endereço
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite o endereço"
                                name="endereco"
                                value={formData.endereco}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Bairro
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite o bairro"
                                name="bairro"
                                value={formData.bairro}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">CEP</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite o CEP"
                                name="cep"
                                value={formData.cep}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Município
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite o município"
                                name="municipio"
                                value={formData.municipio}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Telefone/Fax
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite o telefone/fax"
                                name="telefoneFax"
                                value={formData.telefoneFax}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">UF</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite o UF"
                                name="uf"
                                value={formData.uf}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                Inscrição Estadual
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite a inscrição estadual"
                                name="inscricaoEstadual"
                                value={formData.inscricaoEstadual}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite o email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Senha</label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                placeholder="Digite a senha"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="shadow-md w-full p-2 rounded border-gray-500 bg-zinc-500 text-white hover:bg-zinc-600 "
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <span className="text-gray-700">Já tem conta? </span>
                    <a href="login" className="text-zinc-500 hover:underline">
                        Faça Login agora
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
