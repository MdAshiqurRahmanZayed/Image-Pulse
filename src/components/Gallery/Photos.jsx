import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {  fetchPhotos } from "../../redux/actions";
import Photo from "./Photo";
import Loading from "../Loading/Loading";

const mapStateToProps = (state) => ({
  photos: state.photos,
  isLoading: state.isLoading,
  error: state.error,
  feedbacks: state.feedbacks,
});

const mapDispatchToProps = {
  fetchPhotos,
};

const Photos = ({ photos, isLoading, error, fetchPhotos }) => {
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchPhotos();
    // fetchFeedback();
  }, [fetchPhotos]);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPhotos(photos);
    } else {
      setFilteredPhotos(
        photos.filter((photo) => photo.category === selectedCategory)
      );
    }
  }, [photos, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-12 mb-3 d-flex justify-content-center my-3">
            <button
              className={`btn btn-outline-primary me-2 ${
                selectedCategory === "All" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("All")}
            >
              All
            </button>
            <button
              className={`btn btn-outline-primary me-2 ${
                selectedCategory === "Nature" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("Nature")}
            >
              Nature
            </button>
            <button
              className={`btn btn-outline-primary me-2 ${
                selectedCategory === "AI" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("AI")}
            >
              AI
            </button>
            <button
              className={`btn btn-outline-primary me-2 ${
                selectedCategory === "Sea" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("Sea")}
            >
              Sea
            </button>
            <button
              className={`btn btn-outline-primary me-2 ${
                selectedCategory === "Travel" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("Travel")}
            >
              Travel
            </button>
            <button
              className={`btn btn-outline-primary me-2 ${
                selectedCategory === "Mount" ? "active" : ""
              }`}
              onClick={() => handleCategoryChange("Mount")}
            >
              Mount
            </button>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            filteredPhotos.map((photo) => (
              <Photo key={photo.id} photo={photo} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
