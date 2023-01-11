import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import PersonalDataEdit from "../../pages/edit/PersonalDataEdit";

const PersonalData = ({ user }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #0065FF",
    boxShadow: 24,
    pl: 4,
    pb: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e) => setOpen(false);
  return (
    <div>
      <button className="h-11" onClick={handleOpen}>
        <FaRegEdit className="w-[16px] h-[16px] ml-1 text-[#5C5C5C]" />
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Link
              onClick={handleClose}
              className="flex justify-end mr-2 mt-2 mb-3"
            >
              <MdCancel className="text-red-500 hover:text-red-600 w-7 h-7" />
            </Link>
            <Typography
              className="flex justify-center"
              id="modal-modal-title"
              variant="h5"
              component="h2"
            >
              Personal Data
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4, ml: 2 }}>
              <PersonalDataEdit handleClose={handleClose} user={user} />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PersonalData;
