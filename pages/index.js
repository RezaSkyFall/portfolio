import { Call, ChevronLeft, Margin } from "@mui/icons-material";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Footer from "../Components/Footer";
import MyServices from "../Components/MyServices";
import ProjectsLanding from "../Components/ProjectsLanding";
import Link from 'next/link';

export default function Home() {
  
  return (
    <>
      <Container maxWidth='xl'>
        <Grid container sx={{ marginTop: 4 }} spacing={2}>

          <Grid item xs={12} md={6} sx={{ placeSelf: 'center' }}>
            <Typography variant="h3" sx={{ marginBottom: 3 }}>
              سلام، من رضا براتی هستم.
            </Typography>
            <Typography color='primary' variant="h1" sx={{lineHeight: '1.3em',  fontFamily: 'IranYekanBold',display:'inline' }}> برنامه نویس </Typography>
            <Typography variant="h1" sx={{  lineHeight: '1.3em',  fontFamily: 'IranYekanBold',display:'inline'  }}>
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
            <Image src='/images/Programming-bro.svg' width='640px' height='640px' alt="illustrate image of reza barati programming"
              style={{ width: '50%', borderRadius: '50%',margin:24 }} />
          </Grid>
        </Grid>
      </Container>
      <div style={{ minHeight: 24 }}>

      </div>
      <MyServices />
      <div style={{ minHeight: 24 }}>

      </div>
      <ProjectsLanding />
    </>
  )
}
