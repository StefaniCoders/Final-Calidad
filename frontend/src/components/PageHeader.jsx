import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const PageHeader = ({ children }) => {
  return (
    <Typography variant="h1" sx={{ fontSize: "2.5rem", fontWeight: "600" }}>
      {children}
    </Typography>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;
