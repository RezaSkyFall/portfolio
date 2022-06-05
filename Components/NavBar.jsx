import { Code, DarkModeOutlined, LightModeOutlined, Menu as MenuIcon } from "@mui/icons-material";
import { ListItemButton, List, ListItemText, ListItem, AppBar, Toolbar, SwipeableDrawer, MenuItem, Typography, useTheme, IconButton, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from '../public/images/firedev.ir - logo.png';

function NavBar({ ToggleThemeMode }) {

    const NavLinks = [
        { title: 'خانه', link: '/' },
        { title: 'پروژه ها', link: '/projects' },
        { title: 'خدمات', link: '/services' },
        { title: 'رزومه', link: '/cv' },
        { title: 'درباره', link: '/about-us' },
    ]
    const router = useRouter();
    const theme = useTheme();

    const IsMobileMenu = !useMediaQuery('(min-width:750px)',{noSsr:true});
    const [openMenu, setOpenMenu] = useState(false);
    const toggleDrawer =(val)=>{
        setOpenMenu(val);
    }

    return (
        <>
            <AppBar elevation={0} position='fixed' color="transparent" sx={{backdropFilter:'blur(20px)'}}>
                <Toolbar variant="dense">
                    {/* <div style={{ display: 'inline-flex' }}>
                    <Code sx={{ margin: 2, alignSelf: 'center' }} color='primary' />
                        <Typography variant="h6" color='primary' sx={{ margin: 2, marginLeft: 0 }}>
                           FireDev.ir
                        </Typography>
                    </div> */}
                    {
                        IsMobileMenu ? 
                        <IconButton color="inherit" onClick={()=>toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton> 
                        :
                        <>
                        </>
                    }
                    <Link href='/' passHref>
                    <a style={{width:120,cursor:'pointer'}} >
                    <Image src={logo} width={1080} height={512} layout='responsive' alt="firedev.ir logo"/>
                    </a>
                    </Link>
                    {IsMobileMenu ?<></>:
                    <List component='nav' sx={{
                        display: 'inline-flex', position: 'absolute'
                        , transform: 'translateX(-50%)', left: '50%'
                    }}>
                        {NavLinks.map((item,index) =>
                        (
                            <Link href={item.link} key={index} passHref>
                                <ListItemButton component="a" sx={{color:(item.link === "/" ? router.pathname === '/' : router.pathname.startsWith(item.link)) ? 'primary.main':'inherit'}}>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
}
<IconButton onClick={ToggleThemeMode} sx={{position:'absolute',right:10}}>
    {
        theme.palette.mode === 'dark' ? <DarkModeOutlined/>:<LightModeOutlined/>
    }
</IconButton>
                </Toolbar>
            </AppBar>
            {
                !IsMobileMenu ? <></> :
                <SwipeableDrawer
            anchor='top'
            open={openMenu}
            onClose={()=>toggleDrawer(false)}
            onOpen={()=>toggleDrawer(true)}
          >
              <List  dense>
                        {
                            NavLinks.map((item,index) => (
                                <Link href={item.link} key={index} passHref>
                                <ListItemButton onClick={()=>toggleDrawer(false)} 
                                selected={(item.link === '/' ? router.pathname === '/' : router.pathname.startsWith(item.link) ) && item.link !== ''}>
                                    <ListItemText>
                                        {item.title}
                                    </ListItemText>
                                </ListItemButton>
                                </Link>
                            ))
                        }

                    </List>
          </SwipeableDrawer>
}
            <div style={{minHeight:67}} />

        </>
    )
}

export default NavBar;