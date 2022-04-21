import { useState, useEffect, useCallback } from "react";
import { Heading } from "native-base";
import { Dimensions, RefreshControl, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

import axios from "axios";

const Chart = () => {
  const [value, setValue] = useState([0]);
  const [time, setTime] = useState([""]);
  const [refreshing, setRefreshing] = useState(false);

  // https://www.pluralsight.com/guides/fetching-data-updating-state-hooks
  useEffect(() => {
    setRefreshing(true);

    const getData = async () => {
      await axios
        .get(
          `https://bku-ces-iotsmarthouse.herokuapp.com/api/device/1858274/data`
        )
        .then((response) => {
          setValue(response.data.map((a) => a.value).map(Number));
          //   setTime(response.data.map((a) => a.created_at));
          setTime(response.data.map((a) => ""));

          setRefreshing(false);
        });
    };

    getData();
  }, []); // no dependency => run only 1 time when created  // componentDidMount() {}

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setValue([0]);
    setTime([""]);

    const getData = async () => {
      await axios
        .get(
          `https://bku-ces-iotsmarthouse.herokuapp.com/api/device/1858274/data`
        )
        .then((response) => {
          setValue(response.data.map((a) => a.value).map(Number));
          //   setTime(response.data.map((a) => a.created_at));
          setTime(response.data.map((a) => ""));

          setRefreshing(false);
        });
    };

    getData();
  }, []);

  //   console.log(typeof value[0]);
  //   console.log(value.length);
  //   console.log(value);
  //   console.log(time);

  return (
    <>
      <Heading size="xl" px="5" pb="3" color="pink.400">
        Temp Graph
      </Heading>

      <ScrollView
        width={Dimensions.get("window").width}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor="mistyrose"
            size="large"
            colors={["aqua", "greenyellow", "tomato"]}
          />
        }
      >
        <LineChart
          data={{
            labels: time,
            datasets: [
              {
                data: value,
              },
            ],
          }}
          width={0.98 * Dimensions.get("window").width} // from react-native
          height={0.35 * Dimensions.get("window").height}
          //   yAxisLabel="$"
          //   yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#f299f2",
            backgroundGradientFrom: "#ff009a",
            backgroundGradientTo: "#fabbe1",
            // decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#30d987",
            },
          }}
          bezier
          style={{
            marginVertical: 16,
            borderRadius: 16,
            paddingHorizontal: 3,
          }}
        />
      </ScrollView>
    </>
  );
};

export default Chart;
