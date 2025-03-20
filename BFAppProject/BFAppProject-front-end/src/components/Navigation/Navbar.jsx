import React from 'react'
import { Tabs, Tab, Box, Link } from '@mui/material';
import { useLocation } from 'react-router-dom';



const Navbar = () => {

   

    const location = useLocation(); 
    const path = location.pathname; 

    function getTab() {
        if (path === "/home") {
            return "one";
        }
        else if (path === "/sleep-log") {
            return "two"
        }
        else if (path === "/diaper-log") {
            return "three";
        }
        else if (path === "/nursing-log") {
            return "four";
        }
        else if (path === "/pumping-log") {
            return "five";
        }
        else if (path === "/bottle-feeding-log") {
            return "six";
        }
        else if (path === "/nutrition") {
            return "seven";
        }
        else if (path === "/resources") {
            return "eight";
        }

        else if (path === "/login") {
            return "nine";
        }
        else if (path === "/register") {
            return "ten";
        }        
    } 


  return (
    
        <div className="nav-bar">
            <Box sx={{
                        display: "flex",
                        justifyContent: "center", 
                        backgroundColor: "rgba(40, 35, 35, 0.56)", 
                        padding: "5px 0", 
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",   
                        borderBottomLeftRadius: "8px",
                        borderBottomRightRadius: "8px",
                        borderBottom: "2px solid rgba(255, 47, 0, 0.566)",
                        borderLeft: "2px solid rgba(255, 47, 0, 0.566)",
                        borderRight: "2px solid rgba(255, 47, 0, 0.566)"                                           
                    }}>
                <Tabs
                    value={getTab()}
                    textColor="inherit"
                    TabIndicatorProps={{ style: { backgroundColor: "white" } }}
                    variant="scrollable" // Enables horizontal scrolling
                    scrollButtons="auto"  // Show scroll buttons only when needed
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center", // Center tabs on larger screens
                        overflowX: "auto", // Enable horizontal scrolling on smaller screens
                        whiteSpace: "nowrap", // Prevent wrapping of tabs
                        "& .MuiTabs-flexContainer": {
                        justifyContent: "space-evenly", // For space-evenly on small screens
                        },
                        "@media (max-width: 768px)": {
                        justifyContent: "flex-start", // Align tabs to the start (for smaller screens)
                        },
                    }}
                >
                    <Tab                         
                        value="one" 
                        label="Home" 
                        component={Link} 
                        href="/home" 
                    />
                    <Tab 
                        value="two" 
                        label="Sleep Log" 
                        component={Link}
                        href="/sleep-log"
                    />
                    <Tab 
                        value="three" 
                        label="Diaper Log" 
                        component={Link}
                        href="/diaper-log"
                    />
                    <Tab 
                        value="four" 
                        label="Nursing Log" 
                        component={Link}
                        href="/nursing-log"
                    />
                    <Tab 
                        value="five" 
                        label="Pumping Log" 
                        component={Link}
                        href="/pumping-log"
                    />
                    <Tab 
                        value="six" 
                        label="Bottle Feeding Log" 
                        component={Link}
                        href="/bottle-feeding-log"
                    />
                    <Tab 
                        value="seven" 
                        label="Nutrition" 
                        component={Link}
                        href="/nutrition"
                    />
                    <Tab 
                        value="eight" 
                        label="Resources" 
                        component={Link}
                        href="/resources"
                    />
                    <Tab 
                        value="nine" 
                        label="Login" 
                        component={Link}
                        href="/login"
                    />
                    <Tab 
                        value="ten" 
                        label="Register" 
                        component={Link}
                        href="/register"
                    />
                </Tabs>
            </Box> 
        </div>
      
      
    
  )
}

export default Navbar
