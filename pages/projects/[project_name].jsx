import { Button, Chip, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import CategoryIcon from "../../Components/CategoryIcon";
import { Call, ChevronLeft, Memory, Sort, SupportAgent } from "@mui/icons-material";
import SupportImage from '../../public/images/Telecommuting-pana.svg'

function ProjectItem() {
    const router = useRouter();
    const {
        query: { project_name },
    } = router
    const [ProjectData, setProjectData] = useState({
        title: 'اپلیکیشن کلید | مدیریت اطلاعات املاک',
        landingImage: '/images/projects - kilid app.jpg',
        overview: "نرم افزار تحت پلتفرم دسکتاپ با قابلیت های متعدد ثبت املاک، مشتریان، اسناد، گزارشگیری، ارتباط با کالرآیدی و ... \n مشاورین املاک معمولا پر مشغله هستند و روزانه باید با تعداد زیادی مشتری تماس بگیرند، بازدید هماهنگ کنند و یا در قراری حاضر شوند. در این بازار رقابتی اگر بخواهید به روش سنتی و بدون کمک از تکنولوژی کار های خودتون رو پیش ببرید احتمالا کار برای شما سخت خواهد شد. با استفاده از یک نرم افزار پیشرفته مدیریت املاک مثل نرم افزار CRM دانا، شما می تونید بسیاری از کار های روتین روزانه رو به سیستم بسپارید و با خیال راحت به کار های مهم تر بپردازید.",
        platforms: ['ویندوز']
    })

    return (
        <>
            <Container maxWidth='xl'>




                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h1">
                            {ProjectData.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '100%', maxWidth: 1280 }}>
                            <Image src={ProjectData.landingImage} width={1280} height={800} layout='responsive' style={{ borderRadius: '24px' }} alt='firedev.ir projects landing image'/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CategoryIcon label='بررسی اجمالی'>
                            <Sort />
                        </CategoryIcon>
                        <Typography variant="body1" sx={{ ml: 2 }}>
                            {ProjectData.overview}

                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ pt: 2 }}>

                        <CategoryIcon label=' پلتفرم های قابل اجرا'>
                            <Memory />
                        </CategoryIcon>
                        <Stack spacing={1} sx={{ pl: 1 }} direction='row'>
                            {ProjectData.platforms.map((item, index) => (
                                <Chip label={item} key={index} />
                            ))}
                        </Stack>
                    </Grid>

                   
                    <Grid item xs={12} md={12} sx={{mt:2}}>
                        <Paper sx={{backgroundImage:'linear-gradient(to right top, #475273, #48577b, #495b83, #4a608c, #4a6594, #496d9d, #4675a6, #437daf, #3f8bb8, #3e98c0, #43a6c5, #4cb3ca);'
                        ,p:2,height:'100%',color:'#fff'}} elevation={1}>
                        <Grid container spacing={1}>
                        <Grid item xs={12} md={5} lg={4}  sx={{display:'flex',justifyContent:'center'}}>
                        <div style={{ width: '90%', maxWidth: 1280 }}>
                            <Image src={SupportImage} width={1280} height={800} layout='responsive' style={{ borderRadius: '24px' }} alt='illustrate image of our support guy'/>
                        </div>
                            </Grid>
                            <Grid item xs={12} md={7} lg={8 } sx={{alignSelf:'center'}}>
<Stack spacing={1} sx={{p:1}} >
    <Stack direction='row' spacing={1}>
        <SupportAgent sx={{width:48,height:48}} />
        <Typography variant="h2" sx={{alignSelf:'center'}}>
            پشتیبانی 24 ساعته 7 روز هفته
        </Typography>
    </Stack>
    <Typography variant="body1" sx={{p:1}}>
        شما میتوانید با استفاده از یکی از راه های ارتباطی زیر با ما تماس بگیرید تا کارشناسان ما مشکلات نرم افزار شما بررسی و رفع نمایند.
    </Typography>
    <Typography variant="h5" alignSelf='center'>
        0901-842-9599
    </Typography>
    <Button color="inherit" startIcon={<Call/>}>
        تماس
    </Button>
</Stack>
                            </Grid>
                        </Grid>

                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const res = await fetch('/api/project/Get')
    // const posts = await res.json()


    const ProjectData = {
        title: 'اپلیکیشن کلید | مدیریت اطلاعات املاک'
    }

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            ProjectData,
        },
    }
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { project_name: 'kilid' } }
        ],
        fallback: true // false or 'blocking'
    };
}
export default ProjectItem;
