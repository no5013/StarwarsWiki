import React, { useEffect, useRef, useState } from 'react';
import { Animated, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { Card, List, Paragraph, Title } from 'react-native-paper';

interface Props {
    name: string
    gender: string
    onPress?: () => void
}

const CharacterCard = ({name, gender, onPress} : Props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
          } as Animated.TimingAnimationConfig
          
        ).start();
      }, [fadeAnim])
      
    return (
        <View style={{
            backgroundColor: 'white'
        }}>
            <Animated.View       
                style={{
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}>
                <TouchableOpacity onPress={onPress}>
                    <List.Item
                        title={name}
                        description={gender}
                        left={props => <List.Icon {...props} icon="account" />}
                        style={{
                            backgroundColor: 'white'
                        }}
                    />
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

export default CharacterCard