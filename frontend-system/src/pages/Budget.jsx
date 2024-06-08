import React from "react";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CloseIcon from "@mui/icons-material/Close";

const Budget = () => {
    return (
        <div className="p-6">
            <div className="flex items-center space-x-2 mb-4">
                <button className="bg-white shadow-md px-1 border-2 border-gray-200 hover:bg-gray-100 ml-2 rounded-lg">
                    <SettingsIcon />
                </button>
                <button className="bg-white shadow-md p-1 border-2 border-gray-200 hover:bg-gray-100 ml-2 rounded-lg">
                    Listar
                </button>
                <button className="bg-white shadow-md p-1 border-2 border-gray-200 hover:bg-gray-100 ml-2 rounded-lg">
                    +Novo
                </button>
            </div>

            <div className="mb-6">
                <h1 className="text-3xl font-bold">Orçamentos</h1>
            </div>

            <div className="flex space-x-4 mb-6">
                <TextField
                    label="Data Inicial"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    className="w-1/3"
                />
                <TextField
                    label="Data Final"
                    variant="outlined"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    className="w-1/3"
                />
                <button className="shadow-md p-4 rounded-lg border-gray-500 bg-zinc-700 text-white ml-2 hover:bg-zinc-800">
                    Filtrar
                </button>
            </div>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Nro</TableCell>
                            <TableCell>Cliente</TableCell>
                            <TableCell>Preço Serviço</TableCell>
                            <TableCell>Preço Material</TableCell>
                            <TableCell>Desconto</TableCell>
                            <TableCell>Situação</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>01/01/2021</TableCell>
                            <TableCell>001</TableCell>
                            <TableCell>Cliente 1</TableCell>
                            <TableCell>R$ 100,00</TableCell>
                            <TableCell>R$ 50,00</TableCell>
                            <TableCell>R$ 10,00</TableCell>
                            <TableCell>Aberto</TableCell>
                            <TableCell>
                                <button className="bg-white shadow-md p-2 border-2 border-gray-100 hover:bg-gray-100">
                                    <VisibilityIcon />
                                </button>
                                <button className="bg-white shadow-md p-2 border-2 border-gray-100 hover:bg-gray-100 ml-2">
                                    <EditIcon />
                                </button>

                                <button className="bg-white shadow-md p-2 border-2 border-gray-100 hover:bg-gray-100 ml-2">
                                    <ReceiptIcon />
                                </button>

                                <button className="bg-white shadow-md p-2 border-2 border-gray-100 hover:bg-gray-100 ml-2">
                                    <InsertDriveFileIcon />
                                </button>

                                <button className="bg-white shadow-md p-2 border-2 border-gray-100 hover:bg-gray-100 ml-2">
                                    <CloseIcon />
                                </button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Budget;
