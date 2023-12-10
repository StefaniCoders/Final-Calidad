import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const CustomDivider = ({ text }) => {
  return (
    <Typography
      variant="subtitle1"
      align="center"
      sx={{
        borderBottom: "1px solid #ccc",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    >
      {text && (
        <span style={{ background: "#fff", padding: "0 10px" }}>{text}</span>
      )}
    </Typography>
  );
};

CustomDivider.propTypes = {
  text: PropTypes.string,
};

export default CustomDivider;
