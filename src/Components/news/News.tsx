import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchNews, selectNews } from "./NewsSlice";
import { useSelector } from "react-redux";
import './style/style.css'



const News = () => {
  const dispatch = useAppDispatch();
  const newsSelector = useSelector(selectNews);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
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
      {newsSelector.lists.map((item: any, index: number) => (
        <>
          <Grid
            key={index}
            className="news"
            container
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
                <IconButton>
                  <CampaignOutlinedIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
            <Grid md={4} item alignItems={"center"}>
              <Grid container>
                <img
                  src={item.urlToImage}
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
                p={4}
              >
                <Grid item>
                  <Typography variant="h5" color="initial" fontWeight={700}>
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" color="gray">
                    {item.author}
                    <br />
                    {item.publishedAt}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" color="initial">
                    {item.content}
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
      ))}
    </>
  );
};

export default News;
