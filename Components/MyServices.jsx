import { DesignServicesOutlined, DesktopWindowsOutlined, TipsAndUpdatesOutlined, TravelExploreOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { display } from "@mui/system";



function MyServices() {
    const Services = [
        {
            title: 'برنامه نویسی دسکتاپ', icon: <DesktopWindowsOutlined htmlColor="#84D5FF" fontSize="large"/>,iconBackColor:'#EBF8FF',
            body: 'طراحی و توسعه پیشرفته ترین برنامه های تحت دسکتاپ با استفاده از تمامی api های سیستم عاملی. \n قابل اجرا بر روی سیستم عامل های ویندوز، لینوکس و مک (Cross Platform)'
        },

        {
            title: 'برنامه نویسی تحت وب', icon: <TravelExploreOutlined htmlColor="#AD97FF" fontSize="large"/>,iconBackColor:'#F3EEFF',
            body: 'با توجه به سرعت رشد کسب و کار های آنلاین و استارت آپ ها نیازمندی به توسعه دهنده وب بسیار شایان بوده'
        },
        {
            title: 'طراحی UI/UX', icon: <DesignServicesOutlined htmlColor="#FEC5E3" fontSize="large"/>,iconBackColor:'#FFEBF6',
            body: ''
        },

        {
            title: 'راه اندازی استارت آپ', icon: <TipsAndUpdatesOutlined htmlColor="#FFE661" fontSize="large"/>,iconBackColor:'#FFF5D2',
            body: ''
        },
    ]
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h1" >
                    خدمات قابل ارائه
                </Typography>
                <Typography variant="h3" sx={{ m: 2 }}>
                    به صورت کلی بخش هایی از خدمات نرم افزاری که در سطح پیشرفته میتونم توسعه بدم رو بخش بندی کردم.
                </Typography>
            </div>
            <Container maxWidth='xl'>
                <Grid container maxWidth='xl' spacing={2} sx={{pl:2,pr:2}}>
                    {Services.map((item, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card elevation={0}>
                                <CardContent>
                                    <Stack direction='row' justifyItems='center'>

                                        <Box sx={{ m: 1,p:1,borderRadius:'25px', backgroundColor: item.iconBackColor, minWidth: 76, minHeight: 76 , maxWidth: 76, maxHeight: 76
                                    ,display:'flex',alignItems:'center',justifyContent:'center'}}>
                                            {item.icon}
                                        </Box>

                                        <div>
                                            <Typography variant="h1">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body1">
                                                {item.body}
                                            </Typography>
                                        </div>

                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </>
    )
}

export default MyServices;