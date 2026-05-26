import Sidebar from "../../components/Sidebar.tsx";
import type {PropsWithChildren} from "react";


type DefaultLayoutProps = {
    currentMenu: string
} & PropsWithChildren

export default function DefaultLayout({currentMenu, children}: DefaultLayoutProps){
    return(
        <div className="flex flex-row">
            <Sidebar currentMenu={currentMenu}/>
            <div className="p-5 bg-gray-50 w-full">{children}</div>
        </div>
    )
}
