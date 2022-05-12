import { Code, DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ListItemButton, List, ListItemText, ListItem, AppBar, Toolbar, Menu, MenuItem, Typography, useTheme, IconButton, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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

    const IsMobileMenu = useMediaQuery('(min-width:750px)');


    return (
        <>
            <AppBar elevation={0} position='static' sx={{ backgroundColor: 'inherit', color: 'inherit' }}>
                <Toolbar variant="dense">
                    {/* <div style={{ display: 'inline-flex' }}>
                    <Code sx={{ margin: 2, alignSelf: 'center' }} color='primary' />
                        <Typography variant="h6" color='primary' sx={{ margin: 2, marginLeft: 0 }}>
                           FireDev.ir
                        </Typography>
                    </div> */}
                    <div style={{width:140}}>
                    <Image src={logo} width={1080} height={512} layout='responsive' alt="firedev.ir logo"/>
                    </div>
                    {!IsMobileMenu ?<></>:
                    <List component='nav' sx={{
                        display: 'inline-flex', position: 'absolute'
                        , transform: 'translateX(-50%)', left: '50%'
                    }}>
                        {NavLinks.map((item,index) =>
                        (
                            <Link href={item.link} key={index} passHref>
                                <ListItemButton  sx={{color:(item.link === "/" ? router.pathname === '/' : router.pathname.startsWith(item.link)) ? 'primary.main':'inherit'}}>
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
        </>
    )
}

export default NavBar;