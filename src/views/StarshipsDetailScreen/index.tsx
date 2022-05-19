import React, { useEffect, useRef, useState } from "react"
import { Animated, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native"
import { Headline, List, Title } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { getPeopleAPI } from "../../api/people"
import { getStarshipAPI } from "../../api/starships"
import { Starship } from "../../api/starships/types"
import FadeInView from "../../components/ContentAnimation"
import { SlideUp } from "../../components/ContentAnimation/SlideUp"
import ContentCard from "../../components/ContentCard"
import ContentStarships from "../../components/ContentStarships"
import  { ContentStarshipsDetailDesc, ContentStarshipsDetailTitle } from "../../components/ContentStarshipsDetailList"


const styles = StyleSheet.create({
    bg : {
        margin: 10,
    },
    text : {
        color: 'yellow',
        fontSize : 30,
        textAlign : 'center'
        
    }

});

interface Props {
    route : {
    params: RouteParam
    }
}

interface RouteParam {
    starshipDetail : Starship

}

const StarshipsDetatilScreen = ({route} :Props) => {
    const starshipDetail = route.params.starshipDetail


    return (
        <ImageBackground source={require('@assets/darkGalaxy.jpg')} resizeMode = {'cover'} style = {{flex: 1,
            justifyContent: "center"}}>
            <ScrollView contentContainerStyle={{flex: 1, marginTop : 20}}> 
                <SafeAreaView>
                    <SlideUp>
                        <View style={{height: '100%'}}>

                            <Text style ={styles.text}>
                                IT IS A DARK TIME
                            </Text>
                            <View style= {styles.bg}>
                                <ContentStarshipsDetailTitle title={"NAME"}/>
                                <ContentStarshipsDetailDesc description={starshipDetail.name}/>
                            </View>
                            <View style= {styles.bg}>
                                <ContentStarshipsDetailTitle title={"MODEL"}/>
                                <ContentStarshipsDetailDesc description={starshipDetail.model}/>
                            </View>
                            <View style= {styles.bg}>
                                <ContentStarshipsDetailTitle title={"COST"}/>
                                <ContentStarshipsDetailDesc description={starshipDetail.cost_in_credits}/>
                            </View>
                            <View style= {styles.bg}>
                                <ContentStarshipsDetailTitle title={"LENGTH"}/>
                                <ContentStarshipsDetailDesc description={starshipDetail.length}/>
                            </View>
                            <View style= {styles.bg}>
                                <ContentStarshipsDetailTitle title={"MAX SPEED"}/>
                                <ContentStarshipsDetailDesc description={starshipDetail.max_atmosphering_speed}/>
                            </View>
                            <View style= {styles.bg}>
                                <ContentStarshipsDetailTitle title={"CAPACITY"}/>
                                <ContentStarshipsDetailDesc description={starshipDetail.cargo_capacity}/>
                            </View>
                            <View style= {styles.bg}>
                                <ContentStarshipsDetailTitle title={"HYPERDRIVE RATING"}/>
                                <ContentStarshipsDetailDesc description={starshipDetail.hyperdrive_rating}/>
                            </View>
                            <View style= {styles.bg}>
                                <ContentStarshipsDetailTitle title={"MGLT"}/>
                                <ContentStarshipsDetailDesc description={starshipDetail.MGLT}/>
                            </View>
                            <View style= {styles.bg}>
                                <ContentStarshipsDetailTitle title={"CLASS"}/>
                                <ContentStarshipsDetailDesc description={starshipDetail.starship_class}/>
                            </View>
                        </View>

                    </SlideUp>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    )
}
export default StarshipsDetatilScreen

//     name: string
//     model: string
//     manufacturer: string
//     cost_in_credits: string
//     length: string
//     max_atmosphering_speed: string
//     crew: string
//     passengers: string
//     cargo_capacity: string
//     consumables: string
//     hyperdrive_rating: string
//     MGLT: string
//     starship_class: string
//     pilots: string