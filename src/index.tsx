import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./page/ErrorPage";
import { indexRoute } from "./App";
import { pokemonDetailsRoute } from "./page/PokemonDetailPage";
import {
    createRootRouteWithContext,
    createRouter,
    Link,
    Outlet,
    RouterProvider,
} from "@tanstack/react-router";
import { Box } from "@mui/material";
import logo from "./assets/logo.png";

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
    notFoundComponent: ErrorPage,
});

const routeTree = rootRoute.addChildren({
    indexRoute,
    pokemonDetailsRoute,
});

const queryClient = new QueryClient();

const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    context: {
        queryClient,
    },
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
