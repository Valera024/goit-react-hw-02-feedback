import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positive: 0,
      btnClick: false
    }

    countTotalFeedback = () => {
        this.setState(prevState => ({
            total: prevState.good + prevState.neutral + prevState.bad
        }),
            () => this.countPositiveFeedbackPercentage()
        )
    }

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => {
            return { positive: Math.trunc((prevState.good / prevState.total) * 100) }
        })
    }

    handleClick = (btnId) => {
        this.setState(prevState => ({
            btnClick: true,
            [btnId]: prevState[btnId] + 1
            }),
            () => this.countTotalFeedback()
        )
  }
  
  render() {
    const { good, neutral, bad, total, positive, btnClick } = this.state;
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.handleClick} />
                </Section>
                <Section title="Statistics">
                    {btnClick ? (
                        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positive} />
                        ) : (
                        <Notification message="There is no feedback"/>
                    )}
                </Section>
            </>
        )
  }
}

export default App