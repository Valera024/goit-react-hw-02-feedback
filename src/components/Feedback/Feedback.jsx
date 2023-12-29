import { Component } from "react";
import styles from "./feedbakc.module.css"

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positive: 0
    }

    countTotalFeedback() {
        this.setState(prevState => ({
            total: prevState.good + prevState.neutral + prevState.bad
        }),
            () => this.countPositiveFeedbackPercentage()
        )
    }

    countPositiveFeedbackPercentage() {
        this.setState(prevState => {
            return { positive: Math.trunc((prevState.good / prevState.total) * 100) }
        })
    }

    handleClick(btnId) {
        this.setState(prevState => ({
            [btnId]: prevState[btnId] + 1
            }),
            () => this.countTotalFeedback()
        )
    }

    render() {
        const { good, neutral, bad, total, positive } = this.state;
        return (
            <>
                <h1>Test</h1>
                <ul className={styles.list}>
                    <li>
                        <button onClick={() => this.handleClick('good')} type="button" className={`${styles.btn} ${styles.good}`}>Good</button>
                    </li>
                    <li>
                        <button onClick={() => this.handleClick('neutral')} type="button" className={`${styles.btn} ${styles.neutral}`}>Neutral</button>
                    </li>
                    <li>
                        <button onClick={() => this.handleClick('bad')} type="button" className={`${styles.btn} ${styles.bad}`}>Bad</button>
                    </li>
                </ul>
                <h2>stat</h2>
                <ul>
                    <li>
                        <p className={styles.text}>Good: {good}</p>
                    </li>
                    <li>
                        <p className={styles.text}>Neutral: { neutral}</p>
                    </li>
                    <li>
                        <p className={styles.text}>Bad: {bad }</p>
                    </li>
                    <li>
                        <p className={styles.text}>Total: {total }</p>
                    </li>
                    <li>
                        <p className={styles.text}>Positive feedback: {positive}%</p>
                    </li>
                </ul>
            </>
        )
    }
}

export default Feedback