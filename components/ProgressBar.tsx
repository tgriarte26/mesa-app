import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View, Easing } from 'react-native';

const Progress = ({progress, height}) => {
  const animatedWidth = React.useRef(new Animated.Value(0)).current;
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    const width = containerWidth * progress;
    Animated.timing(animatedWidth, {
      toValue: width,
      duration: 400,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [progress, containerWidth]);

  const progressPercent = Math.round(progress * 100);

  return (
    <>
      <Text style = {{fontFamily: 'Menlo', fontSize: 15, fontWeight: '900', position: 'absolute', width: '100%', textAlign: 'center', zIndex: 2}}>
        {progressPercent}%
      </Text>
      <View
        style={{ height, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: height, overflow: 'hidden' }}
        onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
      >
      <Animated.View style={{
        height,
        width: animatedWidth,
        borderRadius: height,
        backgroundColor: 'rgba(0, 255, 102, 0.83)',
      }}/>
    </View>
  </>
  )
}
export default function ProgressBar() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Progress progress={1} height={25}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 5,
  }
})