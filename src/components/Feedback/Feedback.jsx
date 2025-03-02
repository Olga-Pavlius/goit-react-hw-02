import React from "react";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={styles.feedbackContainer}>
      <h2 className={styles.feedbackTitle}>Feedback Statistics</h2>
      <p className={styles.feedbackItem}>Good: {feedback.good}</p>
      <p className={styles.feedbackItem}>Neutral: {feedback.neutral}</p>
      <p className={styles.feedbackItem}>Bad: {feedback.bad}</p>
      <p className={styles.feedbackItem}>Total Feedback: {totalFeedback}</p>
      <p className={styles.feedbackItem}>Positive Feedback: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;