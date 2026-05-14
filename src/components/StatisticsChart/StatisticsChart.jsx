import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TICK_VALUES = [500, 1000, 5000, 10000, 15000];
const TICK_LABELS = ["$500", "$1k", "$5k", "$10k", "$15k"];

function normalize(val) {
  for (let i = 0; i < TICK_VALUES.length - 1; i++) {
    const lo = TICK_VALUES[i];
    const hi = TICK_VALUES[i + 1];
    if (val <= hi) {
      return i + (val - lo) / (hi - lo);
    }
  }
  return TICK_VALUES.length - 1;
}

const RAW_DATA = [11000, 3000, 13500, 7500, 4800, 15030, 7600, 9000, 15200, 12500, 7600, 13500];
const NORMALIZED_DATA = RAW_DATA.map(normalize);

const StatisticsChart = () => {
  const [currentYear, setCurrentYear] = useState(2024);
  const [activeIndex, setActiveIndex] = useState(5); 

  const series = [{ name: "Expense", data: NORMALIZED_DATA }];

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      background: "transparent",
      fontFamily: "Inter, sans-serif",
      events: {
        dataPointSelection: (_e, _ctx, config) => {
          setActiveIndex(config.dataPointIndex);
        },
      },
    },

    grid: {
      borderColor: "#EBEBEB",
      strokeDashArray: 0,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
      padding: { left: 8, right: 8, top: 0, bottom: 0 },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        borderRadiusApplication: "end",
        columnWidth: "25%",
        distributed: true,
      },
    },

    colors: NORMALIZED_DATA.map((_, i) =>
      i === activeIndex ? "#1F1F28" : "#43B8AF"
    ),

    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { show: false },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: NORMALIZED_DATA.map((_, i) =>
            i === activeIndex ? "#14171F" : "#14171F99"
          ),
          fontSize: "13px",
          fontWeight: 600,
        },
      },
    },

    yaxis: {
      min: 0,
      max: 5,
      tickAmount: 5,
      labels: {
        formatter: (val) => {
          const idx = Math.round(val);
          return idx >= 0 && idx < TICK_LABELS.length ? TICK_LABELS[idx] : "";
        },
        style: {
          colors: "#14171F99",
          fontSize: "12px",
          fontWeight: 600,
        },
      },
    },

    tooltip: {
      enabled: true,
      custom: ({ dataPointIndex }) => {
        const value = RAW_DATA[dataPointIndex];
        return `
          <div style="
            background: #1C1E23;
            color: #FFFFFF;
            padding:9px 15px;
            border-radius:12px; 
          ">
            <div style="font-size:10px;margin-bottom:3px;font-weight:500;">Expense</div>
            <div style="font-size:14px;font-weight:400;">$${value.toLocaleString()}</div>
          </div>
        `;
      },
    },

    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },

    responsive: [
      {
        breakpoint: 768,
        options: { plotOptions: { bar: { columnWidth: "55%" } } },
      },
    ],
  };

  return (
    <div
      className="w-full bg-white rounded-xl p-6 shadow-lg">
      <style>{`
        .apexcharts-xaxis-texts-g text:nth-child(${activeIndex + 1}) {
          fill: #1F1F28 !important;
          font-weight: 700 !important;
        }
      `}</style>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-semibold text-[#1A202C]">
          Spending Statistics
        </h2>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <button
            onClick={() => setCurrentYear((y) => y - 1)}
            className="w-6 h-6 bg-[#F6F7F9] cursor-pointer flex items-center justify-center rounded-md"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="text-sm text-[#1A202C] font-semibold text-center">
            {currentYear}
          </span>

          <button
            onClick={() => setCurrentYear((y) => y + 1)}
            className="w-6 h-6 bg-[#F6F7F9] cursor-pointer flex items-center justify-center rounded-md"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="h-60">
        <ReactApexChart
          key={activeIndex}
          options={options}
          series={series}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
};

export default StatisticsChart;