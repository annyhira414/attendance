import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo.jsx";
import Emergency from "../components/Emergency.jsx";
import EmpAssets from "./EmpAssets.jsx";

const EmpDetails = ({ user }) => {
  const [value, setValue] = useState(0);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div>
        <Box>
          <Box sx={{ marginTop: "18px" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{
                  textTransform: "none",
                  letterSpacing: "0.015em",
                  marginLeft: 1,
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#2A2F32",
                }}
                label="Personal Information"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  marginLeft: "30px",
                  textTransform: "none",
                  letterSpacing: "0.015em",
                  fontSize: "13px",
                  color: "#2A2F32",
                  fontWeight: 600,
                }}
                label="Emergency Contact"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  marginLeft: "30px",
                  textTransform: "none",
                  letterSpacing: "0.015em",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#2A2F32",
                }}
                label="Employee Assets"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel className="mt-[40px]" value={value} index={0}>
            <PersonalInfo user={user} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Emergency user={user} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <EmpAssets user={user} />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default EmpDetails;
