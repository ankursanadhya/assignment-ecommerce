import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <ResponsiveAppBar />
            <div>{children}</div>
        </>
    );
};

export default Layout;
