import { Call, ChevronLeft, Code, EmailOutlined, Instagram, LinkedIn, MyLocationOutlined, Telegram, WhatsApp } from "@mui/icons-material";
import { Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from '../public/images/firedev.ir - logo.png';
import Image from "next/image";
function Footer() {
    const router = useRouter();

    const pages = [
        { title: 'خانه', link: '/' },
        { title: 'پروژه ها', link: '/projects' },
        { title: 'رزومه', link: '/cv' },
        { title: 'درباره ما', link: '/about-us' },
    ]
    const services = [
        { title: 'طراحی و توسعه وب سایت در اصفهان', link: '/services' },
        { title: 'راه اندازی استارت آپ', link: '/services' },
        { title: 'برنامه نویسی اپلیکشن تحت دسکتاپ', link: '/services' },
        { title: 'طراحی UI / UX اختصاصی', link: '/services' },
    ]

    return (
        <>
            <Divider variant="middle" sx={{mt:1}}/>
            <Grid container sx={{ mt: 2, pl: 3, pr: 3 }} spacing={2}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h3">
                        تماس با ما
                    </Typography>
                    <List>
                        <ListItemButton>
                            <ListItemIcon><Call /></ListItemIcon>
                            <ListItemText primary='0901-842-9599' />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon><MyLocationOutlined /></ListItemIcon>
                            <ListItemText >
                                اصفهان، دروازه دولت، ارگ جهانما، فاز 4، طبقه 5، واحد 502
                                </ListItemText>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon><EmailOutlined /></ListItemIcon>
                            <ListItemText primary='rezabaratipe@gmail.com' />
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="h3">
                        صفحات
                    </Typography>
                    <List dense>
                        {pages.map((item,index) =>
                        (
                            <Link href={item.link} key={index} passHref>
                                <ListItemButton sx={{color:(item.link === "/" ? router.pathname === '/' : router.pathname.startsWith(item.link)) ? 'primary.main':'inherit'}}>
                                    <ListItemIcon sx={{color:(item.link === "/" ? router.pathname === '/' : router.pathname.startsWith(item.link)) ? 'primary.main':'inherit'}}><ChevronLeft /></ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h3">
                        خدمات
                    </Typography>
                    <List dense>
                        {services.map((item,index) =>
                        (
                            <Link href={item.link} key={index} passHref>
                                <ListItemButton sx={{color:(item.link === "/" ? router.pathname === '/' : router.pathname.startsWith(item.link)) ? 'primary.main':'inherit'}}>
                                    <ListItemIcon sx={{color:(item.link === "/" ? router.pathname === '/' : router.pathname.startsWith(item.link)) ? 'primary.main':'inherit'}}><ChevronLeft /></ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div style={{ display: 'flex', placeContent: 'center' }}>
                        {/* <Code sx={{ margin: 2, alignSelf: 'center' }} color='primary' />
                        <Typography variant="h6" color='primary' sx={{ margin: 2, marginLeft: 0 }}>
                           FireDev.ir
                        </Typography> */}
                        <div style={{width:140}}>
                    <Image src={logo} width={1080} height={512} layout='responsive' alt="firedev.ir logo"/>
                    </div>
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