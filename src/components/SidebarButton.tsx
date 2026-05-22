import {Card} from "@heroui/react";
import {useNavigate} from "react-router";
import type {ReactNode} from "react";


type SidebarButtonProps ={
    icon: ReactNode
    label: string
    isActive:boolean
    url: string
}

const SidebarButton = ({url,icon, label, isActive}: SidebarButtonProps) => {
    const navigate = useNavigate()
    return (
        <Card className={`rounded-lg ${isActive
            ? "bg-blue-300 text-blue-500"
            : "bg-white text-black"
        }}`}
              onClick={()=>{
            navigate(url)
        }}>
            <Card.Content className="flex flex-row gap-2 items-center ">
                {icon}
                <div className="font-semibold">{label}</div>
            </Card.Content>
        </Card>
    )
}

export default SidebarButton