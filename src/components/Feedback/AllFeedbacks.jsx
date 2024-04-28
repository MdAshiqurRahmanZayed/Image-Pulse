import React from "react";

const AllFeedbacks = ({ photoId, feedbacks }) => {
  const filteredFeedbacks = feedbacks.filter(
    (feedback) => feedback.photoId === photoId
  );

  return (
    <div>
      <h2>All Feedbacks</h2>
      {filteredFeedbacks.map((feedback, index) => (
        <div
          style={{ backgroundColor: "#f5ffc1" }}
          className="border border-3 p-1  m-1 rounded"
          key={index}
        >
          <p>
            <b>{feedback.message}</b>{" "}
          </p>
          <p>
            by: <b>{feedback.name}</b>{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllFeedbacks;
