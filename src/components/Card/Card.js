import { useRef } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import style from './Card.module.css';

export const Card = ({ title, description }) => {
  const ref = useRef(null);
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);
  const [rX, setRX] = useState(0);
  const [rY, setRY] = useState(0);
  const [tX, setTX] = useState(0);
  const [tY, setTY] = useState(0);

  const getPosition = () => {
    const x = ref.current.offsetLeft;
    setX(x);
    const y = ref.current.offsetTop;
    setY(y);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    setRX((mouseX / width) * 30);
    setRY((mouseY / height) * -30);
    setTX((mouseX / width) * -40);
    setTY((mouseY / height) * -40);
  }, [mouseX, width, mouseY, height]);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  const handleMouseMove = (e) => {
    setMouseX(e.clientX - x - width / 2);
    setMouseY(e.clientY - y - height / 2);
  };

  const handleMouseEnter = () => {
    clearTimeout(mouseLeaveDelay);
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000)
    );
  };

  return (
    <div
      className={style.cardWrap}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}>
      <div
        style={{
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
        }}
        className={style.card}>
        <div
          style={{
            transform: `translateX(${tX}px) translateY(${tY}px)`
          }}
          className={style.cardBg}></div>
        <div className={style.cardInfo}>
          <h1 slot="header">{title}</h1>
          <p slot="content">{description}</p>
        </div>
      </div>
    </div>
  );
};
