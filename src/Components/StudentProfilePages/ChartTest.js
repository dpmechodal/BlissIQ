import React, { useState } from "react";
import Chart from "react-apexcharts"; // Renamed Chart to ChartComponent;
import "./StudentProfilePages.css";

function ChartTest() {
  const [chartState] = useState({
    series: [75],
    options: {
      chart: {
        height: 280,
        type: "radialBar",
        toolbar: {
          show: true,
        },
      },
      labels: ["First class"],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            
            background: "transparent",
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.5,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.7,
            },
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              formatter: function (val) {
                return `${parseInt(val)}%`; // Add "%" symbol here
              },
              color: "#111",
              fontSize: "36px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "#FED06E",
          shadeIntensity: 1,
          gradientToColors: ["#FED06E"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [100, 0.9],
        },
      },
      stroke: {
        lineCap: "round",
      },
    },
  });

  return (
    <>
      <div id="chart">
        <Chart
          series={chartState.series}
          options={chartState.options}
          type="radialBar"
          height={280}
        />
      </div>
    </>
  );
}

export default ChartTest;
