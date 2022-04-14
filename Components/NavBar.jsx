import { Code } from "@mui/icons-material";
import { ListItemButton, List, ListItemText, ListItem, AppBar, Toolbar, Menu, MenuItem, Typography } from "@mui/material";

function NavBar(){

    const NavLinks = [
        {title:'خانه',link:'/'}
    ]

    return(
        <>
        <AppBar elevation={0} position='static'>
            <Toolbar>
        <Code />
        <List component='nav'>
            {NavLinks.map((item) => 
            {
                <ListItemButton key={item} LinkComponent href={item.link}>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            })}
        </List>
        </Toolbar>
        </AppBar>
        </>
    )
}

export default NavBar;