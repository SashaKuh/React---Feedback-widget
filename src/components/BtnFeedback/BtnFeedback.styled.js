import styled from 'styled-components';

const getColorByType = (type) => {
  switch (type) {
    case 'good':
      return '#4caf50';
    case 'neutral':
      return '#ff9800';
    case 'bad':
      return '#f44336';
    default:
      return '#000';
  }
};

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-right: 20px;
`;

export const Btn = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, .1) 0 6px 20px;
  box-sizing: border-box;
  color: #121212;
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s, -webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: ${props => getColorByType(props.type)};
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  /* Замість цього рядка */
  text-transform: capitalize;
  
  &:hover {
    background-color: ${props => (props.type === 'good' ? '#45a049' : (props.type === 'neutral' ? '#ffab40' : '#e57373'))};
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }
`;

