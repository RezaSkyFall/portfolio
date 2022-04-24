import { ChevronLeft } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
// pages/404.js
export default function Custom404() {
    const router = useRouter();
    return (
        <>
        <Typography textAlign='center' sx={{m:1}}>404 | صفحه مورد نظر یافت نشد</Typography>
        <div style={{display:'flex',justifyContent:'center'}}>
            <Button startIcon={<ChevronLeft/>} onClick={()=>router.back()} sx={{alignSelf:'center'}}>بازگشت</Button>
        </div>
        </>
    )
}