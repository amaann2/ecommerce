import React from "react";
import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>Trusted by 1000+ companies</h3>
        <div className="brand-section-slider">
          <div className="first">
          <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands"
            />
          </div>
          <div className="second">
          <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />
          </div>
          <div className="third">
          <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
            />
          </div>
          <div className="fourth">
          <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
            />
          </div>
          <div className="fifth">
          <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  
  h3{
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img{
    min-width: 5rem;
    height: 10rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  
  @media (max-width:768px) {
    .brand-section-slider {
      display: grid;
      grid-template-columns: 1fr 1fr ;
    }
  }
`;

export default Trusted;
