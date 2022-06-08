import React from 'react'
import { Grid, Card, CardMedia, CardContent} from '@mui/material';
import { NavLink } from 'react-router-dom';

const ProductsGrid = ({name, image, price, id}) => {
  const productListStyle = {
    height: "351px",
    width: "280px",
    backgroundColor: "#E9E0D3",
    border: "solid 2px",
    borderRadius: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  return (
    <>

      <Grid item xs={4}>
        <NavLink to={`/products/${id}`} style={{ color: "black" }}>
          <Card sx={productListStyle}>
            <CardMedia
              className="collection-image"
              style={{ objectFit: "cover", width: "80%" }}
              component="img"
              image={image}
              alt="green iguana"
            />
          </Card>

          <CardContent>
            <Grid container columnSpacing={2} style={{paddingBottom: "0", borderBottom: "solid 2px", width: "17.5rem"}}>
              <Grid item xs={8}>
                <p
                  style={{
                    marginLeft: "-15px",
                    fontSize: "1rem",
                    fontWeight: "600",
                  }}
                >
                  {name}
                </p>
              </Grid>
              <Grid item xs={4}>
                <p style={{ fontSize: "1rem", fontWeight: "600", textAlign:"end" }}>${price}</p>
              </Grid>
            </Grid>
          </CardContent>
        </NavLink>
      </Grid>
    </>
  );
}

export default ProductsGrid;