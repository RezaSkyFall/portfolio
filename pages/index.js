import { Call, ChevronLeft, Margin } from "@mui/icons-material";
import { Box, Button, Container, Grid, Icon, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../components/Footer";
import MyServices from "../components/MyServices";
import ProjectsLanding from "../components/ProjectsLanding";
import Link from 'next/link';
import ProgrammingLandingImage from '../public/images/Programming-bro.svg'
import Faq from "../components/Faq";

export default function Home() {
  
  return (
    <>
      <Container maxWidth='xl'>
        <Grid container sx={{ marginTop: 2 }} spacing={2}>

          <Grid item xs={12} md={6} sx={{ placeSelf: 'center' }}>
            <Typography variant="h3" sx={{ marginBottom: 3 }}>
              سلام، من رضا براتی هستم.
            </Typography>
            <Typography color='inherit' variant="h1" sx={{lineHeight: '1.3em',  fontFamily: 'IranYekanBold',display:'inline' }}>
               <Box sx={{color:'primary.main'}} component='span'>
                {"برنامه نویس "}
             </Box>
             در ضمینه وب و دسکتاپ
            </Typography>
            
            <Stack spacing={1} direction='row' sx={{mt:2}}>
            <Link href='/projects' passHref>
            <Button variant="contained" size="large" startIcon={<ChevronLeft/>}>
              پروژه ها
            </Button>
            </Link>
            <Link href='/about-us' passHref>
            <Button variant="outlined" size="large" startIcon={<Call/>}>
              ارتباط با ما
            </Button>
            </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
          {/* <Image src={ProgrammingLandingImage} width={1080}  alt="illustrate image of reza barati programming"
           /> */}
            <Image src='/images/Programming-bro.svg' width='640px' height='640px' alt="illustrate image of reza barati programming"
              style={{ width: '50%', borderRadius: '50%',margin:12 }} />
          </Grid>
        </Grid>
      </Container>
      <Stack spacing={6}>
      <MyServices />

      <ProjectsLanding />

      <Faq />
      </Stack>
      
    </>
  )
}
