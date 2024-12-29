import { useState } from "react";
import * as React from "react";

import {
  Stack,
  Box,
  Rating,
  Container,
  Typography,
  Button,
} from "@mui/material";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { AddShoppingCartOutlined } from "@mui/icons-material";

function Cards() {
  const [Cards] = useState([
    {
      img: "https://acquires.in/cdn/shop/files/smooth-white-cotton-t-shirt-with-beautiful-3d-design-879335.jpg?v=1723878953&width=823",
      title: "T-shirt",
      reviews: "(150 reviews)",
      prevPrice: "$90",
    },
    {
      img: "https://acquires.in/cdn/shop/files/abstract-deer-navy-blue-color-cotton-short-sleeve-t-shirt-424052.jpg?v=1723877996&width=823",
      title: "T-shirt",

      reviews: "(70 reviews)",
      prevPrice: "$80",
    },

    {
      img: "https://acquires.in/cdn/shop/files/3d-abstract-roar-lion-t-shirt-939402.webp?v=1723877998&width=823",
      title: "T-shirt",
      reviews: "(144 reviews)",
      prevPrice: "$100",
    },
    {
      img: "    https://acquires.in/cdn/shop/files/JazfgboEx3TVkVKh-1agFB5X8eVzw_JzEWHQrJhkCS9I2ADTYTBEFj2iucwlOpOnqW5fo6VZc-EbUEQ66SeK0IxMcLwV5qrdZ0veEjVjiTl__G7WbHXn1C_t3kXu6IlA-Irl6fVI1CiyQpaMJig5oKQ-vzp5Qu7RKroMagX2TDM.jpg?v=1723877914&width=823",
      title: "T-shirt",
      reviews: "(144 reviews)",
      prevPrice: "$100",
    },
    {
      img: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/s/20/7c1ea811-e04e-408f-88d8-999935d15091.jpg",
      title: "Jacket",
      reviews: "(68 reviews)",
      prevPrice: "$200",
    },
    {
      img: "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/s/29/ca7b3cc2-2ce7-4778-bd82-bda8245c573a.jpg",
      title: "Jacket",
      reviews: "(97 reviews)",
      prevPrice: "$200",
    },
    {
      img: "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/h/07/77095394-0e59-405a-ab5a-f109ce744453.jpg",
      title: "Jacket",
      reviews: "(57 reviews)",
      prevPrice: "$220",
    },
    {
      img: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/j/09/ff96d409-ab1c-42a2-80b7-8147f8475bde.jpg",
      title: "Jacket",
      reviews: "(89 reviews)",
      prevPrice: "$180",
    },
    {
      img: "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/o/18/7b99c122-c694-4419-9461-24a8e35d9b6c.jpg",
      title: "Jacket",
      reviews: "(100 reviews)",
      prevPrice: "$200",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRAXpiInpB2efwuPUnXARYydUp-YZuStC3YJXmX9gF3l5-UbOqO_6gkPsNgdQI99I2UQ&usqp=CAU",
      title: "shoes",

      reviews: "(108 reviews)",
      prevPrice: "$140",
    },
    {
      img: "https://olympicsa.co.za/wp-content/uploads/2024/02/01.Olympic-Bounce-Men-Blue-Feature-image-Side-A-1080px-x-1080px-jpg-600x600.webp",
      title: "shoes",
      reviews: "(123 reviews)",
      prevPrice: "$140",
    },

    {
      img: "https://5.imimg.com/data5/SELLER/Default/2023/7/323356025/UR/EQ/WS/192140499/safeimagekit-resized-img-3--500x500.png",
      title: "shoes",
      reviews: "(120 reviews)",
      prevPrice: "$140",
    },
  ]);
  const [, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Container>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {Cards.map((Card) => (
          <div key={Card.prevPrice}>
            <Stack>
              <Box
                sx={{
                  ":hover": {
                    scale: 1.1,
                    transition: ".7s ease",
                    opacity: 0.9,
                  },
                  maxWidth: 500,
                  mt: "50px",
                  border: "3px solid rgb(51, 46, 46) !important",
                  borderRadius: "5px !important",
                }}
              >
                <CardMedia sx={{ height: 400, width: 300 }} image={Card.img} />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {Card.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="p">
                      {Card.reviews}
                    </Typography>
                    <br />
                    <Typography gutterBottom variant="h6" component="div">
                      {Card.prevPrice}
                    </Typography>
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
                    variant="contained"
                  >
                    <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                    Add to Card
                  </Button>
                  <Rating precision={0.1} name="read-only" value={4} readOnly />
                </CardActions>
              </Box>
            </Stack>
          </div>
        ))}
      </Stack>
    </Container>
  );
}
export default Cards;
