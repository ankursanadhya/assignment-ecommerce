import { render, screen } from "@testing-library/react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { PAGES, LOGIN_TEXT } from "../../contants/constants";
import "@testing-library/jest-dom/extend-expect";

describe("should render ResponsiveAppBar Component", () => {
    test("should render logo", () => {
        render(<ResponsiveAppBar />);
        const logo = screen.getByAltText("Brand Logo");
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute(
            "src",
            expect.stringContaining("brandLogo.jpg")
        );
    });

    test("should renders navigation pages", () => {
        render(<ResponsiveAppBar />);
        PAGES.forEach((page) => {
            const pageElement = screen.getByText(page);
            expect(pageElement).toBeInTheDocument();
        });
    });

    test("should renders search and shopping cart icons", () => {
        render(<ResponsiveAppBar />);
        const searchIcon = screen.getByTestId("SearchRoundedIcon");
        const cartIcon = screen.getByTestId("LocalGroceryStoreIcon");

        expect(searchIcon).toBeInTheDocument();
        expect(cartIcon).toBeInTheDocument();
    });

    test("should renders the login text", () => {
        render(<ResponsiveAppBar />);
        const loginText = screen.getByText(LOGIN_TEXT);
        expect(loginText).toBeInTheDocument();
    });
});
