import ExerciseImage from "./ExerciseImage";
import ExerciseName from "./ExerciseName";
import ExerciseDetail from "./ExerciseDetail";
import ArrowIcon from "./ArrowIcon";
import "./exerciseCard.css";

export default function ExerciseCard({ name, image }: { name: string; image: string }) {
  return (
    <div className="exercise-card">
      <ExerciseImage src={image} />
      <div className="exercise-text">
        <ExerciseName name={name} />
        <ExerciseDetail />
      </div>
      <ArrowIcon />
    </div>
  );
}