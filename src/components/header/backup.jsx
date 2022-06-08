// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { NavLink } from 'react-router-dom';

// const pages = ['brands', 'cameras', 'lens'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const Header = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "Sneak",
//               fontWeight: 700,
//               color: "inherit",
//               textDecoration: "none",
//               borderTop: "solid 3px black",
//               borderBottom: "solid 3px black",
//             }}
//           >
//             Conseite
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             a
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box></Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Header;

[
  {
    "name": "Minolta X9",
    "brand": "brand 1",
    "image": "https://i.imgur.com/C9oOKmE.png",
    "price": 78,
    "overview": "overview 1",
    "specs": "specs 1",
    "rental-includes": "rental-includes 1",
    "image2": "https://i.imgur.com/eIRlc84.png",
    "image3": "https://i.imgur.com/akeFClZ.png",
    "id": "1",
  },
  {
    name: "Minolta X700",
    brand: "brand 2",
    image: "https://i.imgur.com/VebiW9M.png",
    price: 45,
    overview: "overview 2",
    specs: "specs 2",
    "rental-includes": "rental-includes 2",
    image2: "https://i.imgur.com/eIRlc84.png",
    image3: "https://i.imgur.com/akeFClZ.png",
    id: "2",
  },
  {
    name: "Minolta X570",
    brand: "brand 3",
    image: "https://i.imgur.com/E7vTEIL.png",
    price: 81,
    overview: "overview 3",
    specs: "specs 3",
    "rental-includes": "rental-includes 3",
    image2: "https://i.imgur.com/eIRlc84.png",
    image3: "https://i.imgur.com/akeFClZ.png",
    id: "3",
  },
  {
    name: "Minolta X370",
    brand: "brand 4",
    image: "https://i.imgur.com/sJd9buC.png",
    price: 18,
    overview: "overview 4",
    specs: "specs 4",
    "rental-includes": "rental-includes 4",
    image2: "https://i.imgur.com/eIRlc84.png",
    image3: "https://i.imgur.com/akeFClZ.png",
    id: "4",
  },
  {
    name: "Minolta TC1",
    brand: "brand 5",
    image: "https://i.imgur.com/CvOT7TN.png",
    price: 35,
    overview: "overview 5",
    specs: "specs 5",
    "rental-includes": "rental-includes 5",
    image2: "https://i.imgur.com/eIRlc84.png",
    image3: "https://i.imgur.com/akeFClZ.png",
    id: "5",
  },
  {
    name: "Minolta SRT101",
    brand: "brand 6",
    image: "https://i.imgur.com/jjmE1U9.png",
    price: 37,
    overview: "overview 6",
    specs: "specs 6",
    "rental-includes": "rental-includes 6",
    image2: "https://i.imgur.com/eIRlc84.png",
    image3: "https://i.imgur.com/akeFClZ.png",
    id: "6",
  },
  {
    name: "Minolta XGM",
    brand: "brand 7",
    image: "https://i.imgur.com/9i9CaSt.png",
    price: 87,
    overview: "overview 7",
    specs: "specs 7",
    "rental-includes": "rental-includes 7",
    image2: "https://i.imgur.com/eIRlc84.png",
    image3: "https://i.imgur.com/akeFClZ.png",
    id: "7",
  },
  {
    name: "Minolta AF1",
    brand: "brand 8",
    image: "https://i.imgur.com/3YZrbvU.png",
    price: 50,
    overview: "overview 8",
    specs: "specs 8",
    "rental-includes": "rental-includes 8",
    image2: "https://i.imgur.com/eIRlc84.png",
    image3: "https://i.imgur.com/akeFClZ.png",
    id: "8",
  },
  {
    name: "Minolta 75W",
    brand: "brand 9",
    image: "https://i.imgur.com/akeFClZ.png",
    price: 98,
    overview: "overview 9",
    specs: "specs 9",
    "rental-includes": "rental-includes 9",
    image2: "https://i.imgur.com/eIRlc84.png",
    image3: "https://i.imgur.com/akeFClZ.png",
    id: "9",
  },
  {
    name: "Minolta 160c",
    brand: "brand 10",
    image: "https://i.imgur.com/eIRlc84.png",
    price: 16,
    overview: "overview 10",
    specs: "specs 10",
    "rental-includes": "rental-includes 10",
    image2: "https://i.imgur.com/eIRlc84.png",
    image3: "https://i.imgur.com/akeFClZ.png",
    id: "10",
  }
];