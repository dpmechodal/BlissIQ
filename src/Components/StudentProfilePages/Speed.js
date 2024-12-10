import React, { Component } from "react";
import GaugeChart from "react-gauge-chart";

export default class Speed extends Component {
  render() {
    return (
      <div>
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={90} // Ensures fine granularity
          colors={["red", "white"]} // Red for the filled portion, white for the rest
          arcWidth={0.1}
          percent={0.37} // 37% filled
          textColor={"black"}
          arcPadding={0} // Removes padding between segments for a clean look
        />
      </div>
    );
  }
}
