import React, { useEffect, useRef } from "react";
import GraphCss from "./GraphsCss.module.css";
import { useDispatch, useSelector } from "react-redux";
import { lineGraphData } from "../../feature/statBoard/statSlice";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement
);

const LineGraph = () => {
  const graphData = useSelector((state) => state.stats.lineGraph);
  const chartRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(lineGraphData());
  }, [dispatch]);

  useEffect(() => {
    if (chartRef.current && graphData) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const dataset = months.map((month) => {
        const dataPoint = graphData.find((point) => point.x === month);
        return dataPoint ? dataPoint.y || 0 : 0;
      });

      const minY = 0;
      const maxY =
        Math.ceil(Math.max(...graphData.map((point) => point.y)) / 5) * 5;

      chartRef.current.chart = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: months,
          datasets: [
            {
              label: "Line Chart",
              data: dataset,
              borderColor: "rgb(75, 192, 192)",
              borderWidth: 2,
              fill: false,
              spanGaps: true,
              cubicInterpolationMode: "monotone",
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "category",
              labels: months,
            },
            y: {
              type: "linear",
              position: "left",
              min: minY,
              max: maxY,
              ticks: {
                stepSize: 5,
                beginAtZero: true,
              },
            },
          },
        },
      });
    }
  }, [graphData]);

  return (
    <div className={GraphCss.line_graphs}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineGraph;
