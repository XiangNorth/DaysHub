import Cards from "../components/Cards";
import { Box } from "@mui/material";

function Body() {
  let holis = [
    {
      title: "Title1",
      text: "porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      year: "2009",
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    },
    {
      title: "Title2",
      text: "porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      year: "2012",
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    },
    {
      title: "Title3",
      text: "porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      year: "2014",
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    },
    {
      title: "Title4",
      text: "porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      year: "2016",
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    },
    {
      title: "Title5",
      text: "porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      year: "2018",
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
    },
  ];
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {holis.map((holi) => (
        <Cards
          title={holi.title}
          text={holi.text}
          year={holi.year}
          image={holi.image}
        />
      ))}
    </Box>
  );
}

export default Body;
