import React from 'react';
import styled from 'styled-components';
type props = {
  title: string;
  description: string;
  price: number;
};
const Card = ({ title, description, price }: props) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-img"><div className="img" /></div>
        <div className="card-title">{title.length>20 ? title.slice(0, 10) + '...' : title}</div>
        <div className="card-subtitle">{description.length > 70 ? description.slice(0, 70) + '...' : description}</div>
        <hr className="card-divider" />
        <div className="card-footer">
          <div className="card-price"><span>$</span> {price.toFixed(2)}</div>
          <button className="card-btn" onClick={() => alert(`Added ${title} to cart`)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" /><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" /><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" /></svg>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* before adding the img to the div with the 
  "card-img" class, remove css styles 
  .card-img .img::before and .card-img .img::after,
  then set the desired styles for .card-img. */
  .card {
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --main-color: #323232;
    --main-focus: #2d8cf0;
    width: 230px;
    height: 300px;
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    gap: 10px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .card:last-child {
    justify-content: flex-end;
  }

  .card-img {
      /* clear and add new css */
    transition: all 0.5s;
    display: flex;
    justify-content: center;
  }

  .card-img .img {
   /* delete */
    transform: scale(1);
    position: relative;
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-top-left-radius: 80px 50px;
    border-top-right-radius: 80px 50px;
    border: 2px solid black;
    background-color: #228b22;
    background-image: linear-gradient(to top,transparent 10px,rgba(0,0,0,0.3) 10px,rgba(0,0,0,0.3) 13px,transparent 13px);
  }

  .card-img .img::before {
   /* delete */
    content: '';
    position: absolute;
    width: 65px;
    height: 110px;
    margin-left: -32.5px;
    left: 50%;
    bottom: -4px;
    background-repeat: no-repeat;
    background-image: radial-gradient(ellipse at center,rgba(0,0,0,0.7) 30%,transparent 30%),linear-gradient(to top,transparent 17px,rgba(0,0,0,0.3) 17px,rgba(0,0,0,0.3) 20px,transparent 20px),linear-gradient(to right,black 2px,transparent 2px),linear-gradient(to left,black 2px,transparent 2px),linear-gradient(to top,black 2px,#228b22 2px);
    background-size: 60% 10%,100% 100%,100% 65%,100% 65%,100% 50%;
    background-position: center 3px,center bottom,center bottom,center bottom,center bottom;
    border-radius: 0 0 4px 4px;
    z-index: 2;
  }

  .card-img .img::after {
   /* delete */
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    margin-left: -14px;
    left: 50%;
    top: -13px;
    background-repeat: no-repeat;
    background-image: linear-gradient(80deg,#ffc0cb 45%,transparent 45%),linear-gradient(-175deg,#ffc0cb 45%,transparent 45%),linear-gradient(80deg,rgba(0,0,0,0.2) 51%,rgba(0,0,0,0) 51%),linear-gradient(-175deg,rgba(0,0,0,0.2) 51%,rgba(0,0,0,0) 51%),radial-gradient(circle at center,#ffa6b6 45%,rgba(0,0,0,0.2) 45%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0) 52%),linear-gradient(45deg,rgba(0,0,0,0) 48%,rgba(0,0,0,0.2) 48%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0) 52%),linear-gradient(65deg,rgba(0,0,0,0) 48%,rgba(0,0,0,0.2) 48%,rgba(0,0,0,0.2) 52%,rgba(0,0,0,0) 52%),linear-gradient(22deg,rgba(0,0,0,0) 48%,rgba(0,0,0,0.2) 48%,rgba(0,0,0,0.2) 54%,rgba(0,0,0,0) 54%);
    background-size: 100% 100%,100% 100%,100% 100%,100% 100%,100% 100%,100% 75%,100% 95%,100% 60%;
    background-position: center center;
    border-top-left-radius: 120px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 70px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transform: rotate(45deg);
    z-index: 1;
  }

  .card-title {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: var(--font-color);
  }

  .card-subtitle {
    font-size: 14px;
    font-weight: 400;
    color: var(--font-color-sub);
  }

  .card-divider {
    width: 100%;
    border: 1px solid var(--main-color);
    border-radius: 50px;
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .card-price {
    font-size: 20px;
    font-weight: 500;
    color: var(--font-color);
  }

  .card-price span {
    font-size: 20px;
    font-weight: 500;
    color: var(--font-color-sub);
  }

  .card-btn {
    height: 35px;
    background: var(--bg-color);
    border: 2px solid var(--main-color);
    border-radius: 5px;
    padding: 0 15px;
    transition: all 0.3s;
  }

  .card-btn svg {
    width: 100%;
    height: 100%;
    fill: var(--main-color);
    transition: all 0.3s;
  }

  .card-img:hover {
    transform: translateY(-3px);
  }

  .card-btn:hover {
    border: 2px solid var(--main-focus);
  }

  .card-btn:hover svg {
    fill: var(--main-focus);
  }

  .card-btn:active {
    transform: translateY(3px);
  }`;

export default Card;
