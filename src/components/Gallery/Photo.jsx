
import * as React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CardImg } from "reactstrap";
import PhotoDetail from "./PhotoDetail";

export default function Photo(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
// console.log(props.photo.image);



  return (
    <div className="col-md-3 ">
      <Button onClick={handleOpen}>
        <CardImg
          alt={props.photo.title}
          src={props.photo.image}
          top
          width="100%"
        />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <PhotoDetail photo={props.photo} />
      </Modal>
    </div>
  );
}
