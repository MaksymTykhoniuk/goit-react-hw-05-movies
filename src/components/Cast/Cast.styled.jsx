import styled from '@emotion/styled';

export const CastWrapper = styled.ul`
  /* display: flex;
  gap: 5px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 5px;
  grid-auto-flow: row;
  grid-template-areas: '. . . . . . . .';
`;

export const CastItem = styled.li`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  /* min-width: calc((1200px) / 9); */
  /* min-width: calc((100% - 40px) / 9); */
  /* flex-basis: calc((100% - 40px) / 9); */
  /* flex-grow: 0;
  flex-shrink: 0; */
`;
