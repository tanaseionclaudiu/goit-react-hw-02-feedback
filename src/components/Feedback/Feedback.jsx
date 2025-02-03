import React from 'react';
import { ButtonsWrapper, Button } from './Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrapper>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </ButtonsWrapper>
  );
};