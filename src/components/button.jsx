/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: #e64a19;
  }
`;

const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
