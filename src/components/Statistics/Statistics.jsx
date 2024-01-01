import { Component } from "react";
import styles from "./statistics.module.css"

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            < ul className={styles.list}>
                <li>
                    <p className={styles.text}>Good: {good}</p>
                </li>
                <li>
                    <p className={styles.text}>Neutral: {neutral}</p>
                </li>
                <li>
                    <p className={styles.text}>Bad: {bad}</p>
                </li>
                <li>
                    <p className={styles.text}>Total: {total}</p>
                </li>
                <li>
                    <p className={styles.text}>Positive feedback: {positivePercentage || 0}%</p>
                </li>
            </ul>
        )
    }
}

export default Statistics