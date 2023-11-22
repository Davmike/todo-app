import { createGlobalStyle } from "styled-components";
import backgroundImage from "../../public/assets/bg-mobile-dark.jpg";
import backgroundDesktopImage from "../../public/assets/bg-desktop-dark.jpg";

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
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: 50% 0%;
  @media screen and (min-width: 1440px){
    background-image: url(${backgroundDesktopImage});

}
}


`;
export default GlobalStyle;
