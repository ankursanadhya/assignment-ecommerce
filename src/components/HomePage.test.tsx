import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";
import { dummyData } from "./dummyData";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("HomePage Component", () => {
    test("should render ResponsiveAppBar", () => {
        render(<HomePage />);
        expect(screen.getByTestId("HomePageContainer")).toBeInTheDocument(); // Assuming ResponsiveAppBar has a 'banner' role
    });

    test("should display correct number of items per page", () => {
        const { container } = render(<HomePage />);
        expect(container.getElementsByClassName("product-image").length).toBe(6);
    });

    test("should render pagination with correct total pages", () => {
        render(<HomePage />);

        const totalPages = Math.ceil(dummyData.length / 6);
        expect(screen.getByRole("navigation")).toBeInTheDocument();
        expect(screen.getAllByRole("button").length).toBe(totalPages + 2);
    });
});
