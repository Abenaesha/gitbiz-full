// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComp = ( { data } ) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "400", // Width of the chart
    height: "300", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Public Repos",
        //Set the chart subcaption
        subCaption: "",
        //Set the x-axis name
        xAxisName: "Language",
        //Set the y-axis name
        yAxisName: "Repos",
        numberSuffix: "",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data,
    }
  };
  return (<ReactFC {...chartConfigs} />);

}

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

export default ChartComp;