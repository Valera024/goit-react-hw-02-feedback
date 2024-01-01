import { Component } from "react";
import styles from "./feedback-options.module.css"

class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul className={styles.list}>
                {options.map((option) => (
                    <li key={option} className={styles.element}>
                        <button onClick={() => onLeaveFeedback(option)} type="button" className={`${styles.btn} ${styles[option]}`}>
                            {option.charAt(0).toUpperCase() + option.slice(1) }
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}

export default FeedbackOptions