import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Progress = ({step, steps, height}) => {
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true
    }).start();
  }, []);

  React.useEffect(() => {
    // -width + width * step / steps
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  const progressPercent = Math.round((step / steps) * 100);
  return (
    <>
    <Text style = {{fontFamily: 'Menlo', fontSize: 1, fontWeight: '900', marginBottom: 4}}>
      {progressPercent}%
    </Text>
    <View
      onLayout={e => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
      }}
      style={{
        height,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: height,
        overflow: 'hidden',
    }}>
      <Animated.View style={{
        height,
        width: '100%',
        borderRadius: height,
        backgroundColor: 'rgba(0, 255, 102, 0.83)',
        position: 'flex',
        left: 0,
        top: 0,
        transform: [{
          translateX: animatedValue,
        }]
      }}/>
  </View>
  </>
  )
}
export default function ProgressBar() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Progress step={1} steps={5} height={20}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 5,
  }
})