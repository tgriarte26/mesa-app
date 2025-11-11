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

  const handleCheck = (logTime: number, index: number) => {
    console.log(`✅ Checked log #${index + 1}: ${formatTime(logTime)}`)
  };

  const handleDelete = (index: number) => {
    setLogs((prev) => prev.filter((_, i) => i !== index));
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
            style={[styles.button, styles.resetButton]}
            onPress={resetHandler}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
        </View>
      </View>

        {recordTime && logs.length > 0 && (
          <View style={styles.logContainer}>
            <Text style={styles.logTitle}>Logged Times:</Text>
            <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 20 }}>
              {logs.map((logTime, idx) => (
                <View key={idx} style={styles.logRow}>
                  <View style={styles.shiftButtons}>
                    
                  </View>
                    <Text style={styles.logText}>{formatTime(logTime)}</Text>
                    <Pressable
                      style={({ pressed }) => [
                        styles.iconButton,
                        styles.checkButton,
                        pressed && {opacity: 0.7},
                      ]}
                      onPress={() => handleCheck(logTime, idx)}
                      >
                        <Text style={styles.iconText}>✔</Text>
                      </Pressable>
                    <Pressable
                      style ={({ pressed }) => [
                        styles.iconButton,
                        styles.deleteButton,
                        pressed && { opacity: 0.7 },
                      ]}
                      onPress={() => handleDelete(idx)}
                    >
                      <Text style={styles.iconText}>✖</Text>
                    </Pressable>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
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
    backgroundColor: "black",
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
    width: 300,
    height: "100%",
  },
  logRow: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 8,
  },
  iconButton: {
    width: 80,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  checkButton: {
    backgroundColor: "green",
  },
  deleteButton: {
    backgroundColor: "red",
  },
  logTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  scroll: {
    flexGrow: 1,
  },
  logText: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 5,
  }
});
