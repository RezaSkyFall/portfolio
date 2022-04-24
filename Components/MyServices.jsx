import { Card, CardContent, Container, Grid, Typography } from "@mui/material";



function MyServices(){
    const Services = [
        {title:'برنامه نویسی دسکتاپ',body:'طراحی و توسعه پیشرفته ترین برنامه های تحت دسکتاپ با استفاده از تمامی api های سیستم عاملی. \n قابل اجرا بر روی سیستم عامل های ویندوز، لینوکس و مک (Cross Platform)'},
        {title:'برنامه نویسی تحت وب',body:'با توجه به سرعت رشد کسب و کار های آنلاین و استارت آپ ها نیازمندی به توسعه دهنده وب بسیار شایان بوده'}
    ]
    return(
        <>
        <div style={{textAlign:'center'}}>
        <Typography variant="h1" >
            خدمات قابل ارائه
        </Typography>
        <Typography variant="h3">
            به صورت کلی بخش هایی از خدمات نرم افزاری که در سطح پیشرفته میتونم توسعه بدم رو بخش بندی کردم.
        </Typography>
        </div>
        <Container maxWidth='xl'>
            <Grid container maxWidth='xl' spacing={2}>
                {Services.map((item,index) =>(
                    <Grid item xs={12} md={6} key={index}>
                    <Card elevation={0}>
<CardContent>
    <Typography variant="h1">
        {item.title}
    </Typography>
    <Typography variant="h5">
        {item.body}
    </Typography>
</CardContent>
                    </Card>
                    </Grid>
                )) }
                
            </Grid>
        </Container>
        </>
    )
}

export default MyServices;