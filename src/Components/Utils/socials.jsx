import * as React from "react";
import Stack from "@mui/material/Stack";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";

export function socialOne() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<InstagramIcon />}
        sx={{ color: "red" }}
      >
        You can follow me here..
      </Button>
      <Button variant="contained" endIcon={<LinkedInIcon />}>
        Let's connect here ..
      </Button>
    </Stack>
  );
}
export function socialTwo() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<TwitterIcon />}>
        I am also here..
      </Button>
      <Button variant="contained" endIcon={<GoogleIcon />}>
        Or you can just mail me
      </Button>
    </Stack>
  );
}
