import styled from 'styled-components';

export const PopoverBody = styled.div`
  padding: 10px;
  max-height: 278px;
  overflow: auto;
  user-select: none;
  -webkit-user-drag: none;

  & table {
    min-width: 700px;
  }

  & table thead {
    text-align: left;
    text-transform: uppercase;
  }
`;

export const PopoverQuestion = styled.div`
  margin-bottom: 10px;
`;

export const PopoverHintTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;

export const PopoverHintText = styled.div`
  font-style: normal;
`;
