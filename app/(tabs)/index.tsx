import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [value, setValue] = useState(0);
  const onStartTimer = () => {
    //write later
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.progressCard}>
          <Text style={styles.progressText}>Progress this week ( ______ )</Text>
        </View>
        <Text style={styles.timeLeftText}>Time Left: __</Text>
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
  card: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#ff4539',
    borderStyle: 'solid',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  progressCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  timeLeftText: {

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



