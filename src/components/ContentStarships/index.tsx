import React from 'react';
import { ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

interface Props {
    image: ImageSourcePropType
    title: string
    subtitle: string
    key : string
    onPress?: () => void
    
}

const ContentStarships = ({image, title, subtitle, key, onPress} : Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Card>
                <Card.Cover source={image} />    
                <Card.Title title={title} subtitle={subtitle} />
            </Card>
        </TouchableOpacity>
    )
}

export default ContentStarships