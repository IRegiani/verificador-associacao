/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import { useStyles, styles } from './style';

const TabPanel = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const LoginHome = () => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState();

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <div style={styles.outerContainer}>
      <Container fixed maxWidth="sm">
        <Paper>
          {/* <div className={classes.root}> */}
          {/* <AppBar position="static"> */}
          <Tabs value={currentTab} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
          {/* </AppBar> */}
          <TabPanel value={currentTab} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={currentTab} index={2}>
            Item Three
          </TabPanel>
          {/* </div> */}
        </Paper>
      </Container>
    </div>
  );
};

export default LoginHome;
