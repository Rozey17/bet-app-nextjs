import React, { FC, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Head from 'next/head'
// import { LocaleSwitcher } from '../localeSwitcher';
import { Badge } from '@material-ui/core';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
// import Header from '../header/Header';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout : FC<Props> = ({ children, title })=> {
  const classes = useStyles();

  return (
    <div style={{backgroundColor: '#eceff1'}}> 
    <Head>
      <title>{title ? `${title} | Parions Sport` : 'Parions Sport'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="favicon.ico" />
    </Head>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" >
                <Badge badgeContent={1} color="secondary">
                  <DescriptionTwoToneIcon />
                </Badge>
              </IconButton>
              {/* <Header/> */}
          {/* <LocaleSwitcher/> */}
        </Toolbar>
      </AppBar>
      <br/>
      {children}
    </div>
    </div>
  );
}

export  {Layout}