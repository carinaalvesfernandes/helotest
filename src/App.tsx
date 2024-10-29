import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@mui/material";
import { allPokemonsQueryOptions } from "./hooks/pokemon";
import { createRoute, useNavigate } from "@tanstack/react-router";
import { rootRoute } from ".";
import { useQuery } from "@tanstack/react-query";

export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: App,
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureQueryData(allPokemonsQueryOptions),
});

function App() {
    const { data: allPokemons } = useQuery(allPokemonsQueryOptions);
    const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    maxWidth: "800px",
                    gap: 1,
                }}>
                {allPokemons?.pokemon_species.map(pokemon => (
                    <Card key={pokemon.name} sx={{ maxWidth: 200 }}>
                        <CardActionArea
                            onClick={() =>
                                navigate({ to: `/${pokemon.name}` })
                            }>
                            <CardContent>
                                <Typography variant='h6' component='div'>
                                    {pokemon.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default App;
