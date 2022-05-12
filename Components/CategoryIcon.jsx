import { Paper, Stack, Typography } from "@mui/material";

function CategoryIcon({ children, label }) {

    return(
    <Stack direction='row' spacing={1}>
        <Paper variant='outlined' sx={{
            m: 1,ml:0, p: 1, borderRadius: '18px', color: 'primary.main', minWidth: 62, minHeight: 62, maxWidth: 62, maxHeight: 62
            , display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            {children}
        </Paper>
        <Typography variant="h5" sx={{ alignSelf: 'center' }}>
            {label}
        </Typography>
    </Stack>
    )
}

export default CategoryIcon;