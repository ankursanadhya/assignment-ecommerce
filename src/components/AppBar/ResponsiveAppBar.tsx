import * as React from "react";
import Typography from "@mui/material/Typography";
import brandLogo from "../../../src/asset/images/brandLogo.jpg";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { PAGES, LOGIN_TEXT } from "../../contants/constants";
import "../customStyle/style.css";


function ResponsiveAppBar() {
    return (
        <>
            <div className="app-bar-container">
                <div className="app-bar-left">
                    <img className="app-bar-logo" src={brandLogo} alt="Brand Logo" />
                    {/* mapping all the text from contant file for app bar menu */}
                    {PAGES.map((page, index) => (
                        <Typography key={index} textAlign="center" style={{ marginLeft: "40px", fontSize: "14px" }} >
                            {page}
                        </Typography>
                    ))}
                </div>
                <div className="app-bar-right">
                    <SearchRoundedIcon className="app-bar-icon" />
                    <LocalGroceryStoreIcon className="app-bar-icon" />
                    <Typography textAlign="center" className="app-bar-login">
                        {LOGIN_TEXT}
                    </Typography>
                </div>
            </div>
        </>
    );
}


export default ResponsiveAppBar;
