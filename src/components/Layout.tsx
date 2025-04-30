import { Outlet } from "react-router-dom";
import { TabMenu } from "./TabMenu";

export function Layout() {
    return (
        <div>
            <TabMenu />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
