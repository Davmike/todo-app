import { useState } from "react";
import GlobalStyle from "./style-component/GlobalStyle";
import styled from "styled-components";
import todo from "../public/assets/todo.svg";
import sun from "../public/assets/icon-sun.svg";
import moon from "../public/assets/icon-moon.svg";
import cross from "../public/assets/icon-cross.svg";
import check from "../public/assets/circle.svg";

function App() {
  const [dark, setDark] = useState(true);
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setTasks([...tasks, inputText.trim()]);
      setInputText("");
    }
  };

  return (
    <Section dark={dark}>
      <GlobalStyle dark={dark} />
      <div
        className="header"
        onClick={() => {
          setDark(!dark);
        }}
      >
        <img className="todoImg" src={todo} alt="todo logo" />
        <img className="sunImg" src={dark ? sun : moon} alt="sun image" />
      </div>
      <div className="headerInput">
        <img src={check} alt="check image" />
        <input
          type="text"
          placeholder="Create a new todo…"
          className="header-input"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>

      {tasks.length > 0 && (
        <div className="container">
          {tasks.map((task, index) => (
            <div key={index}>
              <div className="inputBox" key={index}>
                <img src={check} alt="check image" />
                <p className="paragraph">{task}</p>
                <img className="crossImg" src={cross} alt="esc img" />
              </div>
              <hr key={`hr-${index}`} />
            </div>
          ))}

          <div className="cleanBox">
            <p className="itemsLeft">5 items left</p>
            <p className="clear">Clear Completed</p>
          </div>
        </div>
      )}

      {/* last div */}
      <div className="lastDiv">
        <p className="all">All</p>
        <p className="active">Active</p>
        <p className="completed">Completed</p>
      </div>

      <p className="lastParagraph">Drag and drop to reorder list</p>
    </Section>
  );
}

export default App;

const Section = styled.div`
  padding: 50px 24px 72px 24px;

  .todoImg {
    width: 109px;
    height: 20px;
  }

  .sunImg {
    width: 20px;
    height: 20px;
  }

  .header {
    display: flex;
    flex-direction: row;
    gap: 196px;
  }

  .headerInput {
    margin-top: 40px;
    border-radius: 5px;
    background-color: ${(props) => (props.dark ? "#25273d" : "#FFF")};
    box-shadow: ${(props) =>
      props.dark
        ? "0px 35px 50px -15px rgba(0, 0, 0, 0.5)"
        : "0px 35px 50px -15px rgba(194, 195, 214, 0.50)"};
    width: 327px;
    height: 48px;
    /* insede */
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 20px;
  }

  .header-input {
    background-color: ${(props) => (props.dark ? "#25273d" : "#FFF")};
    border: none;
    outline: none;
    color: ${(props) => (props.dark ? " #767992" : "#393A4B")};
  }

  .header-input::placeholder {
    color: ${(props) => (props.dark ? " #767992" : "#393A4B")};
    font-size: 12px;
    font-weight: 400;
  }

  .checkbox-input {
    width: 20px;
    height: 20px;
    background: #393a4b;
  }

  .container {
    margin-top: 16px;
    border-radius: 5px;
    background-color: ${(props) => (props.dark ? "#25273d" : "#FFF")};
    box-shadow: ${(props) =>
      props.dark
        ? " 0px 35px 50px -15px rgba(0, 0, 0, 0.50)"
        : "0px 35px 50px -15px rgba(194, 195, 214, 0.50)"};
  }

  .inputBox {
    width: 327px;
    height: 48px;
    /* insede */
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 20px;
  }

  .paragraph {
    color: ${(props) => (props.dark ? "#C8CBE7" : "#494C6B")};
    font-size: 12px;
    font-weight: 400;
  }

  .crossImg {
    width: 12px;
    height: 12px;
    margin-left: auto;
    margin-right: 20px;
  }

  .cleanBox {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 135px;
  }

  .itemsLeft {
    color: #5b5e7e;
    font-size: 12px;
    font-weight: 400;
  }

  .clear {
    color: #5b5e7e;
    text-align: right;
    font-size: 12px;
    font-weight: 400;
  }

  .clear:hover {
    color: ${(props) => (props.dark ? "white" : "#262835")};
    cursor: pointer;
  }

  hr {
    width: 327px;
    height: 1px;
    background-color: ${(props) => (props.dark ? "#393a4b" : "#E3E4F1")};
    border: none;
  }

  .lastDiv {
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    margin-top: 16px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background-color: ${(props) => (props.dark ? "#25273d" : "#FFF")};
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    width: 327px;
    height: 48px;
    /* insede */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 19px;
  }

  .all {
    color: #3a7cfd;
    font-size: 14px;
    font-weight: 700;
  }

  .all:hover {
    color: ${(props) => (props.dark ? "white" : "#8f9ced")};
    cursor: pointer;
  }

  .active {
    color: #5b5e7e;
    font-size: 14px;
    font-weight: 700;
  }

  .active:hover {
    color: ${(props) => (props.dark ? "white" : "#262835")};
    cursor: pointer;
  }

  .completed {
    color: #5b5e7e;
    font-size: 14px;
    font-weight: 700;
  }

  .completed:hover {
    color: ${(props) => (props.dark ? "white" : "#262835")};
    cursor: pointer;
  }

  .lastParagraph {
    color: ${(props) => (props.dark ? "#5B5E7E" : "#9495A5")};
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-top: 40px;
  }

  /* desktop */

  @media screen and (min-width: 1440px) {
    .todoImg {
      width: 167px;
      height: 40px;
    }

    .headerInput {
      width: 540px;
      height: 64px;
    }

    .header {
      gap: 348px;
    }

    .header-input {
      font-size: 16px;
    }

    .header-input::placeholder {
      font-size: 16px;
    }

    .paragraph {
      font-size: 18px;
    }

    .inputBox {
      width: 540px;
      height: 64px;
    }

    hr {
      width: 540px;
    }

    .cleanBox {
      gap: 318px;
      padding-left: 24px;
    }

    .inputBox {
      padding-left: 24px;
    }

    .itemsLeft,
    .clear {
      font-size: 14px;
    }

    .lastDiv {
      width: 540px;
      background: none;
      box-shadow: none;
    }
  }
`;
