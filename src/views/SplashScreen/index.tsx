import { CommonActions, useNavigation } from "@react-navigation/native"
import React, { useEffect } from "react"
import { Image, ScrollView, View } from "react-native"
import { Headline, List, Title } from "react-native-paper"
import { SplashContainer } from "./styled"

const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 1,
                    routes: [
                        {
                            name: 'Home',
                        },
                    ],
                })
            )
        }, 1000)
    }, [])

    return (
        <SplashContainer>
            <Image style={{height: 100, width: 200}} source={require('@assets/starwars-logo.png')}/>
            <Title>
                Wikipedia
            </Title>
        </SplashContainer>
    )
}

export default SplashScreen