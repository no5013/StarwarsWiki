import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { Image, ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { ActivityIndicator, Card, Colors, Headline, List, Paragraph, Title } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { getPeopleAPI } from "../../api/people"
import { People } from "../../api/people/types"
import { getSpeciesAPI } from "../../api/species"
import { Specie } from "../../api/species/types"
import ContentCard from "../../components/ContentCard"
import LoadingScreen from "../../components/LoadingScreen"
import { CardHeader, Container } from "./styled"

interface RouteParam {
    specieDetail: Specie
}

interface Props {
    route: {
        params: RouteParam
    }
}

const SpecieDetailScreen = ({route}: Props) => {
    const specieDetail = route.params.specieDetail

    return (
        <ScrollView>
            <CardHeader>
                 <Title style={[styles.centeredView]}>
                    {specieDetail.name}
                </Title>
            </CardHeader>
            <View>
                <Text>PIC</Text>
            </View>
            <Card>
                {/* <Header> */}
    
                {/* </Header> */}
                <View>
                <Title>
                        {specieDetail.name}
                    </Title>
                </View>
  
                <Paragraph>Classification: {specieDetail.classification}</Paragraph>
                <Paragraph>Designation: {specieDetail.designation}</Paragraph>
                <Paragraph>Average Height: {specieDetail.average_height}</Paragraph>
                <Paragraph>Skin Color: {specieDetail.skin_colors}</Paragraph>
                <Paragraph>Hair Color: {specieDetail.hair_colors}</Paragraph>
                <Paragraph>Eye color: {specieDetail.eye_colors}</Paragraph>
                <Paragraph>Average Lifespan: {specieDetail.average_lifespan}</Paragraph>
                <Paragraph>Language: {specieDetail.language}</Paragraph>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
})

export default SpecieDetailScreen