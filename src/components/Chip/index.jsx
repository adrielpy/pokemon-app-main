import PropTypes from "prop-types";
import "./styles.css";

const Chip = ({ tipo }) => {
  const typeColors = {
    Normal: { background: "#989898", color: "#ffffff" },
    Fire: { background: "#ff6132", color: "#ffffff" },
    Water: { background: "#2d91ff", color: "#ffffff" },
    Grass: { background: "#3fbf26", color: "#ffffff" },
    Electric: { background: "#fcdb00", color: "#ffffff" },
    Psychic: { background: "#fe5e7a", color: "#ffffff" },
    Fighting: { background: "#ffa302", color: "#ffffff" },
    Poison: { background: "#9850ce", color: "#ffffff" },
    Ground: { background: "#aa783d", color: "#ffffff" },
    Rock: { background: "#b8ba86", color: "#ffffff" },
    Bug: { background: "#a1a423", color: "#ffffff" },
    Ghost: { background: "#6c4272", color: "#ffffff" },
    Steel: { background: "#6bb1d5", color: "#ffffff" },
    Ice: { background: "#44d6ff", color: "#ffffff" },
    Dragon: { background: "#5463d6", color: "#ffffff" },
    Dark: { background: "#484848", color: "#ffffff" },
    Fairy: { background: "#ffaffe", color: "#ffffff" },
    Flying: { background: "#96cafc", color: "#ffffff" },
    default: { background: "#989898", color: "#ffffff" },
  };

  const { background, color } = typeColors[tipo] || typeColors.default;

  return (
    <span
      className="chip"
      style={{
        backgroundColor: background,
        color: color,
      }}
    >
      {tipo}
    </span>
  );
};

Chip.propTypes = {
  tipo: PropTypes.string.isRequired,
};

export default Chip;
