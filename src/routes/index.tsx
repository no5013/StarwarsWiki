import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../views/HomeScreen";
import SplashScreen from "../views/SplashScreen";
import CharactersScreen from "../views/CharactersScreen";
import SpeciesScreen from "../views/SpeciesScreen";
import StarshipsScreen from "../views/StarshipsScreen";
import { Text, View } from "react-native";
import StarshipsDetailScreen from "../views/StarshipsDetailScreen";
import SpecieDetailScreen from "../views/SpecieDetailScreen";
import CharacterDetailScreen from "../views/CharacterDetailScreen";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen options={{
                headerShown: false,
            }} name="Splash" component={SplashScreen} />
            <Stack.Screen options={{
                headerTitle: 'Main Menu'
            }} name="Home" component={HomeScreen} />
            <Stack.Screen name="Characters" component={CharactersScreen} />
            <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
            <Stack.Screen name="Starships" component={StarshipsScreen} />
            <Stack.Screen name="Species" component={SpeciesScreen} />
            <Stack.Screen name="StarshipsDetail" component={StarshipsDetailScreen} options={{
                headerTransparent: true,
                headerTitle: '',
                headerTintColor: 'white'
            }}/>
            <Stack.Screen name="Specie Detail" component={SpecieDetailScreen} />
        </Stack.Navigator>
    )
}

export default Routes