import { NavLink } from "react-router-dom";
import { Tabs, Tab, Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface TabPage {
    path: string;
    label: string;
}

export function TabMenu() {
    const { t } = useTranslation();

    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const tabs: TabPage[] = [
        { path: '/', label: t('tabmenu.home') },
        { path: '/projects', label: t('tabmenu.projects') },
        { path: '/consulting', label: t('tabmenu.consulting') },
        { path: '/contact', label: t('tabmenu.contact') },
        { path: '/about', label: t('tabmenu.about') },
    ];

    useEffect(() => {
        const currentTab = tabs.findIndex(tab => tab.path === location.pathname);
        setValue(currentTab);
    }, [location.pathname]);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        navigate(tabs[newValue].path);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2, width: '100%' }}>
            <Tabs value={value}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                centered>
                {tabs.map((tab) => (
                    <Tab key={tab.path} label={tab.label} />
                ))}
            </Tabs>
        </Box>
    );
}
