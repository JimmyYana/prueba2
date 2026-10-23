import "./exerciseName.css";

export default function ExerciseName({ name }: { name: string }) {
  return <h2 className="exercise-name">{name}</h2>;
}