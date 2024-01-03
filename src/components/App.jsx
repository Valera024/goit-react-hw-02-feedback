import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good * 100) / this.countTotalFeedback())
    }

    handleClick = (btnId) => {
        this.setState(prevState => ({
            [btnId]: prevState[btnId] + 1
            })
        )
  }
  
  render() {
    const { good, neutral, bad } = this.state;
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.handleClick} />
                </Section>
                <Section title="Statistics">
                    {this.countTotalFeedback() > 0  ? (
                        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
                        ) : (
                            <Notification message="There is no feedback"/>
                    )}
                </Section>
            </>
        )
  }
}

export default App