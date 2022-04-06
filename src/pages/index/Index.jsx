import React from "react";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import Nav from "../../components/layout/NavBar";
import NoData from "../../components/layout/NoData";
import Card from "../../components/article/Card";
import img1 from "../../pics/mma.png";
import "./index.css";
import { fetchData } from "../../services/API";

const Index = (props) => {
  const { user } = props;
  const [page, setpage] = React.useState(0);
  const [articles, setArticles] = React.useState([]);
  const navigate = useNavigate()
  const data = [
    {
      section: "ali",
      img: img1,
      body: "6 Q’s About the News | What did thousands of believers in one man’s prophecy expect to have happened on Saturday, May 21?",
      time: "20/20/2022",
    },
    {
      section: "ali",
      img: img1,
      body: "6 Q’s About the News | What did thousands of believers in one man’s prophecy expect to have happened on Saturday, May 21?6 Q’s About the News | What did thousands of believers in one man’s prophecy expect to have happened on Saturday, May 21?",
      time: "20/20/2022",
    },
    {
      section: "ali",
      img: img1,
      body: "6 Q’s About the News | What did thousands of believers in one man’s prophecy expect to have happened on Saturday, May 21?",
      time: "20/20/2022",
    },
    {
      section: "ali",
      img: img1,
      body: "6 Q’s About the News | What did thousands of believers in one man’s prophecy expect to have happened on Saturday, May 21?",
      time: "20/20/2022",
    },
  ];
  // const moreData = async () => {
  //   console.log('scroll');
  //   const auth = localStorage.getItem("auth")
  //   const auth1 = JSON.parse(auth)
  //   const auth2 = auth1.user.data.accessToken
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300) {
  //     setPage(page++);
  //     console.log(page);
  //     if(page <= 2){
  //       const docs = await fetchData(page, auth2)
  //       const data = articles.concat(docs.docs)
  //       console.log({data});
  //       setArticles(data)
  //     }
  //   }
  // };
  // window.addEventListener("scroll", moreData);
  React.useEffect(async () => {
    if (!user) {
      navigate('/login')
    } else  {
      const auth = localStorage.getItem("auth");
      const auth1 = JSON.parse(auth);
      const auth2 = auth1.user.data.accessToken;
      const docs = await fetchData(page, auth2);
      setArticles(docs.docs);
    }
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: "grey",
    "& p:hover": {
      color: "#36C5BA",
      transition: "0.3s",
      cursor: "pointer",
    },
  };
  return (
    <React.Fragment>
      <Nav />
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <div className="cards">
            {data &&
              articles.map((e, index) => (
                <Link to={`/article/${index}`} style={linkStyle}>
                  <div key={index}>
                    <Card
                      section={e.section_name}
                      img={img1}
                      body={e.abstract}
                      time={e.pub_date}
                    />
                  </div>
                </Link>
              ))}
            {data.length === 0 ? <NoData /> : null}
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>Categories</p>
          <p>Recent posts</p>
          <p>Tags</p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.authState.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Index);
