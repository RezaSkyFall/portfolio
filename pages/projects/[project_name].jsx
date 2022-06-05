import { Box, Button, Chip, Container, Divider, Grid, Icon, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, SvgIcon, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import CategoryIcon from "../../components/CategoryIcon";
import { AspectRatioOutlined, Call, ChevronLeft, CreditCardOutlined, DisplaySettingsOutlined, DnsOutlined, MapOutlined, Memory, QueryStatsOutlined, SettingsBrightnessOutlined, Sort, SupportAgent } from "@mui/icons-material";
import AppSupport from "../../components/AppSupport";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import '@splidejs/react-splide/css';

function ProjectItem({ProjectData}) {
    const router = useRouter();
    const {
        query: { project_name },
    } = router
    

    return (
        <>
            <Container maxWidth='xl'>




                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h1" gutterBottom>
                            {ProjectData.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <Splide options={{
                            type: 'loop', direction: 'rtl',

                        }}>
                            {ProjectData.images && ProjectData.images.map((item, index) => (
                                <SplideSlide key={index} >
                                    {/* <div style={{ width: '100%', display: 'block', maxHeight: 600, position: 'relative' }}>
                                        <Image src={'/images/' + item} width={1280} height={800} layout='fill' priority
                                            style={{ borderRadius: '4px' }} alt='firedev.ir projects landing image' />
                                    </div> */}


                                    <img src={'/images/'+item}  width={1920}  alt='firedev.ir projects landing image'
                            style={{borderRadius:'4px',width:'100%'}}  
                             />


                                </SplideSlide>
                            ))}
                        </Splide>
                        {/* <div style={{ width: '100%' }}>
                            <Image src={ProjectData.landingImage} width={1280} height={800} layout='responsive' style={{ borderRadius: '24px' }} alt='firedev.ir projects landing image'/>
                        </div> */}
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <CategoryIcon label='بررسی اجمالی'>
                            <Sort />
                        </CategoryIcon>
                        <Typography variant="body1" sx={{ ml: 2 }}>
                            {ProjectData.overview}

                        </Typography>
                    </Grid>
                    
                    <Grid item xs={12} md={12}>
                        <CategoryIcon label='کاربرد'>
                            <Sort />
                        </CategoryIcon>
                        <List dense>
                                {
                                    ProjectData.usage && ProjectData.usage.map((item,index)=>(
                                        <ListItem key={index}>

                                <ListItemIcon>
                                    <ChevronLeft />
                                </ListItemIcon>
                                <ListItemText>
                                    {item}
                                </ListItemText>
                            </ListItem>
                                    ))
                                }
                        </List>
                    </Grid>
                    <Grid item xs={12} sx={{ pt: 2 }}>

                        <CategoryIcon label=' پلتفرم های قابل اجرا'>
                            <Memory />
                        </CategoryIcon>
                        <Stack spacing={1} sx={{ pl: 1 }} direction='row'>
                            {ProjectData.platforms && ProjectData.platforms.map((item, index) => (
                                <Chip label={item} key={index} />
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>
                    <CategoryIcon label='قابلیت ها'>
                            <DisplaySettingsOutlined />
                        </CategoryIcon>
                    </Grid>

                    {
                     ProjectData.options &&   ProjectData.options.map((item, index) => (
                            <Grid item xs={12} md={4} lg={2} key={index} >
                                <OptionItem title={item.title} icon={item.icon} />
                            </Grid>
                        ))
                    }


                    <Grid item xs={12} md={12} sx={{ mt: 2 }}>
                        <AppSupport />
                        
                       
                        
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}
function OptionItem({ title, icon }) {
    return (
        <Paper elevation={1} sx={{ p: 2, m: 1 }}>
            <Stack spacing={2} justifyContent='center' alignItems='center'>
                
                    <Icon sx={{ fontSize: 38 }} color='secondary' className="material-symbols-outlined">{icon}</Icon>
                
                <Typography variant="body2">
                    {title}
                </Typography>
            </Stack>
        </Paper>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { project_name: 'kilid' } },
            { params: { project_name: 'smartcollege' } },
            { params: { project_name: 'notebook' } }
        ],
        fallback: false // false or 'blocking'
    };
}

export async function getStaticProps({ params }) {
    // const ProjectData = {
    //     name: params.project_name,
    //     title: 'اپلیکیشن کلید | مدیریت اطلاعات املاک'
    // }

    
    const kilid = {
        
        title: 'اپلیکیشن کلید | مدیریت اطلاعات املاک',
        landingImage: '/images/projects - kilid app.jpg',
        images: ['kilid_2.jpg', 'kilid_1.jpg', 'kilid_3.jpg'],
        overview: "با استفاده از برنامه کلید میتوانید اطلاعات مربوط به ملک ها، مشتریان، درخواست ها و ... را مدیریت کنید. نرم افزار مدیریت محتوا کلید با تحلیل دقیق نیازهای آژانس های املاک توسعه داده شده و در سراسر کشور در حال استفاده میباشد.",
        platforms: ['ویندوز'],
        options: [
            { title: 'اتصال به دستگاه کارت خوان', icon: "credit_card"  },
            { title: 'حالت تاریک و روشن', icon: 'settings_brightness' },
            { title: 'موفعیت و نقشه', icon: 'map' },
            { title: 'قابلیت استفاده تحت شبکه', icon: 'dns' },
            { title: 'واکنش گرا (Responsive)', icon: 'aspect_ratio' },
            { title: 'جستجو هوشمند', icon: 'query_stats' },
        ]
    
}
    const smartCollege = {
        
        title: 'نرم افزار دانشگاه هوشمند',
        landingImage: '/images/projects - kilid app.jpg',
        images: ['smartCollege (1).png', 'smartCollege (2).png', 'smartCollege (3).png','smartCollege (4).png'],
        overview: "برنامه دانشگاه هوشمند جهت مدیریت فرایند کارآموزی و پروژه دانشجویان دانشگاه توسعه داده شده. اهدافی کلیدی ماننده هوشمند سازی عملیات و حذف کاغذ بازی های دانشگاهی و نیروی فیزیکی با موفقیت پیاده سازی گردیده.",
        usage:[
            'سیستم پیشنهاد دهنده (معرفی استاد راهنما به دانشجو و بالعکس با توجه به حیطه کاری)',
            'مدیریت مقادیر پایه (دانشگاه ها - مقاطع تحصیلی - ترم ها - اساتید - دانشجویان - پرسنل دانشگاه و ...)',
            'ثبت شرکت ها و محل های که درخواست کارآموز دارند',
            ' فرآیند گرفتن تائیدیه از استاد بصورت آنالین و تحت نرم افزار انجام میشود. دانشجو اولویت انتخاباستاد را در نرم افزار مشخص میکند و اگر دانشجو بر سر پروپوزال به توافق نرسید )هر یک از دانشجو یااستاد دیگر ی را رد کرد ( به اولویت استاد بعد ی پروپوزال ارجاع میشود.',
            ' ارجاع پروپوزال بین استاد و گروه و شورای پروژه و ثبت نام به راحتی انجام میشود.',
            'میتوان امکان ارزیابی اساتید توسط دانشجو بر اساس معیارهای مختلف را فراهم کرد تا دانشجو یان درانتخاب مدرس بتوانند بر اساس سوابق عمل کنند .',
            'فرآیندهای گزارش پیشرفت پروژه و تحویل پایاننامه را نیز میتوان به نرم افزار اضافه کرد و درگیر ی اساتیدو گروه را کاهش داد.',

        ],
        platforms: ['وب اپ'],
        options: [
            { title: 'هوش مصنوعی', icon: "smart_outlet"  },
            { title: 'حالت تاریک و روشن', icon: 'settings_brightness' },
            { title: 'امنیت بالا', icon: 'security' },
            { title: 'سرعت بالا انتقال داده', icon: 'network_check' },
            { title: 'واکنش گرا (Responsive)', icon: 'aspect_ratio' },
            { title: 'جستجو هوشمند', icon: 'query_stats' },
        ]
    
}
const notebook = {
        
    title: 'نرم افزار نوت بوک',
    landingImage: '/images/projects - kilid app.jpg',
    images: ['projects - notebook app.jpg'],
    overview: "برنامه نوت بوک یک دفترچه تلفن رایگان میباشد که برای ثبت تماس ها، مخاطبین، یادداشت ها و... استفاده میشود. با استفاده از دفترچه تلفن دیجیتال نوت بوک و امکاناتی مانند مدیریت مشتریان و نمودار تماس ها میتوانید کسب و کار خود را رنق داده.",
    usage:[
        'دریافت تماس از طریق وویپ Voip  و کالرآیدی CallerId و به صورت دستی',
        'استفاده تحت شبکه',
        'مدیریت مخاطبین و دسته بندی با استفاده از تگ ها',
        'نمودار تماس ها، مدت تماس ها و پاسخگویی اپراتور ها',
        'مدیریت یادداشت ها و اهداف'
    ],
    platforms: ['ویندوز'],
    options: [
        { title: 'اتصال به voip', icon: "sip"  },
        { title: 'اتصال به کالرآیدی', icon: 'add_call' },
        { title: 'حالت تاریک و روشن', icon: 'settings_brightness' },
        { title: 'قابلیت استفاده تحت شبکه', icon: 'dns' },
        { title: 'واکنش گرا (Responsive)', icon: 'aspect_ratio' },
        { title: 'جستجو هوشمند', icon: 'query_stats' },
    ]

}

const getData = ()=>{
    switch (params.project_name) {
        case 'kilid':
          return  kilid;
          case 'smartcollege':
            return  smartCollege;
            case 'notebook':
            return  notebook;
    
        default:
            return undefined;
    }
} 
const ProjectData =getData()


    return {
        props: {
            ProjectData
        }
    }
}

export default ProjectItem;
