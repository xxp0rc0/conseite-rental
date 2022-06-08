import React, { useState, useEffect } from 'react'
import Grid from "@mui/material/Grid";
import Branddetailgrid from './ProductsGrid';
import { NavLink } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';

const Products = () => {
    const [brDetail, setBrDetail] = useState([])
    const [sortState, setSortState] = useState("none");
    useEffect(() => {
      const fetchData = () => {
        fetch("https://629da17a3dda090f3c065767.mockapi.io/cam/canon ")
          .then((response) => response.json())
          .then((data) => {
            setBrDetail(data);
            console.log(data)
          })
          .catch((error) => {
            console.log(error);
          });
      };
      fetchData();
    }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2.5}>
        </Grid>
        <Grid item xs={12} md={9.5}>
          <div className="brand-detail-title">
            <p
              style={{
                textAlign: "start",
                fontSize: "5rem",
                marginTop: "3rem",
                borderBottom: "solid 2px"
                
              }}
            >
              / &ensp; minolta.
            </p>
          </div>

          <div>
            <Grid container spacing={2} rowSpacing={6} style={{marginBottom: "50px"}}>
              {brDetail.map(({ image, name, price, id }) => {
                return (
                  <>
                      <ProductsGrid
                        image={image}
                        name={name}
                        price={price}
                        id={id}
                      />

                  </>
                );
              })}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Products

// {
//   brDetail.map(({ image, name, price }) => {
//     return <Branddetailgrid image={image} name={name} price={price} />;
//   });
// }