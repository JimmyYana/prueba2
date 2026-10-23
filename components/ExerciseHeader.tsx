import ExerciseTitle from "./ExerciseTitle";
import ExerciseCounter from "./ExerciseCounter";
import "./exerciseHeader.css";

export default function ExerciseHeader() {
  return (
    <div className="exercise-header">
      <ExerciseTitle />
      <ExerciseCounter />
    </div>
  );
}