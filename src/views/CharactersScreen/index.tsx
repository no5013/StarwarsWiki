import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { Animated, FlatList, Text, View } from "react-native"
import { List } from "react-native-paper"
import { getPeopleAPI } from "../../api/people"
import { People } from "../../api/people/types"
import CharacterCard from "../../components/CharacterCard"

const CharactersScreen = () => {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false)
    const [people, setPeople] = useState([] as People[]) 

    useEffect(() => {
        setIsLoading(true)
        getPeopleAPI().then((resp) => {
           setPeople(resp.data.results)
           setIsLoading(false)
        })
    }, [])

    if(isLoading){
        const objects = [];
        for(let i = 1; i <= 10; i++) {
          let obj = {name: 'Loading', gender: 'Loading'}
          objects.push(obj);
        }

        return (
            <FlatList 
                data={objects}
                renderItem={(p) => {
                    return (
                        <CharacterCard 
                            key={p.index + p.item.name}
                            name={p.item.name}
                            gender={p.item.gender}
                        />
                    )
                }}
                ItemSeparatorComponent={
                    () => <View style={{ width: '100%', height: 0.1, backgroundColor: '#DDD' }}/>
                }
            />
        )
    }

    return (
        <FlatList 
            data={people}
            renderItem={(p) => {
                return (
                    <CharacterCard 
                        key={p.index + p.item.name}
                        name={p.item.name}
                        gender={p.item.gender}
                        onPress={() => {
                            navigation.navigate('CharacterDetail', {
                                peopleId: 1,
                                peopleData: p.item
                            })
                        }}
                    />
                )
            }}
            ItemSeparatorComponent={
                () => <View style={{ width: '100%', height: 0.1, backgroundColor: '#DDD' }}/>
            }
        />
    )
}

export default CharactersScreen