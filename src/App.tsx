import { Box, Card, CardContent, Typography } from "@mui/material";
import "./App.css";
import { useFetchAllPokemonGen1, useFetchPokemon } from "./hooks/pokemon";

function App() {
    //const { data } = useFetchPokemon(1);
    const { data: allPokemons } = useFetchAllPokemonGen1();

    return (
        <div className='App'>
            <Typography variant='h1' component='h2'>
                Pokemon
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        maxWidth: "800px",
                        gap: 1,
                    }}>
                    {allPokemons?.map(pokemon => (
                        <Card sx={{ maxWidth: 200 }}>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h6'
                                    component='div'>
                                    {pokemon.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </div>
    );
}

export default App;
