import React, { } from "react";
import Box from "@mui/material/Box";
import { CardImg } from "reactstrap";
import Typography from "@mui/material/Typography";
import Feedback from "../Feedback/Feedback";
import AllFeedbacks from "../Feedback/AllFeedbacks";
import { fetchFeedback } from "../../redux/actions";
import { connect } from "react-redux";

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

const photoDetail = (props) => {


  return (
    <div>
      <Box sx={{ ...style, maxHeight: "80vh", overflowY: "auto" }}>
        <CardImg alt={props.photo.title} src={props.photo.image} top width="100%" />
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {props.photo.title}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h3">
          Category: <b>{props.photo.category}</b>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {props.photo.description}
        </Typography>
        <AllFeedbacks photoId={props.photo.id} />
        <Feedback photoId={props.photo.id} />
      </Box>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(photoDetail);
