import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProgressBar  from '../../components/ProgressBar';

export default function App() {
  const [value, setValue] = useState(0);
  const onStartTimer = () => {
    //write later
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleCard}>
        <Text style={styles.titleText}>ME5A Hours for El Camino College helps you track your time spend in MESA to fulfill your 5 hour requirement each week.</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.progressCard}>
          <Text style={styles.progressText}>Progress this week</Text>
          <View style={styles.progressBarWrapper}>
            <ProgressBar/>
          </View>
        </View>
        <Text style={styles.timeLeftText}>Time Left:</Text>
      </View>
      {/*<View style={styles.progressWrapper}>
        <CircularProgress
          radius={180}
          value={85}
          inActiveStrokeColor={'#2ecc71'}
          inActiveStrokeOpacity={0.2}
          inActiveStrokeWidth={6}
          duration={3000}
          onAnimationComplete={() => setValue(50)}
          progressValueColor="transparent"
        />
        <View style={styles.overlay}>
          <Clock />
        </View>
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
              <StopwatchButton onPress={onStartTimer}/>
          </View>
        </View>
      </View>
      */}
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
    borderWidth: 3,
    borderColor: '#ff4539',
    borderStyle: 'solid',
    marginTop: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '20%',
  },
  progressCard: {
    justifyContent: 'center',
    alignItems:'center',
  },
  progressText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  timeLeftText: {
    marginTop: 10,
  },
  progressBarWrapper: {
    width: 300,
  }
  /*
  progressWrapper: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  optionsContainer: {
    bottom: 120,
    position: 'fixed',
  },
  optionsRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
  */
});



