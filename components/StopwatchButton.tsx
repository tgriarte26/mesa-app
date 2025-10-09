import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
    onPress: () => void;
}

export default function StopwatchButton({onPress}: Props) {
    return (
        <View style={styles.stopwatchButtonContainer}>
            <Pressable style={styles.stopwatchButton} onPress={onPress}>
                <Text style={styles.stopwatchText}>Stopwatch</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    stopwatchButtonContainer: {
        width: 160,
        height: 40,
        bottom: 20,
        borderWidth: 4,
        borderRadius: 42,
        backgroundColor: '#ffe651',
        borderColor: '#ff4539',
    },
    stopwatchButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    stopwatchText: {
        fontSize: 20,
        color: '#ff4539',
        fontWeight: 'bold', 
    }
})