import React from "react";

export const ReturnBook = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img src={require("./../../../Images/BooksImages/book1.jpeg")} alt="car" />
        <h6 className="mt-2">Your dreaming book</h6>
        <p>Cheia succesului</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
