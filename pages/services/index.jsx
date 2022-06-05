import { Call, ChevronLeft, ContactPageOutlined, Inventory2Outlined, LaunchOutlined, Looks3Outlined, LooksOneOutlined, LooksTwoOutlined, RssFeedOutlined, ShoppingBagOutlined, SubdirectoryArrowLeft, TravelExplore, WorkOutline } from "@mui/icons-material";
import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography, useTheme } from "@mui/material";
import LandingImage from '../../public/images/Programmer-amico.svg';
import Image from 'next/image'
import CategoryIcon from "../../components/CategoryIcon";

function Services() {
    const ServecesLandingList = [
        { title: 'برنامه نویسی وب ', body: '(فروشگاه آنلاین، مدیریت اطلاعت | CMS، معرفی محصولات و ...)' },
        { title: 'راه اندازی استارت آپ ', body: '(تبدیل ایده به درآمدزایی در حوضه دیجیتال مارکتینگ)' },
        { title: 'برنامه نویسی تحت دسکتاپ ', body: '(طراحی و توسعه اپلیکیشن اختصاصی تجاری جهت بهود روند کسب وکار)' },
    ]
    const WebsiteExamples = [
        { title: 'وب سایت فروشگاهی', icon: <ShoppingBagOutlined fontSize="large" /> },
        { title: 'خدماتی', icon: <Inventory2Outlined fontSize="large" /> },
        { title: 'وبلاگ', icon: <RssFeedOutlined fontSize="large" /> },
        { title: 'وب اپلیکیشن', icon: <LaunchOutlined fontSize="large" /> },
        { title: 'شخصی | رزومه', icon: <ContactPageOutlined fontSize="large" /> },
        { title: 'تجاری', icon: <WorkOutline fontSize="large" /> },
    ]
    const WebsitePanels = [
        {
            title:'پنل مبتدی',icon:<LooksOneOutlined/>,
            body:'توسعه وب سایت با وردپرس (wordpress) و قالب آماده ',
            goodPoints:['سرعت توسعه','هزینه پایین',],
            badPoints:['مناسب پروژه های کوچک',''],
        },
        {
            title:'پنل تجاری',icon:<LooksTwoOutlined/>,
            body:'توسعه وب سایت با وردپرس (wordpress) و قالب آماده ',
            goodPoints:['سرعت توسعه','هزینه پایین',],
            badPoints:['مناسب پروژه های کوچک',''],
        },
        {
            title:'پنل حرفه ای',icon:<Looks3Outlined/>,
            body:'توسعه وب سایت با وردپرس (wordpress) و قالب آماده ',
            goodPoints:['سرعت توسعه','هزینه پایین',],
            badPoints:['مناسب پروژه های کوچک',''],
        },
    ]

    const theme = useTheme();

    return (
        <>
            <Container maxWidth='xl'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h2" gutterBottom fontWeight='medium'>
                            خدمات نرم افزاری و برنامه نویسی در اصفهان
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={5} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '90%', maxWidth: 1280 }}>
                            <Image src={LandingImage} width={1280} height={800} layout='responsive' style={{ borderRadius: '24px' }} alt='firedev.ir services illustrate image'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7} lg={8} sx={{ alignSelf: 'center' }}>
                        <List dense>
                            {
                                ServecesLandingList.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <SubdirectoryArrowLeft />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <ListItemText>
                                                <Typography variant="h4" color='primary' gutterBottom>
                                                    {item.title}

                                                </Typography>
                                                <Typography variant='body2' sx={{ pl: 1 }}>
                                                    {item.body}

                                                </Typography>

                                            </ListItemText>
                                        </ListItemText>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Grid>

                    <Grid item xs={12}>
                        <Stack direction='row' spacing={1}>
                            <CategoryIcon>
                                <TravelExplore />
                            </CategoryIcon>
                            <Typography variant="h2" sx={{ alignSelf: 'center' }}>
                                طراحی و توسعه وب سایت
                            </Typography>
                        </Stack>
                        <Typography variant="h3" >
                                وب سایت تجاری
                            </Typography>
                        <Stack spacing={1} sx={{ p: 2 }}>
                            <Typography variant="body1">
                                هر کسب و کاری در عصر دیجیتال امروزی به یک وب سایت تجاری حرفه ای نیاز دارد. داشتن یک وب سایت تجاری و استراتژی حضور آنلاین به شما این امکان را می دهد که تجارت خود را به صورت آنلاین بازاریابی کنید. بدون وب سایت احتمالاً فرصت های فروش زیادی را از دست خواهید داد. یک وب سایت تجاری خوب طراحی شده، با اطلاعات مفید و به روز شده، به کسب و کار شما اعتبار می بخشد و برند شما را تقویت می کند.
                                بنابراین مزایای آنلاین بودن برای کسب و کار شما بسیار زیاد است و می توان گفت در قرن جدید، هیچ بهانه ای برای عدم حضور دیجیتالی وجود ندارد. اگر شما هم می خواهید برای شرکت خود در بازار مدرن امروزی یک وب سایت موفق داشته باشید، همین امروز با شرکت بهین مبتکران ایده تماس بگیرید.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>

                        {/* <Stack spacing={1}>
                            <Typography align="center" variant="h2">
                                انواع وب سایت ها
                            </Typography>
                            <Divider variant='middle' />
                        </Stack> */}
                            {/* <CategoryIcon>
                                <TravelExplore />
                            </CategoryIcon> */}
                            <Typography variant="h3"  >
                                انواع وب سایت ها
                            </Typography>
                            <Stack spacing={1} sx={{ p: 2 }}>
                            <Typography variant="body1">
                                قبل از شروع کار و توسعه وب سایت برای تحلیل هر چه بهتر باید مشخص گردد وب سایت شما جزئه کدامیک از دسته بندی های زیر میباشد.
                            </Typography>
                        </Stack>
                        <Grid container spacing={2} sx={{ pt: 1 }}>
                            {
                                WebsiteExamples.map((item, index) => (
                                    <Grid item xs={6} md={4} xl={2} key={index}>
                                        <Paper elevation={1} sx={{ p: 2, '&:hover': { boxShadow: theme.shadows[2] }, cursor: 'pointer' }} >
                                            <Stack spacing={1} alignItems='center'>
                                                <Box sx={{ color: 'secondary.main', fontSize: '2rem' }}>
                                                    {item.icon}
                                                </Box>
                                                <Typography variant="h4" whiteSpace='nowrap'>
                                                    {item.title}
                                                </Typography>
                                            </Stack>
                                        </Paper>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant="h3" sx={{ alignSelf: 'center' }}>
                                سرویس ها
                            </Typography>
                    <Grid container spacing={2} sx={{ pt: 1 }}>
                        {
                            WebsitePanels.map((item,index)=>(
                                <Grid item xs={12} md={4} key={index} >
                                <Paper variant="outlined" sx={{p:1}}> 
                                <Stack spacing={1}>
                                    <Stack spacing={1} alignItems='center'>
                                    <Paper sx={{
                m: 1, p: 1, borderRadius: '18px', color: 'white',backgroundColor:'primary.main', minWidth: 62, minHeight: 62, maxWidth: 62, maxHeight: 62
                , display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                {item.icon}
            </Paper>
                                       
                                        <Typography variant="h5">
                                            {item.title}
                                        </Typography>
                                    </Stack>
                                    <Divider variant="middle"/>

                                    <Typography variant="body2">
                                            {item.body}
                                        </Typography>
                                        <Divider variant="middle"/>
                                        <Typography variant="h6">
                                            مزایا
                                        </Typography>
                                        <List dense>
                                            {item.goodPoints.map(
                                                (point,index)=>(
                                                    <ListItem key={index}>
                                                        <ListItemIcon>
                                                            <ChevronLeft/>
                                                        </ListItemIcon>
                                                        <ListItemText>
                                                            {point}
                                                        </ListItemText>
                                                    </ListItem>
                                                )
                                            )}
                                        </List>
                                        <Typography variant="h6">
                                            معایب
                                        </Typography>
                                        <List dense>
                                            {item.badPoints.map(
                                                (point,index)=>(
                                                    <ListItem key={index}>
                                                        <ListItemIcon>
                                                            <ChevronLeft/>
                                                        </ListItemIcon>
                                                        <ListItemText>
                                                            {point}
                                                        </ListItemText>
                                                    </ListItem>
                                                )
                                            )}
                                        </List>
                                        <Typography variant="h6">
                                            هزینه
                                        </Typography>
                                        <Button variant="outlined" size="large" startIcon={<Call/>}>
              ارتباط با ما
            </Button>
                                        </Stack>
                                </Paper>
                            </Grid>
                            ))
                        }
                       
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Services;