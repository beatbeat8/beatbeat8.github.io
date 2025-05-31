import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

function FunStuffPage() {
    return (
        <div>
            <Grid container spacing={2} sx={{ p:2 }}>
                <Typography variant="body1" className="subheading" sx={{mt:"10vh", textAlign: "center"}}>
                    Stay tuned to more cool stuff I plan to add here!
                </Typography>
            </Grid>
        </div>
    )
}

export default FunStuffPage;