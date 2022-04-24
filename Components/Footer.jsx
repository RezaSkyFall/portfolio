import { Call, ChevronLeft, Code, EmailOutlined, Instagram, LinkedIn, Telegram, WhatsApp } from "@mui/icons-material";
import { Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
    const router = useRouter();

    const pages = [
        { title: 'خانه', link: '/' },
        { title: 'پروژه ها', link: '/projects' },
        { title: 'رزومه', link: '/cv' },
        { title: 'درباره ما', link: '/about-us' },
    ]

    return (
        <>
            <Divider variant="middle" />
            <Grid container sx={{ mt: 2, pl: 3, pr: 3 }} spacing={2}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h3">
                        تماس با ما
                    </Typography>
                    <List>
                        <ListItemButton>
                            <ListItemIcon><Call /></ListItemIcon>
                            <ListItemText primary='0901-842-9599' />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon><EmailOutlined /></ListItemIcon>
                            <ListItemText primary='rezabaratipe@gmail.com' />
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h3">
                        صفحات
                    </Typography>
                    <List>
                        {pages.map((item) =>
                        (
                            <Link href={item.link} key={item} >
                                <ListItemButton selected={item.link === "/" ? router.pathname === '/' : router.pathname.startsWith(item.link)}>
                                    <ListItemIcon><ChevronLeft /></ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div style={{ display: 'flex', placeContent: 'center' }}>
                        <Code sx={{ margin: 2, alignSelf: 'center' }} />
                        <Typography variant="h6" sx={{ margin: 2, marginLeft: 0 }}>
                            سایت من
                        </Typography>
                    </div>
                    <Typography variant="body2">
                        سلامی دوباره، من رضا براتی هستم مهندس نرم افزار و این سایت جهت سه هدف کلی طراحی و پیاده سازی شده که
                        به اختصار : نمایش پروژه های انجام شده، رزومه و ارتباط با من میباشد.
                    </Typography>
                    <Stack direction='row' sx={{ mt: 1 }} justifyContent='center'>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                        <IconButton>
                            <Telegram />
                        </IconButton>
                        <IconButton>
                            <WhatsApp />
                        </IconButton>
                    </Stack>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 2, mb: 2 }} variant="middle" />
            <Typography variant="body2" align="center" sx={{ mt: 1, mb: 1 }}>
                کلیه حقوق سایت محفوظ میباشد | Copyright © Reza Barati 2022
            </Typography>

        </>
    )
}
export default Footer;