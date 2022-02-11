import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import News1 from "../../Assets/images/News/mountain.jpeg";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchNews,selectNews } from "./NewsSlice";
import { useSelector } from "react-redux";

const News = () => {
  const dispatch = useAppDispatch();
  const newsSelector = useSelector(selectNews)
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  console.log(newsSelector)

  return (
    <>
      <Grid
        spacing={8}
        padding={4}
        className="header_news"
        container
        justifyContent={"space-between"}
      >
        <Grid item>
          <Typography variant="h5">Upcoming event</Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <FormatListBulletedOutlinedIcon />
          </IconButton>
          <IconButton>
            <WindowOutlinedIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        className="news"
        justifyContent={"space-around"}
        padding={"40px 0"}
      >
        <Grid md={1} item>
          <Grid
            container
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            height="100%"
          >
            <Typography variant="h5" color="initial">
              JUN
            </Typography>
            <Divider />
            <Typography variant="h2" color="initial" fontWeight={900}>
              23
            </Typography>
          </Grid>
        </Grid>
        <Grid md={4} item alignItems={"center"}>
          <Grid container>
            <img
              src={News1}
              style={{ borderRadius: "10px" }}
              alt="news1"
              width={"100%"}
              height={"300px"}
            />
          </Grid>
        </Grid>
        <Grid md={5} item>
          <Grid
            container
            flexDirection={"column"}
            justifyContent={"space-around"}
            height="100%"
          >
            <Grid item>
              <Typography variant="h5" color="initial" fontWeight={700}>
                Title of the Risen Even
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="gray">
                1015 california ave,Los Angles CA
                <br />
                7:00 PM __ 8:00 PM
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tincidunt ornare urna. Mauris pharetra, tellus a venenatis
                consectetur ornare urna.tincidunt ornare urna. Mauris pharetra,
              </Typography>
            </Grid>
            <Divider />
            <Grid item>
              <Button
                variant="text"
                color="success"
                endIcon={<ArrowForwardIcon />}
              >
                View Even Details
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default News;
