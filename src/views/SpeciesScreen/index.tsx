import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { Image, ScrollView, View, Text, TouchableOpacity } from "react-native"
import { ActivityIndicator, Card, Colors, Headline, List, Title, DefaultTheme 
} from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { getSpeciesAPI } from "../../api/species"
import { Specie } from "../../api/species/types"
import ContentCard from "../../components/ContentCard"
import LoadingScreen from "../../components/LoadingScreen"
import { Container } from "./styled"

const SpeciesScreen = () => {
    const navigation = useNavigation()
    const [isLoading,setIsLoading] = useState(true)
    const [species, setSpecies] = useState([] as Specie[]) 

    useEffect(() => {
        getSpeciesAPI().then((resp) => {
            setSpecies(resp.data.results)
            setIsLoading(false)
        })
    }, [])

    return (
        <ScrollView>
        {isLoading && <LoadingScreen/>}
            {species.map((p,index) => 
            <TouchableOpacity onPress={() => {
                return (
                        navigation.navigate('Specie Detail',{ specieDetail: p})
            )}}>
            <Card style={{backgroundColor: '#B5C5B5' ,margin: 5}}>
                <Card.Title key={index} title={p.name} subtitle={p.classification}/>
            </Card>
        </TouchableOpacity>
            )}
        </ScrollView>
    )
}

export default SpeciesScreen