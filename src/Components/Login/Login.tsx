import { Button, Grid, TextField } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Mapglobal from "./Map/Mapglobal";
import './style/style.css'
import { useDispatch } from "react-redux";
import {login} from './LoginSlice'

const Login = () => {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState("Login");
  const [data, setData] = React.useState({
    username:'',
    password:''
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid
        container
        padding={4}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"100vh"}
        sx={{ backgroundColor: "#011250e8" }}
      >
        <Mapglobal />
        <Grid
          container
          padding={5}
          justifyContent={"center"}
          width={"50%"}
          flexDirection={"column"}
        >
          <Box sx={{ width: "30%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  textColor="primary"
                  indicatorColor="primary"
                  onChange={handleChange}
                >
                  <Tab sx={{backgroundColor:'#5f87ca',borderRadius:"10px 10px 0 0",marginX:"2px"}} label="Login" value="Login" />
                  <Tab sx={{backgroundColor:'#5f87ca',borderRadius:"10px 10px 0 0",marginX:"2px"}} label="Register" value="Register" />
                </TabList>
              </Box>
              <TabPanel value="Login">
                <Grid container height='100px'>
                  <TextField
                    focused
                    label="Username"
                    variant="outlined"
                    value={data.username}
                    size="small"
                    sx={{ marginY: "5px", color: "red" }}
                    onChange={(e:any)=>{ setData({...data,username:e.target.value})}}

                  />
                  <TextField
                    focused
                    label="password"
                    variant="outlined"
                    size="small"
                    type={'password'}
                    value={data.password}
                    sx={{ marginY: "5px" }}
                    onChange={(e:any)=>{ setData({...data,password:e.target.value})}}
                  />
                  <Button
                    sx={{ color: "black", fontWeight: "700" }}
                    fullWidth
                    variant="contained"
                    onClick={()=>{dispatch(login({username:data.username,password:data.password}))}}
                  >
                    Sign in
                  </Button>
                </Grid>
              </TabPanel>
              <TabPanel value="Register">
              <Grid container height='100px'>
                  <TextField
                    focused
                    label="Username"
                    variant="outlined"
                    size="small"
                    sx={{ marginY: "5px", color: "red" }}
                  />
                  <TextField
                    focused
                    label="Email"
                    variant="outlined"
                    size="small"
                    sx={{ marginY: "5px" }}
                  />
                  <TextField
                    focused
                    label="password"
                    variant="outlined"
                    size="small"
                    sx={{ marginY: "5px" }}
                  />
                  <TextField
                    focused
                    label="password Confirm"
                    variant="outlined"
                    size="small"
                    sx={{ marginY: "5px" }}
                  />
                  <Button
                    sx={{ color: "black", fontWeight: "700" }}
                    fullWidth
                    variant="contained"
                  >
                    Register
                  </Button>
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
