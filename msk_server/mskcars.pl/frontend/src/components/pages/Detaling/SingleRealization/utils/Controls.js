import { useControls } from "react-zoom-pan-pinch";
import style from "./Control.module.scss";
import { FaSearchMinus, FaSearchPlus, FaTimes } from "react-icons/fa";
export const Controls = ({ closeFunction }) => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className={style.wrapper}>
      <button onClick={() => zoomIn()}>
        <FaSearchPlus />
      </button>
      <button onClick={() => zoomOut()}>
        <FaSearchMinus />
      </button>
      <button onClick={() => resetTransform()}>Reset</button>
      <button onClick={() => closeFunction()}>
        <FaTimes />
      </button>
    </div>
  );
};
