import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { Image, ScrollView, View } from "react-native"
import { Headline, List, Title } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { getPeople } from "../../api/people"
import { People } from "../../api/people/types"
import ContentCard from "../../components/ContentCard"
import { ContentListItem, Header, StyledScrollView } from "./styled"

const HomeScreen = () => {
    const navigation = useNavigation()
    
    return (
        <StyledScrollView>
            <ContentListItem>
                <ContentCard 
                    image={require('@assets/characters.jpeg')} 
                    title="Characters" 
                    subtitle="People of Starwars"
                    onPress={() => {
                        navigation.navigate('Characters')
                    }}
                />
            </ContentListItem>

            <ContentListItem>
                <ContentCard 
                    image={require('@assets/starships.webp')} 
                    title="Starship" 
                    subtitle="Starship in starwars"
                    onPress={() => {
                        navigation.navigate('Starships')
                    }}
                />
            </ContentListItem>

            <ContentListItem>
                <ContentCard 
                    image={require('@assets/species.webp')} 
                    title="Species" 
                    subtitle="Species of starwars"
                    onPress={() => {
                        navigation.navigate('Species')
                    }}
                />
            </ContentListItem>
        </StyledScrollView>
    )
}

export default HomeScreen