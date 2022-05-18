import React from "react"
import { Image, ScrollView, View } from "react-native"
import { Headline, List, Title } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import ContentCard from "../../components/ContentCard"
import { Container } from "./styled"

const CharactersScreen = () => {
    return (
        <Container>
            <Title>
                Characters
            </Title>
        </Container>
    )
}

export default CharactersScreen