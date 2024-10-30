import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { pokemonOverviewRoute } from "./routes/PokemonOverview";
import { pokemonDetailsRoute } from "./routes/PokemonDetailPage";
import {
    createRouter,
    RouterProvider,
} from "@tanstack/react-router";
import { rootRoute } from "./routes/Root";


const routeTree = rootRoute.addChildren({
    pokemonOverviewRoute,
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
