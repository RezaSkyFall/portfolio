import { Code, DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { ListItemButton, List, ListItemText, ListItem, AppBar, Toolbar, Menu, MenuItem, Typography, useTheme, IconButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar({ ToggleThemeMode }) {

    const NavLinks = [
        { title: 'خانه', link: '/' },
        { title: 'پروژه ها', link: '/projects' },
        { title: 'درباره', link: '/about' },
    ]
    const router = useRouter();
    const theme = useTheme();
    return (
        <>
            <AppBar elevation={0} position='static' sx={{ backgroundColor: 'inherit', color: 'inherit' }}>
                <Toolbar variant="dense">
                    <div style={{ display: 'inline-flex' }}>
                        <Code sx={{ margin: 2, alignSelf: 'center' }} />
                        <Typography variant="h6" sx={{ margin: 2, marginLeft: 0 }}>
                            سایت من
                        </Typography>
                    </div>
                    <List component='nav' sx={{
                        display: 'inline-flex', position: 'absolute'
                        , transform: 'translateX(-50%)', left: '50%'
                    }}>
                        {NavLinks.map((item) =>
                        (
                            <Link href={item.link} key={item} >
                                <ListItemButton selected={item.link === "/" ? router.pathname === '/' : router.pathname.startsWith(item.link)}>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>

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