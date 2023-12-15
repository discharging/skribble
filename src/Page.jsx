import { HexColorPicker } from "react-colorful";
import { useDraw } from "../src/hooks/useDraw";
import { useState } from "react";
export default function Page() {
  const [color, setColor] = useState("#000");
  const { canvasRef, onMouseDown, mouseUpHandler, clear } = useDraw(drawLine);
  function drawLine({ ctx, currentPoint, prevPoint }) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = 5;
    let startPoint = prevPoint ?? currentPoint;

    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();
    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center ">
      <div className="flex flex-col gap-10 pr-10">
        <HexColorPicker color={color} onChange={setColor} />
        <button
          type="button"
          onClick={clear}
          className="p-2 rounded-md border border-black"
        >
          Clear Canvas
        </button>
      </div>
      <canvas
        onMouseDown={onMouseDown}
        onMouseLeave={mouseUpHandler}
        ref={canvasRef}
        width={750}
        height={450}
        className="border border-black rounded-md"
      ></canvas>
    </div>
  );
}
