import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import { Headline, List, Title } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { getPeopleAPI } from "../../api/people"
import { getStarshipAPI } from "../../api/starships"
import { Starship } from "../../api/starships/types"
import ContentCard from "../../components/ContentCard"
import ContentStarships from "../../components/ContentStarships"
import { Container } from "./styled"

    
const StarshipsScreen = () => {
    const [starship, setStarship] = useState([] as Starship[]) 
    const navigation = useNavigation()
    useEffect(() => {

        getStarshipAPI().then((resp) => {
            setStarship(resp.data.results)
        })

    }, [])

    return (
        <ScrollView>
            <View>
                {starship.map(p => 
                    <ContentStarships image={0} title={p.name} subtitle={p.model} key={p.name} 
                        onPress={() => {navigation.navigate('StarshipsDetail', {
                            starshipDetail: p
                        })}}
                    />
                    )}
            </View>
        </ScrollView>
    )
}
export default StarshipsScreen