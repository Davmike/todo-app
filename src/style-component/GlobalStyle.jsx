import { createGlobalStyle } from "styled-components";
import backgroundImage from "../../public/assets/bg-mobile-dark.jpg";
import backgroundDesktopImage from "../../public/assets/bg-desktop-dark.jpg";
import backgroundImageLight from "../../public/assets/bg-mobile-light.jpg";
import backgroundDesktopImageLight from "../../public/assets/bg-desktop-light.jpg";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');

* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
  background-color: ${(props) => (props.dark ? "#171823" : "#FAFAFA")};
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${(props) =>
    props.dark ? `url(${backgroundImage})` : `url(${backgroundImageLight})`};
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: 100% 300px;
  @media screen and (min-width: 1440px){
    background-image: ${(props) =>
      props.dark
        ? `url(${backgroundDesktopImage})`
        : `url(${backgroundDesktopImageLight})`};
}
}


`;
export default GlobalStyle;
