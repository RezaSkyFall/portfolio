import { ChevronLeft, ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";



function Faq(){
    const data = [
        {ques:"seo چیست ؟",answ:"seo یعنی بهینه سازی موتور جستجو , کارایی ان به این صورت است که با استفاده از روش های استاندارد واستراتژی های خاص خود هر گاه شخصی مطلبی را در اینترنت (گوگل) جستجو میکند سایت شما را پیش از سایت های دیگر نشان میدهد.    "},
        {ques:"چه مدت پشتیبانی میدهید؟",answ:"برای هر نرم افزار مدت ۶ ماه پشتیبانی رایگان در نظر گرفته شده و پس از ان با توافق طرفین صورت میگیرد.    "},
        {ques:"وب اپ چیست و چه کارایی دارد؟",answ:"به برنامه هایی که سمت وب پردازش میشوند و برای اجرا بر روی تمامی دستگاه ها با استفاده از مرورگر میسر میباشد و از مزایای بالایی برخوردار می‌باشند.    "},
        {ques:"دسترسی کاربران به چه صورت است؟",answ:"در هر قسمتی از برنامه یا وب تمامی عملیات کاربران داری سطوح دسترسی و پیگیری میبا‌شد و از این بابت نیاز به نگرانی نیست  .  "},
        {ques:"اعتماد در فروشگاه الکترونیکی به چه صورت است؟",answ:"دو راه کار مفید وجود دارد به این صورت که ابتدا برای شما نماد الکترونیکی E-nemad میگیریم و سپس با استفاده از ssl (https) سایت شما را به یک سایت امن تبدیل میکنیم  .  "},
    ];
    const [expanded, setExpanded] = useState(0);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return(
        <>
        <Container maxWidth="lg" sx={{alignSelf:'center'}}>
        <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                <ChevronLeft color='primary' fontSize="large" />
                <Typography variant="h2" >
             سوالات متداول
                </Typography>
                </Stack>
            {data.map((q,index) => (
                <Accordion key={index}  expanded={expanded === index} onChange={handleChange(index)} elevation={0} variant='outlined'
                >
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant='body1'>
                    {q.ques}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='body2'>
                    {q.answ}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            ))}
            </Container>
        </>
    )
}

export default Faq;