import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="text-sm font-extrabold mt-10 text-white">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
