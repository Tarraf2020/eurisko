import React from 'react'
import Nav from '../../components/layout/NavBar'
import Footer from "../../components/layout/Footer";
import CardDetails from '../../components/article/CardDetails';
import './article.css'

export default function Article() {
  return (
    <React.Fragment>
    <Nav />
    <CardDetails />

    {/* <Footer /> */}

    </React.Fragment>
  )
}
