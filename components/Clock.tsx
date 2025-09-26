import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(interval);
    }, []);
  
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();
  
    const secondAngle = (seconds / 60) * 360;
    const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourAngle = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;
  
    const center = 100;
    const radius = 90;
  
    const renderHand = (angle, length, stroke, strokeWidth) => {
      const rad = (Math.PI / 180) * angle - Math.PI / 2;
      const x = center + length * Math.cos(rad);
      const y = center + length * Math.sin(rad);
      return (
        <Line
          key={angle + stroke}
          x1={center}
          y1={center}
          x2={x}
          y2={y}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* Digital Clock */}
      <Text style={styles.digital}>{time.toLocaleTimeString()}</Text>

      {/* Analog Clock */}
      <Svg height="200" width="200">
        {/* Clock Circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke="black"
          strokeWidth="7"
          fill="white"
        />
        {/* Hands */}
        {renderHand(hourAngle, 50, "black", 6)}
        {renderHand(minuteAngle, 70, "black", 4)}
        {renderHand(secondAngle, 80, "red", 2)}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  digital: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
    color: "white",
  },
});