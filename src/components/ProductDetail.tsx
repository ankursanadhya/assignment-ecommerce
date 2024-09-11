import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dummyData, productDetailsType } from "./dummyData";
import "./customStyle/style.css";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Stack from "@mui/material/Stack";
import { BUY_NOW } from "../contants/constants";

const ProductDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const productDetails: productDetailsType[] = dummyData.filter((item) => {
        return item.productName === location.state.productName;
    });

    return (
        <>
            <div data-testid="product-detail-container" className="product-detail-container">
                <div className="image-container">
                    <img
                        className="product-image"
                        src={productDetails[0].imageUrl}
                        alt={productDetails[0].productName}
                    />
                </div>

                <div className="description-container">
                    <p className="product-name">{productDetails[0].productName}</p>
                    <p className="description-text">
                        {productDetails[0].productDescription}
                    </p>

                    <p style={{ width: "75%" }}>{productDetails[0].productDetails}</p>

                    {/* Color Options */}
                    <div>
                        <p className="product-name">Color</p>
                        <Stack
                            direction="row"
                            spacing={3}
                            style={{ marginTop: "10px", marginBottom: "20px" }}
                        >
                            <div
                                className="color-circle"
                                data-testid="color-circle-element"
                                style={{ backgroundColor: "#978f8f" }}
                            ></div>
                            <div
                                className="color-circle"
                                data-testid="color-circle-element"
                                style={{ backgroundColor: "#164b60" }}
                            ></div>
                        </Stack>
                    </div>

                    {/* Price and Buy Button */}
                    <p className="product-name">Price per unit</p>
                    <div className="price-button-container">
                        <p className="price"> {productDetails[0].productPrice}</p>
                        <Button
                            className="add-to-cart-btn"
                            style={{
                                backgroundColor: "#164b60",
                                paddingLeft: "30px",
                                paddingRight: "30px",
                            }}
                            variant="contained"
                        >
                            {BUY_NOW}
                        </Button>
                        <LocalGroceryStoreIcon className="store-icon" data-testid="LocalGroceryStoreIcon" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
