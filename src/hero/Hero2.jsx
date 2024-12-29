import { Container } from "@mui/material";
import { Box, Link, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Hero2 = () => {
  return (
    <Container sx={{ display: "flex", textAlign: "center", height: "400px" }}>
      {/* biiiiiiiiiiiiggggggggggggg */}
      <Box
        flexGrow={1}
        sx={{
          color: "red",
          width: "65%",
          height: "100%",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <img
            width={"100%"}
            height={"400px"}
            src="https://wallpapercave.com/wp/wp10668538.jpg"
            alt=""
          />
          <Stack
            sx={{
              position: "absolute",
              top: "30%",
              transform: "translateY(-40%)",
              left: 31,
            }}
          >
            <Typography
              sx={{
                color: "#222",
                textAlign: "left",
              }}
              variant="h5"
            >
              LIFESTYLE COLLECTION
            </Typography>

            <Typography
              sx={{
                color: "#222",
                fontWeight: 500,
                my: 1,
                textAlign: "left",
              }}
              variant="h3"
            >
              Men
            </Typography>

            <Stack
              sx={{
                justifyContent: { xs: "center", sm: "left" },
              }}
              direction={"row"}
              alignItems={"center"}
            >
              <Typography color={"#333"} mr={1} variant="h4">
                SALE UP TO
              </Typography>
              <Typography color={"#D23F57"} variant="h4">
                30% OFF
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: "#000",
                fontWeight: 300,
                my: 1,
              }}
              variant="body1"
            >
              Get Free Shipping on orders over $99.00
            </Typography>

            <Button
              sx={{
                display: "flex",
                marginLeft: "80px",
                justifyContent: "center",
                width: "150px",
                py: 1,
                mt: 2,
                backgroundColor: "#222",
                boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                color: "#fff",
                borderRadius: "1px",
                "&:hover": {
                  bgcolor: "#151515",
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                },
              }}
              variant="contained"
            >
              shop now
            </Button>
          </Stack>
        </Box>
      </Box>
      {/* endddddddddddddd bigggggggggggg */}

      {/* smaaaaallllllll */}
      <Box
        sx={{
          display: { xs: "none", md: "block", minWidth: "26.6%" },
          width: "30%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            color: "red",
            width: "100%",
            height: "47%",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <img
              width={"100%"}
              height={"200px"}
              src=" https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2c73d3c702e4e8c88b7508906c824e5_9366/Superstar_XLG_Schoenen_Wit_IF3003_01_standard.jpg"
              alt=""
            />
            <Stack
              sx={{
                position: "absolute",
                top: "40%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  mt: 1,
                  fontWeight: 700,
                }}
              >
                SUMMER
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  fontWeight: 700,
                }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            mt: "10px",
            position: "relative",
            color: "red",
            width: "100%",
            height: "47%",
          }}
        >
          <img
            width={"100%"}
            height={"202px"}
            src="https://img4.dhresource.com/webp/m/0x0/f3/albu/km/j/09/ff96d409-ab1c-42a2-80b7-8147f8475bde.jpg"
            alt=""
          />
          <Box>
            <Stack
              sx={{
                position: "absolute",
                top: "30%",
                transform: "translateY(-40%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#151515",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                NEW
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#151515",
                  lineHeight: "16px",
                  mt: 1,
                  fontWeight: 700,
                }}
              >
                Arrive
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#151515",
                  fontWeight: 700,
                }}
              >
                Jacket
              </Typography>

              <Link
                sx={{
                  color: "#151515",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",

                  "&:hover": {
                    color: "#151515",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero2;
