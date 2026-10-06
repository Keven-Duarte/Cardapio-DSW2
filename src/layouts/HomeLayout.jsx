import { Outlet } from "react-router";
import Header from '../components/Header'

export default function HomeLayout() {
    return(
        <>
        <div className="flex flex-col p-4 min-h-screen bg-linho">
            <Header />
            <main className="flex flex-1 items-center justify-center w-full">
                <Outlet />
            </main>
        </div>
        </>
    )
}