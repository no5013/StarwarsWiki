import axios from 'axios';
import { People } from './types';

interface GetPeopleResponse {
    results: People[]
}

export const getPeopleAPI = async (page?: number) => {
	return await axios.request<GetPeopleResponse>(
        {
            method: 'get',
            url: `https://swapi.dev/api/people${page ? '/?page=' + page : ''}`,          
        }
    )
}

export const getOnePeopleAPI = async (peopleId: number) => {
	return await axios.request<People>(
        {
            method: 'get',
            url: `https://swapi.dev/api/people/${peopleId}`,          
        }
    )
}