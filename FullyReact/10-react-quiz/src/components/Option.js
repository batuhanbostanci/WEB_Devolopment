import { useQuiz } from "../contexts/QuizContext";

function Option({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswer = answer !== null;

  return (
    <div className="options">
      {question.options.map((opt, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={opt}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Option;
