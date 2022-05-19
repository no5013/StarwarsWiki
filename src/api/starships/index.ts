import axios from 'axios';
import { Starship } from './types';

interface GetStarshipResponse {
    results: Starship[]
}

export const getStarshipAPI = async () => {
	return await axios.request<GetStarshipResponse>(
        {
            method: 'get',
            url: 'https://swapi.dev/api/starships',          
        }
    )
}