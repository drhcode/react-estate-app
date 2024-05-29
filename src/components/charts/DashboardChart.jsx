import React, { useEffect, useRef, useState } from "react";
import "./doughnutChart.scss";

const DoughnutChart = ({ data, dataKey, labelKey }) => {
  const canvasRef = useRef(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: "",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const total = data.length;
    const counts = data.reduce((acc, item) => {
      const key = item[dataKey];
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const chartData = Object.values(counts);
    const labels = Object.keys(counts);
    const colors = [
      "#4bc0c0",
      "#ff9f40",
      "#ff6384",
      "#36a2eb",
      "#9966ff",
      "#ffcd56",
    ];
    const usedColors = colors.slice(0, chartData.length);

    let startAngle = 0;
    const slices = [];

    chartData.forEach((count, index) => {
      const sliceAngle = (count / total) * 2 * Math.PI;
      slices.push({
        startAngle,
        endAngle: startAngle + sliceAngle,
        color: usedColors[index],
        label: labels[index],
        items: data.filter((item) => item[dataKey] === labels[index]),
      });
      context.beginPath();
      context.fillStyle = usedColors[index];
      context.moveTo(150, 75); // Center of the doughnut
      context.arc(150, 75, 70, startAngle, startAngle + sliceAngle);
      context.closePath();
      context.fill();
      startAngle += sliceAngle;
    });

    // Drawing inner circle for the doughnut effect
    context.beginPath();
    context.fillStyle = "#fff";
    context.moveTo(150, 75); // Center of the doughnut
    context.arc(150, 75, 35, 0, 2 * Math.PI);
    context.closePath();
    context.fill();

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const angle = Math.atan2(y - 75, x - 150);
      let adjustedAngle = angle < -Math.PI / 2 ? angle + 2 * Math.PI : angle;
      adjustedAngle =
        adjustedAngle < -Math.PI ? adjustedAngle + 2 * Math.PI : adjustedAngle;
      const distanceFromCenter = Math.hypot(x - 150, y - 75);

      const hoveredSlice = slices.find(
        (slice) =>
          adjustedAngle >= slice.startAngle && adjustedAngle <= slice.endAngle
      );
      if (
        hoveredSlice &&
        distanceFromCenter <= 70 &&
        distanceFromCenter >= 35
      ) {
        setTooltip({
          visible: true,
          x: x + 10, // Adjust tooltip position
          y: y + 10, // Adjust tooltip position
          content: `${hoveredSlice.label}: ${hoveredSlice.items
            .map((item) => item[labelKey])
            .join(", ")}`,
        });
      } else {
        setTooltip({ visible: false, x: 0, y: 0, content: "" });
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [data, dataKey, labelKey]);

  // Generate legend items
  const counts = data.reduce((acc, item) => {
    const key = item[dataKey];
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(counts);
  const chartData = Object.values(counts);
  const colors = [
    "#4bc0c0",
    "#ff9f40",
    "#ff6384",
    "#36a2eb",
    "#9966ff",
    "#ffcd56",
  ];
  const usedColors = colors.slice(0, chartData.length);

  return (
    <div className="chart-container">
      <canvas ref={canvasRef} width="300" height="150"></canvas>
      {tooltip.visible && (
        <div className="tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
          {tooltip.content}
        </div>
      )}
      <div className="legend">
        {labels.map((label, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: usedColors[index] }}
            ></span>
            {label} ({counts[label]})
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
