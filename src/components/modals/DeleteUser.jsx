import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { AiOutlineDelete } from "react-icons/ai";
import { GoAlert } from "react-icons/go";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteUser = () => {
  const [user, setUser] = useState();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #FC5B5B",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    setUser(res.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    toast.success("User has been deleted successfully!");
    loadUser();
  };

  return (
    <div>
      <button
        className="font-bold mt-[8px] flex text-[#DE2424]  mr-[47px] bg-[rgb(255,50,50)]/10 rounded-[6px] w-[111px] h-[40px]"
        onClick={handleOpen}
      >
        <AiOutlineDelete className="leading-[150%] w-[21px] h-[21px] ml-[16px] mt-[9px]" />
        <p className="font-[600] text-[16px] ml-[10px] mt-[8px]">Delete</p>
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
            <Typography id="modal-modal-title">
              <p className="text-lg flex">
                <GoAlert className="-ml-3 w-16 text-red-500 h-[55px] mr-4" />
                Are you sure you want to permanently delete this Employee?
              </p>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 8 }}>
              <div>
                <Link
                  onClick={handleClose}
                  className="ml-24 text-sm border bg-gray-500 text-white py-2 px-3 rounded-sm hover:bg-gray-600 hover:text-white hover:border-white"
                >
                  CANCEL
                </Link>
                <Link
                  onClick={() => deleteUser(user.id)}
                  to={"/cards"}
                  className="ml-10 border text-sm bg-red-400 text-white hover:bg-red-500 hover:border-white hover:text-white rounded-sm py-2 px-3"
                >
                  YES,DELETE
                </Link>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteUser;
