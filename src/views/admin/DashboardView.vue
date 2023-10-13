<script setup>
import VueApexCharts from "vue3-apexcharts";
import Adminlayot from "@/layout/Adminlayot.vue";
const Pricechart = {
  options: {
    chart: {
      id: "vuechart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};
const Categorychart = {
  options: {},
  series: [44, 55, 41, 17, 15],
};
</script>
<template>
  <Adminlayot>
    <div class="capitalize text-3xl my-4">dashboard</div>

    <div class="stats shadow w-full mb-4">
      <div class="stat">
        <div class="stat-figure text-maire">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>
        </div>
        <div class="stat-title capitalize">order</div>
        <div class="stat-value">31K</div>
      </div>

      <div class="stat text-maire">
        <div class="stat-figure text-maire">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <div class="stat-title capitalize">products</div>
        <div class="stat-value">4,200</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-maire">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
        <div class="stat-title capitalize">user</div>
        <div class="stat-value">1,200</div>
      </div>
    </div>
    <div>
      <div class="flex gap-2 mx-auto">
        <div class="flex-1 shadow-xl p-8 rounded-xl">
          <apexchart
            width="500"
            type="bar"
            :options="Pricechart.options"
            :series="Pricechart.series"
          ></apexchart>
        </div>
        <div class="flex-1 shadow-xl p-8 rounded-xl">
          <apexchart
          width="500"
            type="donut"
            :options="Categorychart.options"
            :series="Categorychart.series"
          ></apexchart>
        </div>
      </div>
    </div>
  </Adminlayot>
</template>
