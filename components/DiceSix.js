import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const DiceSix = () => {
    const min = 1;
    const max = 6;
    const [count, setCount] = useState(0);
    const onPress = () => setCount(Math.floor(
        Math.random() * (min * max) + min
    ));
    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={styles.countText}>
                    {count ? count : null}
                </Text>
            </View>
            <TouchableHighlight onPress={onPress} style={styles.button}>
                <View style={styles.button}>
                    <Text style={styles.textSize}>D6</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
          flexWrap: 'wrap',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5,
        borderWidth: 0,
        
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    textSize: {
        fontSize: 16
    },
    countText: {
        color: "#efd9bd",
        fontSize: 24
        
    }
});


export default DiceSix;
