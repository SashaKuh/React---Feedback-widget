import { StyledList, StyledListItem } from './Statistics.styled';

export const Statistics = ({ total, positivePercentage, good, neutral, bad }) => {
    return (
      <StyledList>
        <StyledListItem>Good: {good}</StyledListItem>
        <StyledListItem>Neutral: {neutral}</StyledListItem>
        <StyledListItem>Bad: {bad}</StyledListItem>
        <StyledListItem>Total: {total}</StyledListItem>
        <StyledListItem>Positive feedback: {positivePercentage}%</StyledListItem>
      </StyledList>
    );
  };
  
