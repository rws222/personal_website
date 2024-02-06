import React, { useEffect, useState } from 'react';
import './TopNavBar.css';
import Links from '../Links/Links';
import { scrollToSection } from '../../App.js';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery, useTheme } from '@mui/material';

const TopNavBar = () => {
  const [visible, setVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // const handleScroll = useCallback(() => {
  //   if (window.scrollY > 500 && isMd) {
  //     setVisible(true);
  //   } else {
  //     setVisible(false);
  //   }
  // }, [isMd]); // Include isMd in the dependency array

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [handleScroll]); // Include handleScroll in the dependency array

  // useEffect(() => {
  //   // Update visibility based on scrolling and isMd
  //   handleScroll();
  // }, [handleScroll]); // Re-run when handleScroll changes

  return (
    <div>
      <nav className={`TopNavBar ${visible ? 'visible' : ''}`}>
        <h1>RYAN SCHMID</h1>
        {isMd ? (
          <IconButton
            className="menu-icon"
            onClick={toggleDrawer}
          >
            <i className="fa-solid fa-bars"></i>
          </IconButton>
        ) : (
        <div className='TopNavBar-links'>
          <p className='nav-link' onClick={() => scrollToSection('Home')}>HOME</p>
          <p className='nav-link' onClick={() => scrollToSection('Experience')}>EXPERIENCE</p>
          <p className='nav-link' onClick={() => scrollToSection('Education')}>EDUCATION</p>
          <p className='nav-link' onClick={() => scrollToSection('Projects')}>PROJECTS</p>
          {/* TODO: decide about contact section */}
          {/* <p className='nav-link' onClick={() => scrollToSection('Contact')}>CONTACT</p> */}
          {isLg ? <div/> : <Links />}
        </div>
        )}
      </nav>
      <Drawer
        id='drawer'
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <List>
          <ListItem button onClick={() => {scrollToSection('Home'); toggleDrawer();}}>
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem button onClick={() => {scrollToSection('Experience'); toggleDrawer();}}>
            <ListItemText primary="EXPERIENCE" />
          </ListItem>
          <ListItem button onClick={() => {scrollToSection('Education'); toggleDrawer();}}>
            <ListItemText primary="EDUCATION" />
          </ListItem>
          <ListItem button onClick={() => {scrollToSection('Projects'); toggleDrawer();}}>
            <ListItemText primary="PROJECTS" />
          </ListItem>
          {/* TODO: decide about contact section */}
          {/* <ListItem button onClick={() => {scrollToSection('Contact'); toggleDrawer();}}>
            <ListItemText primary="CONTACT" />
          </ListItem> */}
        </List>
      </Drawer>
    </div>
  );
};

export default TopNavBar;
