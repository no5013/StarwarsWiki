import * as React from 'react';
import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, List } from 'react-native-paper';
import { Starship } from '../../api/starships/types';



const textStyle = StyleSheet.create({
    tilte: {
        color : 'yellow',
        fontWeight : 'bold',
        textAlign : 'center',
        font: 'inherit'
            },
    desc: {
        color : 'yellow',
        textAlign : 'center',
        font: 'inherit'
    }
  });

interface Props {
    title?: string
    description?: string

    
}

export const ContentStarshipsDetailTitle = ({ title} : Props) => {
    return (
            // <List.Item

            //     title={title}
            //     titleStyle = {textStyle.tilte}
            //     description={description}
            //     descriptionStyle = {textStyle.desc}
            //     descriptionEllipsizeMode = {'tail'}
            // />
            <Text style = {textStyle.tilte}>
                {title}
            </Text>
    )
}
export const ContentStarshipsDetailDesc = ({ description} : Props) => {
    return (
            // <List.Item

            //     title={title}
            //     titleStyle = {textStyle.tilte}
            //     description={description}
            //     descriptionStyle = {textStyle.desc}
            //     descriptionEllipsizeMode = {'tail'}
            // />
            <Text style = {textStyle.desc}>
                {description}
            </Text>
    )
}
