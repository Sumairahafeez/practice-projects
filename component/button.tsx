import React from 'react';
import styled from 'styled-components';
type Props = {
    onClick?: () => void;
    innerText?: string;
    };
const Button = ({ onClick,innerText }: Props) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <div className="blob1" />
        <div className="blob2" />
        <div className="inner">{innerText}</div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: 1.4rem;
    border-radius: 16px;
    border: none;
    width: 100%;
    height: 50%;
    padding: 2px;
    background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
    position: relative;
  }
  .button::after {
    content: "";
    position: absolute;
    width: 55%;
    height: 50%;
    border-radius: 120px;
    top: 0;
    right: 0;
    box-shadow: 0 0 20px #ffffff38;
    z-index: -1;
  }

  .blob1 {
    position: absolute;
    width: 60px;
    height: 80%;
    border-radius: 16px;
    bottom: 0;
    left: 0;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #3fe9ff,
      #0000ff80,
      transparent
    );
    box-shadow: -10px 10px 30px #0051ff2d;
  }

  .inner {
    padding: 14px 25px;
    border-radius: 14px;
    color: #fff;
    z-index: 3;
    position: relative;
    background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
  }
  .inner::before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 14px;
    background: radial-gradient(
      circle 60px at 0% 100%,
      #00e1ff1a,
      #0000ff11,
      transparent
    );
    position: absolute;
  }`;

export default Button;
