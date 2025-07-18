"use client";

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import styles from "./costComparisonChart.module.scss";

const data = [
  { quarter: "Q1", inHouse: 312500, outsource: 171875, pv: 20000, uv: 24000 },
  { quarter: "Q2", inHouse: 625000, outsource: 343750, pv: 60000, uv: 330000 },
  { quarter: "Q3", inHouse: 937500, outsource: 515625, pv: 85000, uv: 450000 },
  { quarter: "Q4", inHouse: 1250000, outsource: 687500, pv: 550000, uv: 520000 },
  { quarter: "Q5", inHouse: 1562500, outsource: 859375, pv: 962500, uv: 620000 },
  { quarter: "Q6", inHouse: 1875000, outsource: 1031250, pv: 1100000, uv: 720000 },
  { quarter: "Q7", inHouse: 3087500, outsource: 1803125, pv: 800000, uv: 660000 },
  { quarter: "Q8", inHouse: 3600000, outsource: 2075000, pv: 1200000, uv: 1000000 },
];

export default function CostComparisonChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        formatter: (params: any) => {
          return params.map((p: any) => `${p.seriesName}: $${p.value.toLocaleString()}`).join("<br/>");
        },
      },
      // legend: { data: ['In-House', 'Outsource'] },
      grid: { top: 80, left: 80, right: 40, bottom: 50 },
      xAxis: {
        type: "category",
        data: data.map((d) => d.quarter),
        axisLine: { lineStyle: { color: "#aaa" } },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 2500000,
        interval: 500000,
        axisLabel: {
          formatter: function (value: number) {
            // Convert raw number (like 500000) to 500.000, 1000.000, etc.
            return `$${(value / 1000).toFixed(3)}`;
          },
        },
      },
      // yAxis: {
      //     type: 'value',
      //     axisLabel: {
      //         formatter: (value: number) => `$${(value / 1000000).toFixed(1)}M`,
      //     },
      //     min: 0,
      //     max: 4000000,
      //     interval: 500000
      // },
      series: [
        {
          name: "Outsource",
          type: "bar",
          stack: "total",
          data: data.map((d) => d.outsource),
          itemStyle: { color: "#ccc9c9" },
          emphasis: { itemStyle: { opacity: 1 } },
        },
        {
          name: "Outsource PV",
          type: "bar",
          stack: "total",
          data: data.map((d) => d.pv),
          itemStyle: { color: "#D9D9D9" },
          emphasis: { itemStyle: { opacity: 1 } },
        },
        {
          name: "In-House",
          type: "bar",
          stack: "total1",
          data: data.map((d) => d.inHouse),
          itemStyle: { color: "#F90500" },
          emphasis: { itemStyle: { opacity: 1 } },
        },
        {
          name: "In-House UV",
          type: "bar",
          stack: "total1",
          data: data.map((d) => d.uv),
          itemStyle: { color: "#FA8787" },
          emphasis: { itemStyle: { opacity: 1 } },
        },
      ],
    };

    chart.setOption(option);
    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.leftCard}`}>
        <h6 className={styles.head}>Out Source Development</h6>
        <p className={styles.heading_para}>Offshore Team</p>
        <hr />
        <p className={styles.left_space_para}>
          Senior Developers: <strong>10</strong>
        </p>
        <p className={styles.left_space_para}>
          Cost Per Month: <strong>$55,000*</strong>
        </p>
      </div>

      <div className={`${styles.card} ${styles.centerCard}`}>
        <h6 className={styles.head}>In-House Development</h6>
        <p className={`${styles.right_para} ${styles.heading_para}`}>United States</p>
        <hr />
        <p className={styles.left_space_para}>
          Senior Developers: <strong>10</strong>
        </p>
        <p className={styles.left_space_para}>
          Cost Per Month: <strong>$100,000*</strong>
        </p>
      </div>

      <div className={`${styles.card} ${styles.rightCard}`}>
        <h6 className="fw-bold">Cost per 2 Years</h6>
        <p style={{ color: "white" }}>
          In-House Development: <strong>$2,400,000</strong>
        </p>
        <p style={{ color: "white" }} className={styles.right_space_para}>
          Out Source Team: <strong>$1,320,000</strong>
        </p>
        <hr style={{ border: "1px solid white" }} />
        <p style={{ color: "white" }} className={styles.right_space_para}>
          Savings: <strong className={styles.savings}>$1,080,000</strong>
        </p>
      </div>

      <div ref={chartRef} style={{ width: "100%", height: 400 }} />
    </div>
  );
}
