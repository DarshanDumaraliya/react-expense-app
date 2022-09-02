import React from "react";
import styles from './chart.module.css'
import ChartBar from './chartBar'

const Chart = (props) => {

    const dataPointValue = props.dataPoints.map(allValue => allValue.value)
    const totalMaximum = Math.max(...dataPointValue);

    return <div className={styles.chart}>
        {props.dataPoints.map((dataPoint) => 
            <ChartBar
                key={dataPoint.label} 
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label}
            />
        )}
    </div>
}

export default Chart;