import { useState } from "react";
import { useNavigate } from "react-router-dom";
import starImage from "../../src/asset/images/stars.png";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Pagination from "@mui/material/Pagination";
import "./customStyle/style.css";
import { dummyData } from "./dummyData";


const HomePage = () => {
    const navigate = useNavigate();


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;


    const totalPages = Math.ceil(dummyData.length / itemsPerPage);


    const handlePageChange = (event: any, value: any) => {
        setCurrentPage(value);
    };


    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = dummyData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>

            <div className="container" data-testid="HomePageContainer" >
                <div className="product-grid">
                    {currentItems.map((item, index) => (
                        <div
                            key={index}
                            className="product-card"
                            data-testid={`${index}-product-card-container`}
                            onClick={() => {
                                navigate("/about", { state: { productName: item.productName } });
                            }}
                        >
                            <div className="image-container">
                                <img
                                    className="product-image"
                                    src={item.imageUrl}
                                    alt={item.productName}
                                />
                                <div className="product-info">
                                    <span className="product-name">{item.productName}</span>
                                </div>
                            </div>
                            <div className="product-position">
                                <div className="product-description">
                                    <p className="item-description">{item.productDescription}</p>
                                    <p>{item.productPrice}</p>
                                </div>
                                <div className="product-actions">
                                    <img className="stars-image" src={starImage} alt="rating" />
                                    <LocalGroceryStoreIcon />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination part */}
                <div className="pagination-container">
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        variant="outlined"
                        shape="rounded"
                        sx={{
                            "& .Mui-selected": {
                                backgroundColor: "black",
                                color: "white",
                            },
                            "& .MuiPaginationItem-root.Mui-selected": {
                                backgroundColor: "black !important",
                                color: "white !important",
                            },
                            "& button": {
                                color: 'black',
                                backgroundColor: "transparent",
                                border: "0px"
                            }
                        }}
                    />
                </div>

            </div>
        </>
    );
};

export default HomePage;
