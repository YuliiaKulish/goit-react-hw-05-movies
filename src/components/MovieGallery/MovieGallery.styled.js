import styled from 'styled-components';

export const MovieList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 16px;
  margin: 0px auto;
  padding: 0px;
  list-style: none;
`;
