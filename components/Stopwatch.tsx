import { useEffect, useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Stopwatch({ recordTime = true }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current!);
    }

    return () => {
      clearInterval(intervalRef.current!);
    };
  }, [isRunning]);

  const startStopHandler = () => setIsRunning(!isRunning);

  const resetHandler = () => {
    setIsRunning(false);
    if (recordTime && time > 0) {
      setLogs((prev) => [...prev, time]);
    }
    setTime(0);
  };

  const formatTime = (ms: number) => {
    const minutes = ("0" + Math.floor((ms / 60000) % 60)).slice(-2);
    const seconds = ("0" + Math.floor((ms / 1000) % 60)).slice(-2);
    const milliseconds = ("0" + Math.floor((ms / 10) % 100)).slice(-2);
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.timeText}>{formatTime(time)}</Text>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[
              styles.button,
              { backgroundColor: isRunning ? "red" : "green" },
            ]}
            onPress={startStopHandler}
          >
            <Text style={styles.buttonText}>
              {isRunning ? "Stop" : "Start"}
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.resetButton]}y
            onPress={resetHandler}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
        </View>
      </View>
      <View>
        {recordTime && logs.length > 0 && (
          <View style={styles.logContainer}>
            <Text style={styles.logTitle}>Logged Times:</Text>
            <ScrollView style={styles.scroll}>
              {logs.map((logTime, idx) => (
                <Text key={idx} style={styles.logText}>
                  {formatTime(logTime)}
                </Text>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    alignItems: "center",
  },
  timeText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    marginTop: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  resetButton: {
    backgroundColor: "#555",
  },
  logPanel: {
    color: "white",
    backgroundColor: "black",
    paddingVertical: 15,
  },
  logContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  logTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
