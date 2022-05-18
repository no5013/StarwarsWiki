import axios from 'axios';
import { People } from './types';

interface GetPeopleResponse {
    results: People[]
}

export const getPeopleAPI = async () => {
	return await axios.request<GetPeopleResponse>(
        {
            method: 'get',
            url: 'https://swapi.dev/api/people',          
        }
    )
}