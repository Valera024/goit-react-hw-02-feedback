import {  Children, Component } from "react";
import styles from "./section.module.css"

class Section extends Component {
    render() {
        const child = this.props.children
        const { title } = this.props;
        return (
            <section className={styles.section}>
                <h1>{title}</h1>
                {child}
            </section>
        )
    }
}

export default Section