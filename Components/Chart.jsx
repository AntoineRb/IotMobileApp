import { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

import { LOGS_INITIAL_STATE } from "../App";

const Chart = ( props ) => {

  // const data = {
  //   labels: [0, 1, 2, 3],
  //   datasets: [
  //     {
  //       data: [0, 3 ,4 ,8 ,2],
  //       color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
  //       strokeWidth: 2 // optional
  //     }
  //   ],
  //   legend: [`Mesure éffectuée`] // optional
  // };

  let screenWidth = Dimensions.get('window').width;
  screenWidth -= (screenWidth / 100) * 10
  const chartConfig = {
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#0275d8",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }

  return (
      <LineChart 
          data={{
                  labels: props.labels,
                  datasets: [
                    {
                      data: props.values,
                      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                      strokeWidth: 2 // optional
                    }
                  ],
                  legend: [`Mesure éffectuée`] // optional
                }}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
      />
  );
}
export default Chart;