import { useEffect, useState } from "react";
import api from "../../services/api";
import PokemonCard from "../../components/PokemonCard";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./styles.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await api.get();
        setPokemons(response.data.results);
        setFilteredPokemons(response.data.results);
      } catch (err) {
        console.error(err);
        setError("Erro ao buscar os Pokémons.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const handleSearch = () => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-container">
      <h1 className="title">Lista de Pokémons</h1>
      <div className="filter-container">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar Pokémon"
        />
        <Button onClick={handleSearch} style={{ marginLeft: "8px" }}>
          Pesquisar
        </Button>
      </div>
      <div className="pokemons-list">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            nome={pokemon.name}
            imagem={pokemon.sprites.normal}
            tipos={pokemon.type}
            numero={pokemon.national_number}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
