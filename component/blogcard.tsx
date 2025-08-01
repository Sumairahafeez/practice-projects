import React from 'react';
import styled from 'styled-components';
type Props = {
    innerText?: string;
};
const Card = ({ innerText }: Props) => {
  return (
    <StyledWrapper>
      <div className="card shadow">
        {innerText}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   width: 190px;
   height: 254px;
   background: white;
   border-radius: 10px;
   transition: border-radius 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .shadow {
   box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1),
               0 0  0 2px rgb(190, 190, 190),
               0.3em 0.3em 1em rgba(0,0,0,0.3);
  }`;

export default Card;
