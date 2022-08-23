import { Box, Button, Divider, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchNews, selectNews } from "./NewsSlice";
import "./style/style.css";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const News = () => {
  const dispatch = useAppDispatch();
  const newsSelector = useAppSelector(selectNews);
  const { status } = newsSelector;
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  useEffect((): any => {
    if (status === "fulfilled") {
      return toast.success("Welcome to our Site :)", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (status === "error") {
      return toast.error("There is a problem, Sorry :(", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [status]);

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Divider />
      {newsSelector.status === "loading" ? (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Box className="multi-ripple">
            <Box></Box>
            <Box></Box>
          </Box>
        </Grid>
      ) : (
        <>
          <Grid container justifyContent={"space-between"}>
            {newsSelector.lists.map((item: any, index: number) => {
              if (newsSelector.viewState) {
                return (
                  <>
                    <Grid
                      key={index}
                      flexDirection={{ xs: "column", sm: "row" }}
                      className="news"
                      container
                      justifyContent={{ xs: "center", sm: "space-around" }}
                      padding={"20px 0"}
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
                      <Grid
                        md={4}
                        item
                        alignItems={"center"}
                        p={{ xs: 2, sm: 0 }}
                      >
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
                            <Typography
                              variant="h5"
                              color="initial"
                              fontWeight={700}
                            >
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
                            <Typography
                              sx={{ overflow: "hidden" }}
                              variant="body1"
                              color="initial"
                            >
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
                );
              } else {
                return (
                  <Grid
                    className="newsCard"
                    sx={{ width: { xs: "100%", md: "24%" }, height: "100%" }}
                    item
                    key={index}
                    margin={"10px 5px"}
                  >
                    <Card key={index}>
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            N
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={item.author}
                        subheader={item.publishedAt}
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={item.urlToImage}
                        alt="Paella dish"
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {item.title}
                        </Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                          <ShareIcon />
                        </IconButton>
                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      </CardActions>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography paragraph>{item.content}</Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </Grid>
                );
              }
            })}
          </Grid>
        </>
      )}
    </>
  );
};

export default News;
