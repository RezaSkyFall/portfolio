import { Button, Container, Grid, Typography } from "@mui/material";
import MyServices from "../Components/MyServices";

export default function Home() {
  return (
    <>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} md={6}>

          </Grid>
          <Grid item xs={12} md={6}>
<Typography variant="h3">
  سلام، من رضا براتی هستم.
</Typography>
<Typography variant="h1">
  برنامه نویس در ضمینه وب و دسکتاپ
</Typography>
<Button variant="contained" size="large">
  ارتباط با ما
</Button>
          </Grid>
        </Grid>
      </Container>
      <MyServices/>
    </>
  )
}
