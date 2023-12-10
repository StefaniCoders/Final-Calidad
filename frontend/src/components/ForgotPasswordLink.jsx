import { Link, Typography } from "@mui/material";

const ForgotPasswordLink = () => {
  return (
    <Typography variant="body2" sx={{ mt: 2 }}>
      <Link href="#" target="_blank" underline="hover">
        ¿Olvidaste tu contraseña?
      </Link>
    </Typography>
  );
};

export default ForgotPasswordLink;
