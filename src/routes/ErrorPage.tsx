import { Typography } from "@mui/material";

type ErrorPageProps = {
    errormessage?: string;
};

const ErrorPage = ({ errormessage = "Page not found" }: ErrorPageProps) => {
    return (
        <>
            <Typography variant='h1' component='h2' align='center' gutterBottom>
                Opps!
            </Typography>
            <Typography
                variant='body1'
                component='p'
                align='center'
                gutterBottom>
                {errormessage}
            </Typography>
        </>
    );
};

export default ErrorPage;
