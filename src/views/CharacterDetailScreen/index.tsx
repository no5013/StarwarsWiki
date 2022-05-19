import React, { useEffect, useState } from "react"
import { Animated, FlatList, ScrollView, View } from "react-native"
import { Avatar, Caption, Card, Headline, List, Paragraph, Subheading, Text, Title } from "react-native-paper"
import { getOnePeopleAPI, getPeopleAPI } from "../../api/people"
import { People } from "../../api/people/types"
import CharacterCard from "../../components/CharacterCard"
import { DetailContainer } from "./styled"

interface Props {
	route: {
		params: RouteParam
	}
}

interface RouteParam {
	peopleId: number
    peopleData: People
}

const CharacterDetailScreen = ({ route }: Props) => {
    const { peopleId, peopleData } = route.params
    // const [people, setPeople] = useState<never | People>() 

    // useEffect(() => {
    //     getOnePeopleAPI(peopleId).then((resp) => {
    //        setPeople(resp.data)
    //     })
    // }, [])

    const data = [
        {
            icon: 'card-account-details',
            title: 'Name',
            value: peopleData.name
        },
        {
            icon: 'gender-male-female',
            title: 'Gender',
            value: peopleData.gender
        },   
        {
            icon: 'human-male-height',
            title: 'Height',
            value: peopleData.height
        },             
        {
            icon: 'scale-bathroom',
            title: 'Mass',
            value: peopleData.mass
        },   
        {
            icon: 'cake-variant',
            title: 'Birth Year',
            value: peopleData.birth_year
        },     
        {
            icon: 'invert-colors',
            title: 'Skin color',
            value: peopleData.skin_color
        },     
        {
            icon: 'eye',
            title: 'Eye color',
            value: peopleData.eye_color
        },  
        {
            icon: 'hair-dryer',
            title: 'Hair color',
            value: peopleData.hair_color
        },     
    ]

    return (
        <ScrollView>
            <View style={{
                paddingVertical: 24,
                alignItems: 'center',
            }}>
                <Avatar.Icon size={80} icon="account" />
                <Headline style={{
                    marginTop: 16
                }}>
                    {peopleData?.name}
                </Headline>
            </View>
            <DetailContainer>
                { data.map((d, index) => {
                    return (
                        <View 
                        key={index + d.title + d.value}
                        style={{
                            marginBottom: 8
                        }}>
                            <Card>
                                <Card.Content>
                                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <View style={{marginRight: 16}}>
                                            <Avatar.Icon size={40} icon={d.icon || 'account'} />
                                        </View>
                                        <View>
                                            <Text>{d.title}</Text>
                                            <Title>{d.value}</Title>
                                        </View>
                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    )
                    })
                }
            </DetailContainer>
        </ScrollView>
    )
}

export default CharacterDetailScreen