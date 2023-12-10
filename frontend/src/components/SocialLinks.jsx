import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

const SocialLinks = () => {
  const socialMediaData = [
    { name: "facebook", icon: <FacebookOutlinedIcon />, color: "#1877F2" },
    { name: "instagram", icon: <InstagramIcon />, color: "#c13584 " },
    { name: "twitter", icon: <TwitterIcon />, color: "#1da1f2" },
    { name: "google", icon: <FcGoogle />, color: "#" },
  ];

  return (
    <div>
      {socialMediaData.map((socialMedia) => (
        <IconButton sx={{ color: socialMedia.color }} key={socialMedia.name}>
          {socialMedia.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default SocialLinks;
