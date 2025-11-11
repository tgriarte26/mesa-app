import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Progress = ({progress, height}) => {
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const progressWidth = width * progress;
    Animated.timing(animatedValue, {
      toValue: progressWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  const progressPercent = Math.round(progress * 100);
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
      }}/>
  </View>
  </>
  )
}
export default function ProgressBar() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Progress progress={0.2} height={20}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 5,
  }
})