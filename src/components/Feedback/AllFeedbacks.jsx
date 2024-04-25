import React, { useEffect, useState } from "react";
import axios from "axios";

const AllFeedbacks = ({ photoId }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://image-pulse-44040-default-rtdb.firebaseio.com/feedbacks.json`
        );
        const feedbackData = response.data || {};
        const feedbacksArray = Object.keys(feedbackData).map((key) => ({
          id: key,
          ...feedbackData[key],
        }));
        setFeedbacks(feedbacksArray);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchData();
  }, []);

  const filteredFeedbacks = feedbacks.filter(
    (feedback) => feedback.photoId === photoId
  );

  return (
    <div>
      <h2>All Feedbacks</h2>
      {filteredFeedbacks.map((feedback, index) => (
        <div style={{backgroundColor:'#f5ffc1'}} className="border border-3 p-1  m-1 rounded" key={index}>
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
