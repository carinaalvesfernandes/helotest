import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CircularProgress,
    Grid2,
    Pagination,
    Typography,
} from "@mui/material";
import { allPokemonsQueryOptions } from "../hooks/pokemon";
import { createRoute, useNavigate } from "@tanstack/react-router";
import { rootRoute } from "./Root";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import ErrorPage from "./ErrorPage";

export const pokemonOverviewRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: PokemonOverview,
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureQueryData(allPokemonsQueryOptions()),
    errorComponent: ({ error }) => <ErrorPage errormessage={error.message} />,
    pendingComponent: () => (
        <CircularProgress sx={{ display: "block", m: "0 auto" }} />
    ),
    onCatch: error => <ErrorPage errormessage={error.message} />,
});

function PokemonOverview() {
    const limit = 20;
    const [currentOffset, setCurrentOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const { data: pokemons, isLoading } = useQuery(
        allPokemonsQueryOptions(currentOffset)
    );
    const navigate = useNavigate();

    const getAmountofPage = (totalPokemonPages: number) =>
        Math.ceil(totalPokemonPages / limit);

    const handleChange = (page: number) => {
        setCurrentPage(page);
        setCurrentOffset((page - 1) * 20);
    };

    const getPokemonId = (url: string) => url.split("/").slice(-2)[0];

    if (isLoading || !pokemons) {
        return <CircularProgress sx={{ display: "block", m: "0 auto" }} />;
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            {pokemons && (
                <Box>
                    <Grid2 container spacing={2} sx={{ width: "800px", mb: 4 }}>
                        {pokemons.results.map(pokemon => (
                            <Grid2 key={pokemon.name} size={3}>
                                <Card>
                                    <CardActionArea
                                        onClick={() =>
                                            navigate({
                                                to: `/${getPokemonId(
                                                    pokemon.url
                                                )}`,
                                            })
                                        }>
                                        <CardContent>
                                            <Typography
                                                variant='h6'
                                                component='div'
                                                style={{
                                                    textTransform: "capitalize",
                                                    textAlign: "center",
                                                }}>
                                                {pokemon.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid2>
                        ))}
                    </Grid2>
                    <Pagination
                        count={getAmountofPage(pokemons.count)}
                        page={currentPage}
                        variant='outlined'
                        onChange={(_e, page) => handleChange(page)}
                    />
                </Box>
            )}
        </Box>
    );
}

export default PokemonOverview;
