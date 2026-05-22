import {RiBookOpenFill} from "react-icons/ri";
import {GrHomeRounded} from "react-icons/gr";
import {BiBookOpen} from "react-icons/bi";
import {BsPeople} from "react-icons/bs";
import {HiOutlineDocument} from "react-icons/hi2";
import {LuSettings} from "react-icons/lu";
import SidebarButton from "./SidebarButton.tsx";


type SidebarProps ={
    currentMenu: string
}

const Sidebar = ({currentMenu}:SidebarProps) => {
    return (
        <div className="max-sm:invisible flex flex-col w-60 lg:w-60 md:w-60 h-screen bg-white border-r border-[#E5E7EB] gap-2 px-6 py-8">
            <div className="flex flex-row justify-center gap-3 mb-12">
                <div><RiBookOpenFill size={24} className="text-blue-400"/></div>
                <div className=" font-bold">Perpustakaan</div>
            </div>
            <div className="flex flex-col gap-2">
                <SidebarButton icon={<GrHomeRounded size={18}/>} label={"Dashboard"} isActive={currentMenu==="dashboard"} url={"/"}/>
                <SidebarButton icon={<BiBookOpen size={18}/>} label={"Books"} isActive={currentMenu==="books"} url={"/books"}/>
                <SidebarButton icon={<BsPeople size={18}/>} label={"Members"} isActive={currentMenu==="members"} url={"/members"}/>
                <SidebarButton icon={<HiOutlineDocument size={18}/>} label={"Borrowing"} isActive={currentMenu==="borrowing"} url={"/borrowing"}/>
                <SidebarButton icon={<LuSettings size={18}/>} label={"Settings"} isActive={currentMenu==="settings"} url={"/settings"}/>
            </div>
        </div>  
    )
}

export default Sidebar