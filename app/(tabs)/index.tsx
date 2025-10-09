import Clock from "@/components/Clock";
import StopwatchButton from "@/components/StopwatchButton";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';

export default function App() {
  const [value, setValue] = useState(0);
  const onStartTimer = () => {
    //write later
  }
  return (
    <View style={styles.container}>
      <View style={styles.progressWrapper}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f419b",
  },
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
    top: 50,
    position: 'fixed',
  },
  optionsRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});



