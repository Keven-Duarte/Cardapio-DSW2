import { Outlet } from "react-router";
import Menu from '../components/Menu'

export default function MenuLayout() {
    return (
        <>

            <div className="flex flex-col p-4 min-h-screen">
                <Menu />

                <main className="flex flex-1 items-cen">

                    <Outlet />
                </main>
            </div>
        </>
    )
}