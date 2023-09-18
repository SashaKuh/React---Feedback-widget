import {List, Item, Btn} from './BtnFeedback.styled';

export const BtnFeedback = ({ feedbackTypes, handleFeedback }) => {

  return (
    <>
      <List>
      {feedbackTypes.map(type => (
        <Item key={type}>
          <Btn onClick={() => handleFeedback(type)}>
            {type}
          </Btn>
        </Item>
      ))}
    </List>
    </>
  );
};

