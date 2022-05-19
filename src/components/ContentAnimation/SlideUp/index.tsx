import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, View } from 'react-native';


export const SlideUp = (props : any) => {
    const animatedValue = useRef(new Animated.Value(1)).current;
    const [isTop, setIsTop] = useState(false);

    const startAnimation = (toValue: number) => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 5000,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => {
        })
    }

    useEffect(() => {
        startAnimation(0);
    }, []);

    const translateY = animatedValue.interpolate({
        inputRange: [0 , 1],
        outputRange: [1, Dimensions.get('window').height -70],
        extrapolate: 'clamp'
    })

    return (
        // <View style={styles.container}>
        //     <Animated.View style={[styles.square, { transform: [{ translateY }] }]}>

        //     </Animated.View>
        // </View>
        <Animated.View     
        style={{
        ...props.style,
        transform: [{ translateY }]     
        }}
    >
        {props.children}
    </Animated.View>
)
}


