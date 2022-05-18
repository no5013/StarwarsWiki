import React from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

interface Props {
    image: ImageSourcePropType
    title: string
    subtitle: string
    onPress?: () => void
}

const ContentCard = ({image, title, subtitle, onPress} : Props) => {
    return (
        <Card onPress={onPress}>
            <Card.Cover source={image} />    
            <Card.Title title={title} subtitle={subtitle} />
        </Card>
    )
}

export default ContentCard