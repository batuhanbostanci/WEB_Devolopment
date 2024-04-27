import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numberOfQuestions, points, maxPossiblePoints, answer } =
    useQuiz();
  return (
    <div>
      <header className="progress">
        <progress
          max={numberOfQuestions}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Question <strong>{index + 1}</strong> / {numberOfQuestions}
        </p>

        <p>
          <strong>{points}</strong> / {maxPossiblePoints} Points
        </p>
      </header>
    </div>
  );
}

export default Progress;
