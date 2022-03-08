import { Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import logo from "../../Assets/images/newsLogo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ScrollToTop from "react-scroll-to-top";
import "./style/Header.css";
import { useDispatch } from "react-redux";
import {changeViewState} from '../News/NewsSlice'


const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Box component="div" className="navbar_header" height="400px">
        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ backgroundColor: "fffff" }}
        >
          <Grid item>
            <img
              src={logo}
              style={{
                backgroundColor: "#e5dcdc2e",
                borderRadius: "50%",
                margin: "0 5px",
              }}
              width={50}
              alt="logo"
            />
          </Grid>
          <Grid item sx={{ borderColor: "divider", padding: "15px" }}>
            <Tabs aria-label="basic tabs example">
              <Tab label="ABOUT" sx={{ fontWeight: "600", color: "#ffff" }} />
              <Tab label="CONNECT" sx={{ fontWeight: "600", color: "#ffff" }} />
              <Tab
                label="RESOURCES"
                sx={{ fontWeight: "600", color: "#ffff" }}
              />
              <Tab label="GIVE" sx={{ fontWeight: "600", color: "#ffff" }} />
              <Tab label="CONTACT" sx={{ fontWeight: "600", color: "#ffff" }} />

              <Tab
                className="icon-twit"
                sx={{ color: "#ffff" }}
                icon={<TwitterIcon fontSize="small" />}
              />
              <Tab
                className="icon-face"
                sx={{ color: "#ffff" }}
                icon={<FacebookIcon fontSize="small" />}
              />
              <Tab
                className="icon-insta"
                sx={{ color: "#ffff" }}
                icon={<InstagramIcon fontSize="small" />}
              />
            </Tabs>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems={"center"}
          flexDirection={"column"}
          margin="40px 0"
        >
          <Grid item>
            <Typography variant="h1" component="h2" color="white">
              EVENTS
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="h2"
              color="white"
              align="center"
            >
              aspernatur et reiciendis alias vel obcaecati expedita ex quibusdam
              <br />
              Debitis molestiae odit illum, odio pariatur doloribus ducimus
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid
        spacing={8}
        padding={4}
        className="header_news"
        container
        justifyContent={"space-between"}
      >
        <ScrollToTop
          smooth
          component={<ArrowCircleUpIcon color="secondary" />}
        />
        <Grid item>
          <Typography variant="h5">Upcoming event</Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={()=>{dispatch(changeViewState(false))}}>
            <FormatListBulletedOutlinedIcon />
          </IconButton>
          <IconButton onClick={()=>{dispatch(changeViewState(true))}}>
            <WindowOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
