import Stopwatch from "@/components/Stopwatch";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar from '../../components/ProgressBar';

export default function App() {
  const WEEKLY_GOAL = 5 * 3600;
  const [elapsedTime, setElapsedTime] = useState(0);

  const timeLeft = Math.max(WEEKLY_GOAL - elapsedTime, 0);
  const hoursLeft = Math.floor(timeLeft / 3600);
  const minutesLeft = Math.floor((timeLeft % 3600) / 60);
  const secondsLeft = Math.floor(timeLeft % 60);
  
  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.titleText}>ME5A Hours for El Camino College helps you track your time spend in MESA to fulfill your 5 hour requirement each week.</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.progressCard}>
          <Text style={styles.progressText}>Progress this week</Text>
          <View style={styles.progressBarWrapper}>
            <ProgressBar />
          </View>
        </View>    
        <Text style={styles.timeLeftText}>
          Time Left: {hoursLeft}h {minutesLeft}m {secondsLeft}s
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.progressCard}>
          <Text style={styles.stopWatchText}>Stopwatch</Text>
        </View>
        <Stopwatch onTimeUpdate={setElapsedTime} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#1f419b",
  },
  titleCard: {
    backgroundColor: '#1f419b',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#fff',
    borderStyle: 'solid',
    marginTop: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '15%',
  },
  titleText: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#ff4539',
    color: '#fff',
    fontWeight: 800,
    fontSize: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#ff4539',
    borderStyle: 'solid',
    marginTop: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '22%',
  },
  progressCard: {
    justifyContent: 'center',
    alignItems:'center',
  },
  progressText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  stopWatchText: {
    fontWeight: 'bold',
    color: '#1f419b',
    fontSize: 20,
  },
  timeLeftText: {
    marginTop: 10,
  },
  progressBarWrapper: {
    width: 300,
  }
});



