import { Grid, IconButton, Typography } from "@mui/material";
import logo from "../../Assets/images/newsLogo.png";
import Tabs from "./Tabs";
import Icons from "./Icons";
import { Box } from "@mui/system";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ScrollToTop from "react-scroll-to-top";
import "./style/Header.css";
import { useDispatch } from "react-redux";
import { changeViewState, selectNews } from "../News/NewsSlice";
import { useAppSelector } from "../../app/hooks";

const Header = () => {
  const dispatch = useDispatch();
  const newsSelector = useAppSelector(selectNews);

  return (
    <>
      <Box component="div" className="navbar_header" height="400px">
        <Grid
          container
          alignItems={"flex-start"}
          justifyContent={{ xs: "center", sm: "space-between" }}
          sx={{ backgroundColor: "#a9a6a647", width: "100%" }}
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
          <Grid item width={{xs:"100%",sm:'unset'}}>
            <Tabs />
          </Grid>
          <Grid item>
            <Icons />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems={"center"}
          flexDirection={"column"}
          margin="40px 0"
        >
          <Grid item>
            <Typography id="event" variant="h1" component="h2" color="white">
              EVENTS
            </Typography>
          </Grid>
          <Grid item>
            <Typography
            id="text_land"
              variant="h4"
              color="white"
              align="center"
            >
              aspernatur et reiciendis alias vel obcaecati expedita 
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
          <IconButton
            color={newsSelector.viewState ? "secondary" : "inherit"}
            onClick={() => {
              dispatch(changeViewState(true));
            }}
          >
            <FormatListBulletedOutlinedIcon />
          </IconButton>
          <IconButton
            color={newsSelector.viewState ? "inherit" : "secondary"}
            onClick={() => {
              dispatch(changeViewState(false));
            }}
          >
            <WindowOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
