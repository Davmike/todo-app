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

  return (
    <Section>
      <GlobalStyle />
      <div
        class="header"
        onClick={() => {
          setDark(!dark);
        }}
      >
        <img class="todoImg" src={todo} alt="todo logo" />
        <img class="sunImg" src={dark ? sun : moon} alt="sun image" />
      </div>
      <div class="headerInput">
        <img src={check} alt="check image" />
        <input
          type="text"
          placeholder="Create a new todo…"
          class="header-input"
        />
      </div>

      <div class="container">
        <div class="inputBox">
          <img src={check} alt="check image" />
          <p class="paragraph">Complete online JavaScript course</p>
          <img class="crossImg" src={cross} alt="esc img" />
        </div>
        <hr />

        <div class="inputBox">
          <img src={check} alt="check image" />
          <p class="paragraph">Jog around the park 3x</p>
          <img class="crossImg" src={cross} alt="esc img" />
        </div>
        <hr />

        <div class="inputBox">
          <img src={check} alt="check image" />
          <p class="paragraph">10 minutes meditation</p>
          <img class="crossImg" src={cross} alt="esc img" />
        </div>
        <hr />

        <div class="inputBox">
          <img src={check} alt="check image" />
          <p class="paragraph">Read for 1 hour</p>
          <img class="crossImg" src={cross} alt="esc img" />
        </div>
        <hr />

        <div class="inputBox">
          <img src={check} alt="check image" />
          <p class="paragraph">Pick up groceries</p>
          <img class="crossImg" src={cross} alt="esc img" />
        </div>
        <hr />

        <div class="inputBox">
          <img src={check} alt="check image" />
          <p class="paragraph">Complete Todo App on Frontend Mentor</p>
          <img class="crossImg" src={cross} alt="esc img" />
        </div>
        <hr />

        <div class="cleanBox">
          <p class="itemsLeft">5 items left</p>
          <p class="clear">Clear Completed</p>
        </div>

        {/* last div */}
      </div>

      <div class="lastDiv">
        <p class="all">All</p>
        <p class="active">Active</p>
        <p class="completed">Completed</p>
      </div>

      <p class="lastParagraph">Drag and drop to reorder list</p>
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
    background: #25273d;
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    width: 327px;
    height: 48px;
    /* insede */
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 20px;
  }

  .header-input {
    background: #25273d;
    border: none;
    outline: none;
    color: #767992;
  }

  .header-input::placeholder {
    color: #767992;
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
    background: #25273d;
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
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
    color: #c8cbe7;
    font-size: 12px;
    font-weight: 400;
  }

  .crossImg {
    width: 12px;
    height: 12px;
    display: flex;
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
    color: white;
    cursor: pointer;
  }

  hr {
    width: 327px;
    height: 1px;
    background: #393a4b;
    border: none;
  }

  .lastDiv {
    box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    margin-top: 16px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    background: #25273d;
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
    color: white;
    cursor: pointer;
  }

  .active {
    color: #5b5e7e;
    font-size: 14px;
    font-weight: 700;
  }

  .active:hover {
    color: white;
    cursor: pointer;
  }

  .completed {
    color: #5b5e7e;
    font-size: 14px;
    font-weight: 700;
  }

  .completed:hover {
    color: white;
    cursor: pointer;
  }

  .lastParagraph {
    color: #5b5e7e;
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

    .container {
      width: 540px;
      height: 439px;
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
