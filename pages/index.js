import { Margin } from "@mui/icons-material";
import { Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import MyServices from "../Components/MyServices";

export default function Home() {
  return (
    <>
      <Container maxWidth='xl'>
        <Grid container sx={{marginTop:6}}>

          <Grid item xs={12} md={6} sx={{placeSelf:'center'}}>
            <Typography variant="h3" sx={{ marginBottom: 3 }}>
              سلام، من رضا براتی هستم.
            </Typography>
            <Typography variant="h1" sx={{ marginBottom: 3, lineHeight: '1.3em', fontSize: 68, fontFamily: 'IranYekanBold' }}>
              برنامه نویس در ضمینه وب و دسکتاپ
            </Typography>
            <Button variant="contained" size="large">
              ارتباط با ما
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
<Image src='/images/reza_barati_landing.jpg' width='640px' height='640px'

 style={{width:'50%',borderRadius:'50%' ,Margin:40}}/>
          </Grid>
        </Grid>
      </Container>
      <div style={{minHeight:24}}>

      </div>
      <MyServices />
    </>
  )
}
