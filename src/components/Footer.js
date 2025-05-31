import React from "react";
import { Box, Typography } from "@mui/material";
// import { Instagram, WhatsApp, Telegram } from "@mui/icons-material";

const body1FontSizeXS = '0.8rem'; // md is 1rem
const body2FontSizeXS = '0.7rem'; // md is 0.9rem

function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 2,
        backgroundColor: "#333",
        color: "white",
        mt: "auto",
      }}
    >
      <Typography variant="body1" sx={{fontSize: { xs: body1FontSizeXS, md: '1rem' }}}>Thanks for visiting!</Typography>
      <Typography variant="body2" sx={{ mt: 1, fontSize: { xs: body2FontSizeXS, md: '1rem' } }}>
        Made with ❤️ by Beatrice Gan.
      </Typography>
      <Box sx={{ mt: 1 }}>
      <Typography
        variant="body2"
        sx={{ mt: 1, color: 'white', textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: { xs: body2FontSizeXS, md: '1rem' } }}
        component="a"
        href="https://www.linkedin.com/in/beatrice-gan/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover-cursor"
      >
        Let's connect today!
      </Typography>
        {/* <IconButton
          href="https://www.instagram.com/beat_rice_gun"
          target="_blank"
          sx={{ color: "white" }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href="https://wa.me/97254558"
          target="_blank"
          sx={{ color: "white" }}
        >
          <WhatsApp />
        </IconButton>
        <IconButton
          href="https://t.me/beatbeatt"
          target="_blank"
          sx={{ color: "white" }}
        >
          <Telegram />
        </IconButton> */}
        <Typography sx={{ mt: 1, mb:4}}
        className="hover-cursor"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >🍓</Typography>
        {/* <Typography sx={{ mb: 3, cursor: 'url("/images/strawberryPointer.svg")'}}
        ></Typography> */}
      </Box>
    </Box>
  );
}

export default Footer;
