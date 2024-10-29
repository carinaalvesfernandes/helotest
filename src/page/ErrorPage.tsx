import { Box, Typography } from "@mui/material";

function ErrorPage() {
    return (
        <Box sx={{ mt: "25vh" }}>
            <Typography variant='h1' component='h2' align='center' gutterBottom>
                Opps!
            </Typography>
            <Typography
                variant='body1'
                component='p'
                align='center'
                gutterBottom>
                Page not found
            </Typography>
        </Box>
    );
}

export default ErrorPage;
