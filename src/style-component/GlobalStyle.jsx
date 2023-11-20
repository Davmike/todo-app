import { createGlobalStyle } from "styled-components";
import backgroundImage from "../../public/assets/bg-mobile-dark.jpg";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');

* {
box-sizing: border-box;
margin: 0;
padding: 0;

}
body {
  font-family: 'Josefin Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: 50% 0%;
}
`;
export default GlobalStyle;
