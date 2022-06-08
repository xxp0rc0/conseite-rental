import React from 'react'
import film from "./film.mp4"
import "./home.css"
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { display } from '@mui/system';
import { NavLink } from 'react-router-dom';
import Footer from '../components/footer/footer';

const Home = () => {
    const productListStyle = {
        height: "351px",
        width: "280px",
        backgroundColor: "#E9E0D3",
        border: "solid 2px",
        borderRadius: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    const popBrandList = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
   return (
     <>
       <div className="home-body">
         <div className="video-banner">
           <video className="video-tag" autoPlay loop muted>
             <source src={film} type="video/mp4" />
           </video>
           <p
             style={{
               textAlign: "center",
               fontSize: "6vw",
               marginTop: "1vh",
               marginBottom: "4vh",
               textDecoration: "bold",
             }}
           >
             Conseite
           </p>
         </div>
         <div className="break-line">
           <hr
             style={{
               textAlign: "center",
               width: "100%",
               backgroundColor: "black",
             }}
           ></hr>
         </div>
         <div className="rent-step" style={{ textAlign: "center" }}>
           <h3
             style={{
               textAlign: "start",
               fontSize: "26px",
               margin: "3rem 0",
               fontWeight: "700",
              
             }}
           >
             / &ensp; Renting gear is easy
           </h3>
           <Grid container spacing={{ lg: 15, md: 3 }}>
             <Grid
               item
               xs={3}
               style={{
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "flex-start",
               }}
             >
               <p
                 style={{
                   backgroundColor: "#E38E91",
                   padding: "0.5rem 2rem 0.5rem 1rem",
                 }}
               >
                 1. Select Dates
               </p>
               <p style={{ margin: "0" }}>Real time inventory</p>
               <br></br>
               <p style={{ margin: "0" }}>Low or now deposit</p>
             </Grid>
             <Grid
               item
               xs={3}
               style={{
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "flex-start",
               }}
             >
               <p
                 style={{
                   backgroundColor: "#DCD430",
                   padding: "0.5rem 2rem 0.5rem 1rem",
                 }}
               >
                 2. Gear arrives
               </p>
               <p style={{ margin: "0" }}>Free 2-day shipping*</p>
               <br></br>
               <p style={{ margin: "0" }}>Ship or Pickup</p>
             </Grid>
             <Grid
               item
               xs={3}
               style={{
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "flex-start",
               }}
             >
               <p
                 style={{
                   backgroundColor: "#A0D5A5",
                   padding: "0.5rem 4rem 0.5rem 1rem",
                 }}
               >
                 3. Shoot
               </p>
               <p style={{ margin: "0" }}>The top gear</p>
               <br></br>
               <p style={{ margin: "0" }}>Rent from 1-90 days</p>
             </Grid>
             <Grid
               item
               xs={3}
               style={{
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "flex-start",
               }}
             >
               <p
                 style={{
                   backgroundColor: "#90C4DB",
                   padding: "0.5rem 2rem 0.5rem 1rem",
                 }}
               >
                 4. Easy return
               </p>
               <p style={{ margin: "0" }}>Repack in same box</p>
               <br></br>
               <p style={{ margin: "0" }}>Return labels</p>
             </Grid>
           </Grid>
         </div>
         <div className="break-line">
           <hr
             style={{
               textAlign: "center",
               width: "100%",
               backgroundColor: "black",
               marginTop: "5rem",
             }}
           ></hr>
         </div>
         <div className="feature-gear">
           <h3
             style={{
               textAlign: "start",
               fontSize: "26px",
               margin: "3rem 0",
               fontWeight: "700",
             }}
           >
             / &ensp; Rental gear categories
           </h3>
           <div>
             <Grid container spacing={14}>
               <Grid item lg={4}>
                 <Paper sx={productListStyle}>
                   <img
                     style={{ objectFit: "cover", width: "80%" }}
                     src={require("../assets/pentax.png")}
                   ></img>
                 </Paper>
                 <h3 style={{ textAlign: "center", margin: "2rem 0 0 0" }}>
                   cameras
                 </h3>
               </Grid>
               <Grid item lg={4}>
                 <Paper sx={productListStyle}>
                   <img
                     style={{ objectFit: "cover", width: "50%" }}
                     src={require("../assets/lens.png")}
                   ></img>
                 </Paper>
                 <h3 style={{ textAlign: "center", margin: "2rem 0 0 0" }}>
                   lens
                 </h3>
               </Grid>
               <Grid item lg={4}>
                 <Paper sx={productListStyle}>
                   <img
                     style={{ objectFit: "cover", width: "60%" }}
                     src={require("../assets/tripod.png")}
                   ></img>
                 </Paper>
                 <h3 style={{ textAlign: "center", margin: "2rem 0 0 0" }}>
                   tripod
                 </h3>
               </Grid>
             </Grid>
           </div>
         </div>
         <div className="break-line">
           <hr
             style={{
               textAlign: "center",
               width: "100%",
               backgroundColor: "black",
               marginTop: "3rem",
             }}
           ></hr>
         </div>
         <div className="popular-brands" style={{ marginBottom: "3rem" }}>
           <h3
             style={{
               textAlign: "start",
               fontSize: "26px",
               margin: "3rem 0 0 0",
               fontWeight: "700"
             }}
           >
             / &ensp; Popular Brands
           </h3>
           <div>
             <Grid container spacing={3} sx={popBrandList}>
               <Grid item lg={2}>
                 <img
                   className="brandss"
                   style={{
                     objectFit: "cover",
                     width: "90%",
                     cursor: "pointer",
                   }}
                   src={require("../assets/canon.png")}
                 ></img>
               </Grid>
               <Grid item lg={2}>
                 <img
                   className="brandss"
                   style={{
                     objectFit: "cover",
                     width: "90%",
                     cursor: "pointer",
                   }}
                   src={require("../assets/fujilogo.png")}
                 ></img>
               </Grid>
               <Grid item lg={2}>
                 <img
                   className="brandss"
                   style={{
                     objectFit: "cover",
                     width: "90%",
                     cursor: "pointer",
                   }}
                   src={require("../assets/minolta.png")}
                 ></img>
               </Grid>
               <Grid item lg={2}>
                 <img
                   className="brandss"
                   style={{
                     objectFit: "cover",
                     width: "90%",
                     cursor: "pointer",
                   }}
                   src={require("../assets/pentaxlogo.png")}
                 ></img>
               </Grid>
               <Grid item lg={2}>
                 <img
                   className="brandss"
                   style={{
                     objectFit: "cover",
                     width: "90%",
                     cursor: "pointer",
                   }}
                   src={require("../assets/nikon.png")}
                 ></img>
               </Grid>
             </Grid>
           </div>
         </div>
       </div>
     </>
   );
};
export default Home;