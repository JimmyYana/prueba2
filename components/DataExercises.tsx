import ExerciseHeader from "./ExerciseHeader";
import ExerciseCard from "./ExerciseCard";
import "./dataExercises.css";

export default function DataExercises() {
  return (
    <div className="data-exercises">
      <ExerciseHeader />

      <div className="exercise-list">
        <ExerciseCard name="Puxada frontal" image="/puxada-frontal.jpg" />
        <ExerciseCard name="Remada curvada" image="/remada-curvada.jpg" />
        <ExerciseCard name="Remada unilateral" image="/remada-unilateral.jpg" />
        <ExerciseCard name="Levantamento terra" image="/levantamento-terra.jpg" />
      </div>
    </div>
  );
}