import { Box } from "@mui/material";
import { QueryClient } from "@tanstack/react-query";
import {
    createRootRouteWithContext,
    Link,
    Outlet,
} from "@tanstack/react-router";
import ErrorPage from "./ErrorPage";
import logo from "../assets/logo.png";

export const rootRoute = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: () => (
        <>
            <Link to='/'>
                <Box
                    component='img'
                    sx={{
                        width: "100%",
                        maxWidth: 400,
                        display: "block",
                        m: "0 auto",
                        mt: "5vh",
                        mb: 8,
                    }}
                    alt='Pokemon Logo'
                    src={logo}
                />
            </Link>
            <Outlet />
        </>
    ),
    notFoundComponent: () => <ErrorPage />,
});
