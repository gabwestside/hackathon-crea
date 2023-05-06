import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.primaryColor};
`;

const App: React.FC = () => {
  return (
    <div>
      <Title>Hello World!</Title>
    </div>
  );
};

export default App;