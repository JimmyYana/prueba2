import "./exerciseImage.css";

export default function ExerciseImage({ src }: { src: string }) {
  return <img className="exercise-image" src={src} alt="ejercicio" />;
}