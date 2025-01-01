import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hoverEl, setHoverEl] = useState(null); // Anchor for mouse hover dropdown
  const [hoverType, setHoverType] = useState(""); // To identify which menu is hovered

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMouseEnter = (event, type) => {
    setHoverEl(event.currentTarget);
    setHoverType(type);
  };

  const handleMouseLeave = () => {
    setHoverEl(null);
    setHoverType("");
  };

  const menuItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Events", link: "/events" },
    { text: "Register", link: "/register" },
    { text: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Abuja Christian Youth Forum
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3, // Add spacing between menu items
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => (
              <Box
                key={item.text}
                onMouseEnter={(e) =>
                  item.text === "About Us" || item.text === "Register"
                    ? handleMouseEnter(e, item.text.toLowerCase())
                    : null
                }
                onMouseLeave={handleMouseLeave}
              >
                <Button
                  color="inherit"
                  component={Link}
                  to={item.link}
                  endIcon={
                    item.text === "About Us" || item.text === "Register" ? (
                      <ArrowDropDownIcon />
                    ) : null
                  }
                >
                  {item.text}
                </Button>
                {item.text === "Register" && (
                  <Menu
                    anchorEl={hoverEl}
                    open={Boolean(hoverEl) && hoverType === "register"}
                    onClose={handleMouseLeave}
                  >
                    <MenuItem
                      component={Link}
                      to="/join-us"
                      onClick={handleMouseLeave}
                    >
                      Join Us (Become a member)
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/register-conference"
                      onClick={handleMouseLeave}
                    >
                      Register for 2025 Conference
                    </MenuItem>
                  </Menu>
                )}
                {item.text === "About Us" && (
                  <Menu
                    anchorEl={hoverEl}
                    open={Boolean(hoverEl) && hoverType === "about us"}
                    onClose={handleMouseLeave}
                  >
                    <MenuItem
                      component={Link}
                      to="/about"
                      onClick={handleMouseLeave}
                    >
                      About Us
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/gallery"
                      onClick={handleMouseLeave}
                    >
                      Gallery
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/our-team"
                      onClick={handleMouseLeave}
                    >
                      Our Team
                    </MenuItem>
                  </Menu>
                )}
              </Box>
            ))}

            {/* Donate Button */}
            <Button
              component={Link}
              to="/donate"
              sx={{
                backgroundColor: "darkorange", // Custom background color
                color: "white", // Custom text color
                "&:hover": {
                  backgroundColor: "gold", // Hover effect
                  color: "black",
                },
              }}
            >
              Donate
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Component */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            marginTop: "64px", // Adjust based on AppBar height (default is 64px)
          },
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.link}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/donate"
                sx={{
                  backgroundColor: "darkorange", // Custom background color
                  color: "white", // Custom text color
                  "&:hover": {
                    backgroundColor: "gold", // Hover effect
                    color: "black",
                  },
                }}
              >
                <ListItemText primary="Donate" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;




// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Box,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";

// function Header() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const menuItems = [
//     { text: "Home", link: "/" },
//     { text: "Register", link: "/register" },
//     { text: "About Us", link: "/about" },
//     { text: "Events", link: "/events" },
//     { text: "Gallery", link: "/gallery" },
//     { text: "Contact Us", link: "/contact" },
//   ];

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//       >
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Abuja Christian Youth Forum
//           </Typography>
//           {/* Desktop Buttons */}
//           <Box sx={{ display: { xs: "none", md: "block" } }}>
//             {menuItems.map((item) => (
//               <Button
//                 key={item.text}
//                 color="inherit"
//                 component={Link}
//                 to={item.link}
//               >
//                 {item.text}
//               </Button>
//             ))}
//           </Box>
//           {/* Mobile Menu Icon */}
//           <IconButton
//             color="inherit"
//             edge="end"
//             sx={{ display: { xs: "block", md: "none" } }}
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       {/* Drawer Component */}
//       <Drawer
//         anchor="right"
//         open={drawerOpen}
//         onClose={toggleDrawer(false)}
//         sx={{
//           '& .MuiDrawer-paper': {
//             marginTop: '64px', // Adjust based on AppBar height (default is 64px)
//           },
//         }}
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <List>
//             {menuItems.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton component={Link} to={item.link}>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }

// export default Header;
