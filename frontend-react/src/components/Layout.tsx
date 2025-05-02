import { Outlet } from "react-router-dom";
import { TabMenu } from "./TabMenu";
import { Container, Box, Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function Layout() {
    const { i18n } = useTranslation();

    const [language, setLanguage] = useState(i18n.language);
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const newLanguage = event.target.value as string;
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ paddingTop: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Select value={language} onChange={handleChange} size="small">
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Español</MenuItem>
                    </Select>
                    <TabMenu />
                </Box>
                <Box component="main" sx={{ marginTop: 4, textAlign: 'left' }}>
                    <Outlet />
                </Box>
            </Box>
        </Container>
    );
}
