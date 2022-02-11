import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import News1 from "../../Assets/images/News/mountain.jpeg";

const News = () => {
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
        p={"40px 0"}
      >
        <Grid
          md={1}
          container
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h5" color="initial">
            JUN
          </Typography>
          <Divider />
          <Typography variant="h2" color="initial" fontWeight={900}>
            23
          </Typography>
        </Grid>
        <Grid md={4} container alignItems={"center"}>
          <Grid item>
            <img
              src={News1}
              style={{ borderRadius: "10px" }}
              alt="news1"
              width={"100%"}
              height={"300px"}
            />
          </Grid>
        </Grid>
        <Grid
          md={5}
          container
          flexDirection={"column"}
          justifyContent={"space-around"}
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
      <Divider />

    </>
  );
};

export default News;
