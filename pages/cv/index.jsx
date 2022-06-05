import { ChevronLeft, DataObject, DesignServicesOutlined, DesktopMacOutlined, SchoolOutlined, SubdirectoryArrowLeft } from "@mui/icons-material";
import {Box, Chip, Container, Divider, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography } from "@mui/material";

import Image from 'next/image';

function CvLanding() {
    const Skills = [
        {
            title: 'برنامه نویسی سمت سرور', icon: <DataObject />,
            items: [
                {
                    title: 'node.js',
                    items: ['Express', 'MongoDb', 'Mongoose']
                },
                {
                    title: 'Asp .net',
                    items: ['.net 6', 'Sql server', 'Entity framework', 'Signal R (socket)']
                }
            ]
        },
        {
            title: 'برنامه نویسی سمت کاربر', icon: <DesignServicesOutlined />,
            items: [
                {
                    title: 'React.js',
                    items: ['Material Design', 'Styled Componnets', 'Type-Script', 'Next.js', 'Vite.js', 'SEO', 'PWA']
                },
                {
                    title: 'Blazor .net',
                    items: ['Material Design', 'server side', 'web assembly', 'Signal R (socket)']
                },
                {
                    title: 'Html, Css, Js',
                    items: []
                },
            ]
        },
        {
            title: 'برنامه نویسی دسکتاپ', icon: <DesktopMacOutlined />,
            items: [
                {
                    title: 'Electron Framework',
                    items: ['Spa',]
                },
                {
                    title: 'WPF .net-famework',
                    items: ['Spa', 'Material Design']
                },
                {
                    title: 'Windows From .net-famework',
                    items: ['Spa',]
                }
            ]
        }
    ]
    return (
        <>
            <Container maxWidth='xl'>
                <Typography variant="h2" gutterBottom>
                    رزومه
                </Typography>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} md={9} sx={{ alignSelf: 'center' }}>
                        <Stack direction='row' flexWrap='wrap' spacing={1} sx={{ mb: 1 }}>

                            <Typography variant="h1" sx={{ fontFamily: 'IranYekanBold'}}>
                                من
                                <Box sx={{color:'primary.main'}} component='span'>
                                {" رضا براتی "}
                            </Box>
                                هستم برنامه نویس کامپیوتر
                            </Typography>
                        </Stack>
                        <Typography variant="body">
                            از سال 1398 شروع به برنامه نویسی کردم و طی این مدت مهارت های زیادی یاد گرفتم.
                            همیشه سعیم بر این بوده که نیاز ها به درستی تحلیل بشه و متناسب با نیاز مشتری بهترین محصول رو ارائه بدم.
                        </Typography>
                        <Typography variant="body1">
                            اگه بخوام خودم رو توی چند جمله تعریف کنم میتونم بگم من آدمی با مدیریت بالا و وقت شناس هستم، از باختن خوشم نمیاد و همیشه سعی میکنم بهترین باشم.
                        </Typography>
                        <Typography variant="body">

                        </Typography>
                        <Stack direction='row' sx={{ mt: 3 }}>
                            <SkillIcon >
                                <SchoolOutlined />
                            </SkillIcon>
                            <Typography variant="h3" alignSelf='center'>
                                سوابق تحصیلی رضا براتی
                            </Typography>
                        </Stack>
                        <List dense sx={{ pl: 2, pt: 0 }}>
                            <ListItem>
                                <ListItemIcon>
                                    <SubdirectoryArrowLeft />
                                </ListItemIcon>
                                <ListItemText>
                                    کاردانی فناوری اطلاعات (IT) از
                                    <Link href='https://shamsipour.tvu.ac.ir/' underline='hover'> دانشکده فنی و حرفه ای شمسی پور تهران </Link>
                                    - سال 1397
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SubdirectoryArrowLeft />
                                </ListItemIcon>
                                <ListItemText>
                                    کارشناسی مهندسی تکنولوژی نرم افزار کامپیوتر از
                                    <Link href='https://mohajer.tvu.ac.ir/' underline='hover'> دانشکده فنی و حرفه ای مهاجر اصفهان </Link>
                                    - سال 1400
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div>
                            <Image src='/images/reza_barati_cv.jpg' height={2171} width={1628} unoptimized
                             style={{ borderRadius: 24 }} alt='Reza Barati Profile Image' />
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="h2" gutterBottom sx={{ mt: 3 }} align='center'>
                    مهارت های رضا براتی
                </Typography>
                <Typography variant="body2" gutterBottom align='center'>
                    مهارت برنامه نویسی وب به دو قسمت سمت کاربر (front-end) و برنامه نویسی سمت سرور (back-end) تقسیم شده.
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    {Skills.map((skill, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper variant='outlined' sx={{ height: '100%' }}>
                                <Stack alignItems='center' sx={{ p: 1 }}>
                                    <SkillIcon>
                                        {skill.icon}
                                    </SkillIcon>
                                    <Typography variant="h5" gutterBottom>
                                        {skill.title}
                                    </Typography>
                                    <Divider variant='middle' sx={{ width: '80%', mb: 1, mt: 0.5 }} />
                                    {skill.items.map((items, index) => (
                                        <>
                                            <Typography variant="h5" gutterBottom sx={{ pt: 1 }}>
                                                ( {items.title} )
                                            </Typography>
                                            <Stack justifyContent='center' direction='row-reverse' flexWrap='wrap' spacing={1} sx={{ mb: 1 }}>
                                                {items.items.map((child, index) => (
                                                    <Chip label={child} size='small' variant="outlined" key={index} />
                                                ))}
                                            </Stack>
                                        </>
                                    ))}

                                </Stack>
                            </Paper>
                        </Grid>))}
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom sx={{ mt: 3 }} align='center'>
                            زبان های مسلط رضا براتی
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>

                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

function SkillIcon({ children }) {
    return (
        <Paper variant='outlined' sx={{
            m: 1, p: 1, borderRadius: '18px', color: 'primary.main', minWidth: 62, minHeight: 62, maxWidth: 62, maxHeight: 62
            , display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {children}
        </Paper>
    )
}

export default CvLanding;