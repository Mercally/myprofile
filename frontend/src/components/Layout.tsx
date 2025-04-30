import { Outlet } from "react-router-dom";
import { TabMenu } from "./TabMenu";
import { Container, Box } from "@mui/material";

export function Layout() {
    return (
        <Container maxWidth="md">
            <Box sx={{ paddingTop: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <TabMenu />
                </Box>
                <Box component="main" sx={{ marginTop: 4, textAlign: 'left' }}>
                    <Outlet />
                </Box>
            </Box>
        </Container>
    );
}
