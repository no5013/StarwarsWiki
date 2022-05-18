import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { getPeopleAPI } from "../../api/people"
import { People } from "../../api/people/types"

const CharactersScreen = () => {
    const [people, setPeople] = useState([] as People[]) 

    useEffect(() => {

        getPeopleAPI().then((resp) => {
           setPeople(resp.data.results)
        })

    }, [])

    return (
        <View>
            {people.map(p => 
            <Text key={p.name}>
                {p.name}
            </Text>)}
        </View>
    )
}

export default CharactersScreen