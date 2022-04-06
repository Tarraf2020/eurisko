import React from "react";
import skyImg from "../../pics/sky.png";
import logoimg1Img from "../../pics/logo.png";
import { Grid, Paper, Card, Button } from "@mui/material";
import "./card.css";
import { Share } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

function CardDetails(props) {
  console.log({props});
  const sampleLocation = useLocation();
  return (
    <React.Fragment>
      <div className="img-container1">
        <img src={skyImg} alt="img" className="img1" />
        <h1>SoHo Reacts </h1>
      </div>
      <Grid
        container
        spacing={2}
        xs={10}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        style={{ margin: "60px 40px" }}
      >
        <Grid item xs={10}>
          <img src={logoimg1Img} alt="img" className="img2" />
          <div className="abstract">
            Fans of the Azzurri hail the winning goal at Le Streghe, in SoHo
          </div>
          <div className="main-info">
            <p>document_type</p>
            <p>section_name</p>
            <p>original</p>
          </div>
          <div className="body-info">
            A temporary disruption in cellphone service this afternoon in
            Bushwick kept us from posting our photo coverage of the scene at
            Barzola, the fine restaurant where fans of Ecuador cheered their
            national side on to victory over Poland. While it didn’t make it
            into the live commentary many of you enjoyed earlier, here, for
            posterity, is the pivotal moment: wild celebration of the
            game-clinching second goal.
          </div>
          <Grid container justifyContent="flex-end">
            <div className="byWho">
              By: New york city - Published: 20/20/2020
            </div>
          </Grid>
        </Grid>
        <Grid item xs={2} style={{ borderLeft: "2px solid gray" }}>
          <Paper elevation={3} square>
            <Share />
            {sampleLocation.pathname}
          </Paper>
          <Card variant="outlined">
            link of the web_url
            <a href="" className="href">
              Referal link
            </a>
          </Card>
          <Card variant="outlined">data of writwr</Card>
          <Button>tags</Button>
          <Button>tags</Button>
          <Button>tags</Button>
        </Grid>
        <Grid item xs={10}>
          we will show here related articles under a title
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CardDetails;
