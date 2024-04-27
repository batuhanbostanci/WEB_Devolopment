import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numberOfQuestions } = useQuiz();
  if (answer === null) {
    return null;
  }
  if (index < numberOfQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => {
            dispatch({ type: "nextQuestion" });
          }}
        >
          Next
        </button>
      </div>
    );
  if (index === numberOfQuestions - 1) {
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => {
            dispatch({ type: "finish" });
          }}
        >
          Finish
        </button>
      </div>
    );
  }
}

export default NextButton;
