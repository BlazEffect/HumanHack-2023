import React, { useCallback, useEffect, useRef, useState } from 'react';

const styles = {
    canvas: {
      width: "100vw",
      height: "100vh",
      cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✍️</text></svg>") 5 25,auto`
    }
  };
export default function DrawingArea ()  {
    const [customWidth, setCustomWidth] = useState(window.screen.width);
    useEffect(() => {
        window.addEventListener('resize', ()=> {
            setCustomWidth(window.screen.width)
        });
        
        const canvas = document.querySelector('#sketchpad')
        let context = canvas.getContext('2d');
        let isIdle = true;
        function drawstart(event) {
          context.beginPath();
          context.moveTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
          isIdle = false;
        }
        function drawmove(event) {
          if (isIdle) return;
          context.lineTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
          context.stroke();
        }
        function drawend(event) {
          if (isIdle) return;
          drawmove(event);
          isIdle = true;
        }
        function touchstart(event) { drawstart(event.touches[0]) }
        function touchmove(event) { drawmove(event.touches[0]); event.preventDefault(); }
        function touchend(event) { drawend(event.changedTouches[0]) }
        canvas.addEventListener('touchstart', touchstart, false);
        canvas.addEventListener('touchmove', touchmove, false);
        canvas.addEventListener('touchend', touchend, false);
        canvas.addEventListener('mousedown', drawstart, false);
        canvas.addEventListener('mousemove', drawmove, false);
        canvas.addEventListener('mouseup', drawend, false);
    });
  
    return <canvas id='sketchpad' className='border-black max-w-full' width={customWidth} height='400'/>;
};
