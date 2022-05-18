import React from "react"
import { Image, ScrollView, View } from "react-native"
import { Headline, List, Title } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import ContentCard from "../../components/ContentCard"
import { Container } from "./styled"

const StarshipsScreen = () => {
    return (
        <Container>
            <Title>
                Starships
            </Title>
        </Container>
    )
}

export default StarshipsScreen