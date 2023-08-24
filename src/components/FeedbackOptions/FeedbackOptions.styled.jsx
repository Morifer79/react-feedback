import styled from '@emotion/styled';

export const ButtonsBar = styled.div`
  display: flex;
  gap: 30px;
`;

export const Button = styled.button`
  padding: 20px 0;
  margin-top: 50px;

  cursor: pointer;
  width: 200px;
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  border-radius: 8px;
  background: none;
  color: rgba(255, 255, 255, 0.63);
  box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.32),
    -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
  transition: background 250ms linear;

  :active {
    box-shadow: inset 7px 6px 9px 0px rgba(0, 0, 0, 0.32),
      inset -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
    color: rgba(255, 255, 255, 0.24);
  }

  :nth-of-type(1):hover {
    background: #00ff00;
  }

  :nth-of-type(2):hover {
    background: #ff8c00;
  }

  :nth-of-type(3):hover {
    background: #ff0000;
  }
`;
