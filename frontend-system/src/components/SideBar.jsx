import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import InventoryIcon from "@mui/icons-material/Inventory";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SideBar = () => {
    return (
        <div className="fixed top-16 h-screen bg-zinc-800 p-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <HomeIcon sx={{ color: "white" }} />
                    <h1 className="text-white">Pagina Inicial</h1>
                </div>
            </div>
            <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-2">
                    <PaymentIcon sx={{ color: "white" }} />
                    <h1 className="text-white">Financeiro</h1>
                </div>
                <ArrowDropDownIcon sx={{ color: "white" }} />
            </div>
            <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-2">
                    <InventoryIcon sx={{ color: "white" }} />
                    <h1 className="text-white">Produtos/Serviços</h1>
                </div>
                <ArrowDropDownIcon sx={{ color: "white" }} />
            </div>
            <div className="flex items-center justify-between mt-6">
                <div className="flex items-center space-x-2">
                    <AssessmentIcon sx={{ color: "white" }} />
                    <h1 className="text-white">Relatórios</h1>
                </div>
                <ArrowDropDownIcon sx={{ color: "white" }} />
            </div>
        </div>
    );
};

export default SideBar;
