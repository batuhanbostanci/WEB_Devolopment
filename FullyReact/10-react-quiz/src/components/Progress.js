function Progress({ index, numQuestion, points, maxPossiblePoints, answer }) {
  return (
    <div>
      <header className="progress">
        <progress
          max={numQuestion}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Question <strong>{index + 1}</strong> / {numQuestion}
        </p>

        <p>
          <strong>{points}</strong> / {maxPossiblePoints} Points
        </p>
      </header>
    </div>
  );
}

export default Progress;
