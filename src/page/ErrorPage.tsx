import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError() as any;

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
                Something went wrong!
            </Typography>

            <Typography variant='body2' component='p' align='center'>
                {error.statusText || error.message}
            </Typography>
        </Box>
    );
}

export default ErrorPage;
