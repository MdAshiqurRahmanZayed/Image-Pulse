import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { CardImg } from "reactstrap";
import Typography from "@mui/material/Typography";
import Feedback from "../Feedback/Feedback";
import AllFeedbacks from "../Feedback/AllFeedbacks";
import { fetchFeedback } from "../../redux/actions";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = (state) => ({
  feedbacks: state.feedbacks,
  isLoading: state.isLoading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchFeedback,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PhotoDetail = (props) => {
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

  const addFeedBack = (feedback) => {
    setFeedbacks([...feedbacks, feedback]);
  };

  return (
    <div>
      <Box sx={{ ...style, maxHeight: "80vh", overflowY: "auto" }}>
        <CardImg
          alt={props.photo.title}
          src={props.photo.image}
          top
          width="100%"
        />
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {props.photo.title}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h3">
          Category: <b>{props.photo.category}</b>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.photo.description}
        </Typography>
        <AllFeedbacks photoId={props.photo.id} feedbacks={feedbacks} />
        <Feedback photoId={props.photo.id} addFeedBack={addFeedBack} />
      </Box>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);
