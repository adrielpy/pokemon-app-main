import PropTypes from "prop-types";
import Chip from "../Chip"
import "./styles.css";

const PokemonCard = ({ nome, numero, imagem, tipos }) => {
  return (
    <div className="container">
      <div>
        <img src={imagem} alt={nome} />
      </div>
      <h4>{numero}</h4>
      <h2>{nome}</h2>
      <div>
        {tipos.map((tipo, index) => (
          <Chip key={index} tipo={tipo} />
        ))}
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  nome: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  numero: PropTypes.string.isRequired,
  tipos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PokemonCard;
