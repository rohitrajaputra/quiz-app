import React, { useState, useEffect } from "react";
import axios from "axios";

import Options from "./Options";
import Questions from "./Questions";
import Loading from "./Loading";
import Results from "./Results";

const Quiz = () => {
  const [apidata, setApiData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const APICall = async () => {
    try {
      const { data } = await axios.get("https://opentdb.com/api.php?amount=10");
      setApiData(data.results);
      setAnswers(
        [
          ...data.results[0].incorrect_answers,
          data.results[0].correct_answer,
        ].sort(() => Math.random() - 0.5)
      );
    } catch (err) {
      alert("something went wrong.");
    }
  };

  useEffect(() => {
    APICall();
    //esLint-disable-next-line
  }, []);

  const countHandler = () => {
    if (apidata[index].correct_answer === selected) {
      setScore((prev) => {
        return prev + 1;
      });
    }
  };

  const onClickHandler = (answer) => {
    setSelected(answer);
  };
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const onNextHandler = () => {
    if (index < 9) {
      setIndex((prev) => {
        return prev + 1;
      });
    }
    shuffledAnswers();
    setUserAnswers([...userAnswers, selected]);
    countHandler();
    setSelected(null);
  };
  const onSubmitHandler = () => {
    setUserAnswers([...userAnswers, selected]);
    setCompleted(true);
    countHandler();
  };
  const shuffledAnswers = () => {
    const answers_data = shuffle([
      ...apidata[index + 1].incorrect_answers,
      apidata[index + 1].correct_answer,
    ]);
    setAnswers(answers_data);
  };
  const renderedOptions = answers.map((answer, index) => {
    const letters = ["A", "B", "C", "D"];
    const currentOption = letters[index];
    return (
      <div
        className="six wide mobile eight wide tablet eight wide computer two wide column "
        style={{ marginTop: "10px" }}
        key={currentOption}
      >
        <Options
          option={currentOption}
          onClickHandler={onClickHandler}
          selected={selected}
          index={index}
          content={answer}
        />
      </div>
    );
  });

  return (apidata.length > 0) & !completed ? (
    <div
      className="ui stackable centered grid container"
      style={{ marginTop: "30px" }}
    >
      <div className="center aligned row">
        <div className="sixteen wide column">
          <Questions
            question={apidata[index].question}
            difficulty={apidata[index].difficulty}
            category={apidata[index].category}
            count={index + 1}
          />
        </div>
      </div>
      <div className="center aligned row">{renderedOptions}</div>

      <div className="row">
        <div className="ten wide mobile ten wide tablet ten wide computer column">
          <div className="ui center aligned basic segment">
            <button
              className="ui primary button "
              onClick={onNextHandler}
              disabled={index >= 9 || !selected}
            >
              Next
            </button>
            <button
              className="ui positive button"
              onClick={onSubmitHandler}
              disabled={index < 9}
            >
              Submit{10 - index === 1 ? "" : `  (${10 - index})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : !completed ? (
    <Loading />
  ) : (
    <Results score={score} />
  );
};

export default Quiz;
