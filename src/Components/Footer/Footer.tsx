import { Grid, Typography, TextField, Button, IconButton } from "@mui/material";
import "./style/style.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        padding={4}
        sx={{ backgroundColor: "#a1a1a1" }}
      >
        <Grid>
          <Grid>
            <Typography
              className="footer_topic"
              variant="h6"
              fontWeight={"600"}
              color="initial"
            >
              INFO
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Formats
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Compression
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Pricing
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              FAQ
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Status
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Typography
              className="footer_topic"
              variant="h6"
              fontWeight={"600"}
              color="initial"
            >
              RESOURCES
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Develop API
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Tools
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Blog
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Typography
              className="footer_topic"
              variant="h6"
              fontWeight={"600"}
              color="initial"
            >
              COMPANY
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              About Us
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Sustainability
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Term of Services
            </Typography>
          </Grid>
          <Grid>
            <Typography className="links" variant="body1" color="#6a6868">
              Privacy
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Grid container justifyContent={{ xs: "center"}}>
            <Grid sx={{ padding: "5px 0" }}>
              <Typography variant="body1" color="initial">
                subscribe to our email newsletter
              </Typography>
            </Grid>
            <Grid container justifyContent={{ xs: "center"}}>
              <TextField
                sx={{ margin: {xs:'5px 0',sm:"0 5px"} }}
                label="your email"
                size={"small"}
              />
              <Button variant="contained" size={'small'} color="success">
                SUBSCRIBE
              </Button>
            </Grid>
            <Grid sx={{ padding: "15px 0" }}>
              <Typography variant="body1" color="initial">
                Follow us
              </Typography>
              <IconButton color="inherit" className="icon-insta">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" className="icon-twit">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" className="icon-face">
                <FacebookIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
