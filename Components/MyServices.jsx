import { ChevronLeft, DesignServicesOutlined, DesktopWindowsOutlined, TipsAndUpdatesOutlined, TravelExploreOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { display, useTheme } from "@mui/system";
import CategoryIcon from "./CategoryIcon";



function MyServices() {
    const Services = [
        {
            title: 'برنامه نویسی دسکتاپ', icon: <DesktopWindowsOutlined htmlColor="#84D5FF" fontSize="large"/>,iconBackColor:'#EBF8FF',
            body: 'طراحی و توسعه پیشرفته ترین برنامه های تحت دسکتاپ با استفاده از تمامی api های سیستم عامل. \n قابل اجرا بر روی سیستم عامل های ویندوز، لینوکس و مک (Cross Platform)'
        },

        {
            title: 'برنامه نویسی تحت وب', icon: <TravelExploreOutlined htmlColor="#AD97FF" fontSize="large"/>,iconBackColor:'#F3EEFF',
            body: 'طراحی و توسعه سایت در اصفهان با استفاده از جدیدترین تکنولوژی ها و همراهی تیمی مجرب صورت میگیرد. توسعه انواع سایت های اخباری، فروشگاه انلاین، خدماتی و…'
        },
        {
            title: 'طراحی UI/UX', icon: <DesignServicesOutlined htmlColor="#FEC5E3" fontSize="large"/>,iconBackColor:'#FFEBF6',
            body: 'تحلیل UX (تجربه کاربری) نرم افزار با توجه به سابقه کاری و ارتباط مستقیم با مشتری و درک توانایی ها و همچنین طراحی  UI (رابط کاربری) و Design System  با استفاده از ترند های سال و خلاقیت انجام میگردد.'
        },

        {
            title: 'راه اندازی استارت آپ', icon: <TipsAndUpdatesOutlined htmlColor="#FFE661" fontSize="large"/>,iconBackColor:'#FFF5D2',
            body: 'با کمک تیم خلاق و متخصص ایده های شما را اجرا و به استارت آپ موفق تبدیل خواهیم کرد. از لحاظ مالی نیز توسط شتاب دهنده ها میتوانیم شما را پشتیبانی کنیم.'
        },
    ]
    const theme = useTheme();
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                <ChevronLeft color='primary' fontSize="large" />
                <Typography variant="h2" >
             خدمات نرم افزاری و برنامه نویسی در اصفهان
                </Typography>
                </Stack>
                   
                <Typography variant="body1" sx={{ m: 2 }}>
                    به صورت کلی بخش هایی از خدمات نرم افزاری که در سطح پیشرفته میتونم توسعه بدم رو بخش بندی کردم.
                </Typography>
            </div>
            
            <Container maxWidth='xl'>
                <Grid container maxWidth='xl' spacing={3} sx={{pl:2,pr:2}}>
                    {Services.map((item, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card elevation={2} sx={{height:'100%'}}>
                                <CardContent>
                                    
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} >
                                            <Stack direction='row' spacing={0} alignItems='center'>
                                        <CategoryIcon>
                                        {item.icon}
                                        </CategoryIcon>
                                        <Typography variant="h3" gutterBottom>
                                                {item.title}
                                            </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={12}>
                                        
                                           
                                            <Typography variant="body1" sx={{pr:1,pl:1}}>
                                                {item.body}
                                            </Typography>
                                        
                                            </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </div>
    )
}

export default MyServices;