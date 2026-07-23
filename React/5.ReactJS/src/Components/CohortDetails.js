import React from "react";
import styles from "../CohortDetails.module.css";

function CohortDetails(props) {

    return (
        <div className={styles.box}>

            <h3 style={{
                color: props.status === "ongoing" ? "green" : "blue"
            }}>
                {props.name}
            </h3>

            <dl>
                <dt>Cohort Name:</dt>
                <dd>{props.name}</dd>

                <dt>Status:</dt>
                <dd>{props.status}</dd>

                <dt>Start Date:</dt>
                <dd>{props.startDate}</dd>

                <dt>End Date:</dt>
                <dd>{props.endDate}</dd>
            </dl>

        </div>
    );
}

export default CohortDetails;
