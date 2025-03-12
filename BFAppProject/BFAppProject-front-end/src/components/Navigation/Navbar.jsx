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
        else if (path === "/about") {
            return "two"
        }
        else if (path === "/contact") {
            return "three";
        }
        else if (path === "/login") {
            return "four";
        }
        else if (path === "/register") {
            return "five";
        }
        
    }
    




  return (
    <div className='navbar'>
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={getTab()}
                textColor="secondary"
                indicatorColor="secondary"
                
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
                    label="About" 
                    component={Link}
                    href="/about"
                />
                <Tab 
                    value="three" 
                    label="Contact" 
                    component={Link}
                    href="/contact"
                />
                <Tab 
                    value="four" 
                    label="Login" 
                    component={Link}
                    href="/login"
                />
                  <Tab 
                    value="five" 
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
