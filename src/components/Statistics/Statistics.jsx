import { FeedbackList, FeedbackListItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <FeedbackList>
      <FeedbackListItem>Good: {good}</FeedbackListItem>
      <FeedbackListItem>Neutral: {neutral}</FeedbackListItem>
      <FeedbackListItem>Bad: {bad}</FeedbackListItem>
      <FeedbackListItem>Total: {total()}</FeedbackListItem>
      <FeedbackListItem>
        Positive Feedback: {positivePercentage()}%
      </FeedbackListItem>
    </FeedbackList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
