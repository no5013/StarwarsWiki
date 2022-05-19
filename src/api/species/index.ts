import axios from 'axios';
import { Specie } from './types';

interface GetSpeciesReponse {
    results: Specie[]
}

export const getSpeciesAPI = async () => {
	return await axios.request<GetSpeciesReponse>(
        {
            method: 'get',
            url: 'https://swapi.dev/api/species',          
        }
    )
}