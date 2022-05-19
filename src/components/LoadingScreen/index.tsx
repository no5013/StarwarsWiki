import React from 'react';
import { ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Card, Colors, Paragraph, Title } from 'react-native-paper';
import { LoadingScreenContainer } from './styled';

const LoadingScreen = () => {
    return (
        <LoadingScreenContainer> 
            <ActivityIndicator animating={true} 
                color={Colors.black}
                size='large' />
        </LoadingScreenContainer>
    )
}

export default LoadingScreen