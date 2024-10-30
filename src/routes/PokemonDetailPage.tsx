import { Box, Card, CardContent, CircularProgress } from "@mui/material";
import { pokemonQueryOptions } from "../hooks/pokemon";
import { createRoute, Link } from "@tanstack/react-router";
import { rootRoute } from "./Root";
import { useQuery } from "@tanstack/react-query";
import ErrorPage from "./ErrorPage";
import PokemonDetailsHeader from "./components/PokemonDetailsHeader";
import PokemonDetailsStats from "./components/PokemonDetailsStats";
import PokemonDetailsAppearance from "./components/PokemonDetailsAppearance";
import PokemonDetailsMoves from "./components/PokemonDetailsMoves";

export const pokemonDetailsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/$pokemon",
    component: PokemonDetailPage,
    loader: ({ context: { queryClient }, params: { pokemon } }) =>
        queryClient.ensureQueryData(pokemonQueryOptions(pokemon)),
    errorComponent: ({ error }) => <ErrorPage errormessage={error.message} />,
    pendingComponent: () => (
        <CircularProgress sx={{ display: "block", m: "0 auto" }} />
    ),
    onCatch: error => <ErrorPage errormessage={error.message} />,
});

function PokemonDetailPage() {
    const params = pokemonDetailsRoute.useParams();
    const { data: pokemon } = useQuery(
        pokemonQueryOptions(params.pokemon || "")
    );

    const getLastPokemon = () => 10277;

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            {pokemon && (
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                        {Number(params.pokemon) !== 1 && (
                            <Link
                                to={`/${Number(params.pokemon) - 1}`}
                                style={{
                                    textDecoration: "none",
                                    color: "#3b5aa6",
                                    fontWeight: "600",
                                }}>
                                Previous pokemon
                            </Link>
                        )}
                        {Number(params.pokemon) < getLastPokemon() && (
                            <Link
                                to={`/${Number(params.pokemon) + 1}`}
                                style={{
                                    textDecoration: "none",
                                    color: "#3b5aa6",
                                    fontWeight: "600",
                                }}>
                                Next pokemon
                            </Link>
                        )}
                    </Box>
                    <Card sx={{ width: "500px" }}>
                        <CardContent>
                            <PokemonDetailsHeader pokemon={pokemon} />
                            <Box sx={{ display: "flex", gap: 8 }}>
                                <PokemonDetailsStats
                                    pokemonStats={pokemon.stats}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}>
                                    <PokemonDetailsAppearance
                                        pokemon={pokemon}
                                    />
                                    <PokemonDetailsMoves pokemon={pokemon} />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            )}
        </Box>
    );
}

export default PokemonDetailPage;
