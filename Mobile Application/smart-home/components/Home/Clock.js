import { Heading, HStack, Box } from "native-base";
import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(null);
  const [day, setDay] = useState(null);

  useEffect(() => {
    const getCurrentTime = () => {
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
      let seconds = new Date().getSeconds();
      let am_pm = "pm";

      if (hour < 12) {
        am_pm = "am";
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      if (hour > 12) {
        hour = hour - 12;
      }

      if (hour == 0) {
        hour = 12;
      }

      setTime(hour + ":" + minutes + ":" + seconds + " " + am_pm);

      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ].map((item, key) => {
        if (key == new Date().getDay()) {
          setDay(item);
        }
      });
    };

    const ticking = setInterval(() => {
      getCurrentTime();
    }, 1000);

    return function cleanup() {
      clearInterval(ticking);
    };
  }, []);

  return (
    <Box>
      <HStack>
        <Heading size="lg" px="5" pt="1" color="pink.600">
          {day}
        </Heading>
        <Heading size="lg" pt="1" color="pink.600">
          {time}
        </Heading>
      </HStack>
    </Box>
  );
};

export default Clock;
