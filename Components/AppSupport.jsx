import { Call, SupportAgent } from "@mui/icons-material";
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SupportImage from '../public/images/Telecommuting-pana.svg'

function AppSupport(){
return(
    <Paper sx={{backgroundImage:'linear-gradient(to right top, #475273, #48577b, #495b83, #4a608c, #4a6594, #496d9d, #4675a6, #437daf, #3f8bb8, #3e98c0, #43a6c5, #4cb3ca);'
    ,p:2,height:'100%',color:'#fff'}} elevation={1}>
    <Grid container spacing={1}>
    <Grid item xs={12} md={5} lg={4}  sx={{display:'flex',justifyContent:'center'}}>
    <div style={{ width: '90%', maxWidth: 1280 }}>
        <Image src={SupportImage} width={1280} height={800} layout='responsive' style={{ borderRadius: '24px' }} alt='illustrate image of our support guy'/>
    </div>
        </Grid>
        <Grid item xs={12} md={7} lg={8 } sx={{alignSelf:'center'}}>
<Stack spacing={1} sx={{p:1}} >
<Stack direction='row' spacing={1}>
<SupportAgent sx={{width:48,height:48}} />
<Typography variant="h2" sx={{alignSelf:'center'}}>
پشتیبانی 24 ساعته 7 روز هفته
</Typography>
</Stack>
<Typography variant="body1" sx={{p:1}}>
شما میتوانید با استفاده از یکی از راه های ارتباطی زیر با ما تماس بگیرید تا کارشناسان ما مشکلات نرم افزار شما بررسی و رفع نمایند.
</Typography>
<Typography variant="h5" alignSelf='center'>
0901-842-9599
</Typography>
<Button color="inherit" startIcon={<Call/>}>
تماس
</Button>
</Stack>
        </Grid>
    </Grid>

    </Paper>
)
}

export default AppSupport;