import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { dummyData } from "./dummyData";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUsedNavigate,
    useLocation: () => ({
        state: { productName: "Clock" },
    }),
}));

describe("should render ProductDetail Component", () => {
    test("should render the ResponsiveAppBar", () => {
        render(<ProductDetail />);
        expect(screen.getByTestId("product-detail-container")).toBeInTheDocument();
    });

    test("should render the product image with the correct alt text", () => {
        render(<ProductDetail />);
        const image = screen.getByAltText(dummyData[0].productName);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", dummyData[0].imageUrl);
    });

    test("should render the product name and description", () => {
        render(<ProductDetail />);
        expect(screen.getByText(dummyData[0].productName)).toBeInTheDocument();
        expect(
            screen.getByText(dummyData[0].productDescription)
        ).toBeInTheDocument();
    });

    test("should render the product details", () => {
        render(<ProductDetail />);
        expect(screen.getByText(dummyData[0].productDetails!)).toBeInTheDocument();
    });

    test("should render color options as circles", () => {
        render(<ProductDetail />);
        const colorCircles = screen.getAllByTestId("color-circle-element");
        expect(colorCircles.length).toBe(2);
        expect(colorCircles[0]).toHaveStyle({ backgroundColor: "#978f8f" });
        expect(colorCircles[1]).toHaveStyle({ backgroundColor: "#164b60" });
    });

    test("should render the product price", () => {
        render(<ProductDetail />);
        expect(screen.getByText(dummyData[0].productPrice)).toBeInTheDocument();
    });

    test("should render the Buy Now button", () => {
        render(<ProductDetail />);
        const buyButton = screen.getByRole("button", { name: /buy now/i });
        expect(buyButton).toBeInTheDocument();
        expect(buyButton).toHaveStyle({ backgroundColor: "#164b60" });
    });
});
