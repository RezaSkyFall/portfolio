
import { ArrowBack, ArrowLeft, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button, Container, IconButton, Stack, Typography } from '@mui/material';
import { borderRadius } from '@mui/system';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';




function ProjectsLanding() {
    const Projects = [
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
    ]
const SplideRef = useRef(null)
    return (
        <div>
             <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                <ChevronLeft color='primary' fontSize="large" />
                <Typography variant="h2" >
                پروژه های انجام شده
                </Typography>
                </Stack>
        <Container>
        {/*  */}
            
        </Container>
            <Splide ref={SplideRef} options={{
                type: 'loop', perPage: 3, direction: 'rtl',
                perMove: 1, autoWidth:true
            }}>

                {Projects.map((item, index) => (
                    <SplideSlide key={index}>
                        <Link  href='/projects' passHref>
                        <div style={{padding:32,width:'80vw',maxWidth:640,cursor:'pointer'}}>
                        <div style={{display:'block'}}>
                            <Image src={item.image}  layout="responsive" width={1080} height={770}  alt={item.title}
                            style={{borderRadius:'24px'}} priority quality={100} unoptimized
                             />
                            </div>
                        <Stack spacing={2} sx={{pt:2}}>
                            

                           <Typography variant='h2'>
                               {item.title}
                               </Typography>
                               <Typography variant='body1'>
                                   {item.body}
                                   </Typography> 
                                   <Button color='inherit' size='large' startIcon={<ArrowBack/>}>
                                       ادامه
                                   </Button>
                        </Stack>
                        </div>
                        </Link>
                    </SplideSlide>
                ))}

            </Splide>
        </div>
    )
}
export default ProjectsLanding;