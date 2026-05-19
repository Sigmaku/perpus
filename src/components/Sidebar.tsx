import { RiBookOpenFill } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import { BiBookOpen } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { HiOutlineDocument } from "react-icons/hi2";
import { LuSettings } from "react-icons/lu";


const Sidebar = () => {
    const isDisabled = true;

    return (
        <div className="max-sm:invisible flex flex-col w-60 lg:w-60 md:w-60 bg-white border-r border-[#E5E7EB] gap-2 px-6 py-8">
            <div className="flex flex-row justify-center gap-3 mb-12">
                <div><RiBookOpenFill size={24} className="text-blue-400"/></div>
                <div className=" font-bold">Perpustakaan</div>
            </div>
            <div className={`flex flex-row items-center gap-3 h-11 px-4 font-semibold rounded-lg
                ${isDisabled
                    ? "text-gray-500 pointer-events-none grayscale"
                    : "bg-[#EEF2FF] text-[#4338CA] cursor-pointer"
                }`}>
                <div><GrHomeRounded size={18} className=""/></div>
                <div className=" font-semibold">Dashboard</div>
            </div>
            <div className="flex flex-row items-center gap-3 h-11 px-4 text-[#4338CA] bg-[#EEF2FF] font-semibold rounded-lg">
                <div><BiBookOpen size={18} className=""/></div>
                <div className="">Books</div>
            </div>
            <div className={`flex flex-row items-center gap-3 h-11 px-4 font-semibold rounded-xl
                ${isDisabled
                    ? "text-gray-500 pointer-events-none grayscale"
                    : "bg-[#EEF2FF] text-[#4338CA] cursor-pointer"
                }`}>
                <div><BsPeople size={18} className=""/></div>
                <div className=" font-semibold">Members</div>
            </div>
            <div className={`flex flex-row items-center gap-3 h-11 px-4 font-semibold rounded-xl
                ${isDisabled
                    ? "text-gray-500 pointer-events-none grayscale"
                    : "bg-[#EEF2FF] text-[#4338CA] cursor-pointer"
                }`}>
                <div><HiOutlineDocument size={18} className=""/></div>
                <div className=" font-semibold">Borrowing</div>
            </div>
            <div className={`flex flex-row items-center gap-3 h-11 px-4 font-semibold rounded-xl
                ${isDisabled
                    ? "text-gray-500 pointer-events-none grayscale"
                    : "bg-[#EEF2FF] text-[#4338CA] cursor-pointer"
                }`}>
                <div><LuSettings size={18} className=""/></div>
                <div className=" font-semibold">Settings</div>
            </div>
        </div>  
    )
}

export default Sidebar