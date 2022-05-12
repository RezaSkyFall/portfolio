import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowBack } from "@mui/icons-material";
import {useRouter} from 'next/router'

function ProjectsLanding() {
    const [ProjectsList, setProjectsList] = useState([
        {
            id: 1,
            title: 'اپلیکیشن کلید | مدیریت اطلاعات املاک',
            body: 'نرم افزار تحت پلتفرم دسکتاپ با قابلیت های متعدد ثبت املاک، مشتریان، اسناد، گزارشگیری، ارتباط با کالرآیدی و ...',
            image: '/images/projects - kilid app.jpg',
            name:'kilid'
        },
        {
            id: 2,
            title: 'اپلیکیشن دفترچه | دفترچه تلفن هوشمند',
            body: 'نرم افزار تحت پلتفرم دسکتاپ با قابلیت های ارتباط با کالرآیدی، دریافت تماس، ایجاد مخاطب، گزارش گیری، یادداشت   و ...',
            image: '/images/projects - notebook app.jpg',
            name:'notebook'
        },
        {
            id: 3,
            title: 'وب اپ دانشگاه هوشمند | CMS هوشمند پروژه و کارآموزی دانشگاه',
            body: 'نرم افزار تحت پلتفرم دسکتاپ با قابلیت های ارتباط با کالرآیدی، دریافت تماس، ایجاد مخاطب، گزارش گیری، یادداشت   و ...',
            image: '/images/projects - smart college.jpg',
            name:'notebook'
        },
    ])
    const router= useRouter();
    return (
        <>
            <Container maxWidth='xl'>
                <Typography variant="h2" gutterBottom>
                    پروژه های توسعه داده شده
                </Typography>
                <Grid container spacing={2}>
                    {
                        ProjectsList.map((item, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                    <Link href={'/projects/'+item.name} passHref>
                                        <div style={{ width: '100%', maxWidth: 640, cursor: 'pointer' }}>
                                            <div style={{ display: 'block' }}>
                                                <Image src={item.image} layout="responsive" width={1080} height={770} alt={item.title}
                                                    style={{ borderRadius: '24px' }} priority quality={100} unoptimized
                                                />
                                            </div>
                                            <Stack spacing={2} sx={{ pt: 2 }}>


                                                <Typography variant='h2'>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant='body1'>
                                                    {item.body}
                                                </Typography>
                                                <Button color='inherit' size='large' startIcon={<ArrowBack />}>
                                                    ادامه
                                                </Button>
                                            </Stack>
                                        </div>
                                    </Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

export default ProjectsLanding;