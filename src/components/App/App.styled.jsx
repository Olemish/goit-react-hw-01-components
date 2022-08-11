import styled from '@emotion/styled';

const randColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};
export const Item = styled.li`
  background-color: ${randColor};
  display: flex;
  flex-direction: column;
  margin-left: 0;
  text-align: center;
  border: 1px solid #bbb;
  padding: 10px;
`;
