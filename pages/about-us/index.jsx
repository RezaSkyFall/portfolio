import { Box, Button, Card, Container, Grid, IconButton, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';
import GetInTochImage from '../../public/images/Get in touch-amico.svg'
import Image from 'next/image'
import { Call, Email, GridOff, Instagram, LinkedIn, Message, Send, Share, SubdirectoryArrowLeft, Telegram, WhatsApp } from '@mui/icons-material';
function AboutUs() {
    return (
        <>
            <Container maxWidth='xl'>
                <Grid container spacing={2} sx={{mt:2}}>
                    <Grid item xs={12} md={5}>
                        <Image src={GetInTochImage} width='1080' alt='firedev.ir about-us landing'/>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ alignSelf: 'center' }}>
                        <Stack flexWrap='wrap' spacing={0} justifyContent='center' sx={{ p: 1 }}>
                            <Typography variant='h2' gutterBottom>
                                من رضا براتی هستم توسعه دهنده سایت
                                <Link href='/' sx={{ ml: 1, mr: 1 }}>FireDev.ir</Link>
                                هستم.
                            </Typography>
                            <Typography variant='h3' sx={{ ml: 1 }}>
                                اهداف توسعه این سایت به سه قسمت زیر تقسیم میشود :
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon><SubdirectoryArrowLeft /></ListItemIcon>
                                    <ListItemText>ارائه رزومه کاری</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><SubdirectoryArrowLeft /></ListItemIcon>
                                    <ListItemText>نرم افزارهای تولید شده و قابل استفاده</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon><SubdirectoryArrowLeft /></ListItemIcon>
                                    <ListItemText>خدمات نرم افزاری در سراسر استان اصفهان با تیمی مجرب</ListItemText>
                                </ListItem>
                            </List>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} >
                        <Stack sx={{mt:2}}>
                            <Typography variant='h2' align='center' gutterBottom>
                                راه های ارتباطی
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>


                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <Paper variant='outlined' sx={{ p: 1 }}>
                                                <Stack direction='row'>
                                                    <Card variant='outlined' sx={{
                                                        m: 1, p: 1, borderRadius: '18px', color: 'primary.main', minWidth: 62, minHeight: 62, maxWidth: 62, maxHeight: 62
                                                        , display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                    }}>
                                                        <Call />
                                                    </Card>
                                                    <Stack alignSelf='center'>
                                                        <Typography variant='h3' gutterBottom>شماره تماس</Typography>
                                                        <Typography variant='caption'>پاسخگویی 24 ساعته 7 روز هفته</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack sx={{ mt: 2 }}>
                                                    <Typography variant='h5' gutterBottom align='center'>0901-842-9599</Typography>
                                                    <Button variant='outlined' size='small'>تماس</Button>
                                                </Stack>
                                            </Paper >
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Paper variant='outlined' sx={{ p: 1 }}>
                                                <Stack direction='row'>
                                                    <Card variant='outlined' sx={{
                                                        m: 1, p: 1, borderRadius: '18px', color: 'primary.main', minWidth: 62, minHeight: 62, maxWidth: 62, maxHeight: 62
                                                        , display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                    }}>
                                                        <Email />
                                                    </Card>
                                                    <Stack alignSelf='center'>
                                                        <Typography variant='h3' gutterBottom>ایمیل</Typography>
                                                        <Typography variant='caption'>انتقدات و پیشنهادات</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack sx={{ mt: 2 }}>
                                                    <Typography variant='h5' gutterBottom align='center'>rezabaratipe@gmail.com</Typography>
                                                    <Button variant='outlined' size='small'>باز کردن</Button>
                                                </Stack>
                                            </Paper >
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper variant='outlined' sx={{ p: 1 }}>
                                                <Stack direction='row'>
                                                    <Card variant='outlined' sx={{
                                                        m: 1, p: 1, borderRadius: '18px', color: 'primary.main', minWidth: 62, minHeight: 62, maxWidth: 62, maxHeight: 62
                                                        , display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                    }}>
                                                        <Share />
                                                    </Card>
                                                    <Stack alignSelf='center'>
                                                        <Typography variant='h3' gutterBottom>شبکه های اجتماعی</Typography>
                                                        <Typography variant='caption'>ما را در شبکه های اجتماعی دنبال کنید تا از آخرین اخبار ما مطلع باشید !</Typography>
                                                    </Stack>
                                                </Stack>
                                                <Stack sx={{ mt: 2 }} direction='row' justifyContent='center' spacing={1} flexWrap='wrap'>
                                                    <Button size='small' variant='text' startIcon={<LinkedIn />}>
                                                        لینکدین
                                                    </Button>
                                                    <Button size='small' variant='text' startIcon={<Instagram />}>
                                                        اینستاگرام
                                                    </Button>
                                                    <Button size='small' variant='text' startIcon={<Telegram />}>
                                                        تلگرام
                                                    </Button>
                                                    <Button size='small' variant='text' startIcon={<WhatsApp />}>
                                                        واتس آپ
                                                    </Button>
                                                    
                                                </Stack>
                                            </Paper >
                                        </Grid>







                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                <Paper variant='outlined' sx={{ p: 1 }}>
                                <Stack direction='row'>
                                                    <Card variant='outlined' sx={{
                                                        m: 1, p: 1, borderRadius: '18px', color: 'primary.main', minWidth: 62, minHeight: 62, maxWidth: 62, maxHeight: 62
                                                        , display: 'flex', alignItems: 'center', justifyContent: 'center'
                                                    }}>
                                                        <Message />
                                                    </Card>
                                                    <Stack alignSelf='center'>
                                                        <Typography variant='h3' gutterBottom>ارسال پیام</Typography>
                                                        <Typography variant='caption'>پیام خود را برای ما ارسال کنید تا در کوتاه ترین مدت ممکن با شما تماس برقرار کنیم.</Typography>
                                                    </Stack>
                                                </Stack>

                                                <Stack spacing={1} sx={{pt:1}}>
                                                    <TextField label='نام و نام خانوادگی' size='small'/>
                                                    <TextField label='شماره تماس' size='small'/>
                                                    <TextField label='آدرس ایمیل' size='small'/>
                                                    <TextField label='پیام شما ...' size='small' multiline rows={5}/>
                                                    <Button variant='text' startIcon={<Send/>}>
                                                        ارسال
                                                    </Button>
                                                </Stack>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default AboutUs;