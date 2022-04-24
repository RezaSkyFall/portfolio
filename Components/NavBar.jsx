import { Code } from "@mui/icons-material";
import { ListItemButton, List, ListItemText, ListItem, AppBar, Toolbar, Menu, MenuItem, Typography } from "@mui/material";

function NavBar(){

    const NavLinks = [
        {title:'خانه',link:'/'},
        {title:'پروژه ها',link:'/'},
        {title:'درباره',link:'/'},
    ]

    return(
        <>
        <AppBar elevation={0} position='static' sx={{backgroundColor:'inherit',color:'inherit'}}>
            <Toolbar variant="dense">
                <div style={{display:'inline-flex'}}>
        <Code sx={{margin:2,alignSelf:'center'}}/>
<Typography variant="h6" sx={{margin:2,marginLeft:0}}>
    سایت من
</Typography>
                </div>
        <List component='nav' sx={{display:'inline-flex',position:'absolute'
        ,transform:'translateX(-50%)',left:'50%'}}>
            {NavLinks.map((item) => 
            (
                <ListItemButton key={item} LinkComponent href={item.link}>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            ))}
        </List>
        </Toolbar>
        </AppBar>
        </>
    )
}

export default NavBar;