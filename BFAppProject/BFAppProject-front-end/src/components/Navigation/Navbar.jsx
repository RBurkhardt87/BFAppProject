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
        else if (path === "/feeding-log") {
            return "four";
        }
        else if (path === "/nutrition") {
            return "five";
        }
        else if (path === "/resources") {
            return "six";
        }

        else if (path === "/login") {
            return "seven";
        }
        else if (path === "/register") {
            return "eight";
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
                    }}>
                <Tabs
                    value={getTab()}
                    textColor='inherit'
                    TabIndicatorProps={{ style: { backgroundColor: "orangered" } }} 
                    centered
                    
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-evenly', 
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
                        label="Feeding Log" 
                        component={Link}
                        href="/feeding-log"
                    />
                    <Tab 
                        value="five" 
                        label="Nutrition" 
                        component={Link}
                        href="/nutrition"
                    />
                    <Tab 
                        value="six" 
                        label="Resources" 
                        component={Link}
                        href="/resources"
                    />
                    <Tab 
                        value="seven" 
                        label="Login" 
                        component={Link}
                        href="/login"
                    />
                    <Tab 
                        value="eight" 
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
