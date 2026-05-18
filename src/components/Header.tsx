import { Button } from "@heroui/react";
import { GoPlus } from "react-icons/go";


const Header = () => {
  return (
    <div className="flex flex-row justify-between bg-white mt-6 p-6 w-full h-32 rounded-xl">
        <div className="flex flex-col ">
            <div className="text-[30px] font-bold text-[#111827]">Library Books</div>
            <div className="text-[14px] font-medium text-[#6B7280] mt-1">Manage your library collections</div>
        </div>
        <Button className="rounded-lg mt-2">
            <GoPlus/>
            Add Book
        </Button>
    </div>
  )
}

export default Header