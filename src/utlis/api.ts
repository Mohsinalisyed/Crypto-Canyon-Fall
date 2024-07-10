import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGameData = () => {
    return useQuery({
        queryKey: ['games', 'crpto-games'],
        queryFn: async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/users?populate[icon][fields][0]=url&populate[games][0]=*&populate[games][populate][video][fields][1]=url&populate[games][populate][apk][fields][2]=url&populate[games][populate][icon][fields][3]=url&populate[games][populate][screenshots][fields][4]=url&filters[games][$gte]=1`);
                return resp.data;
            } catch (error) {
                throw new Error('Error fetching reward data');
            }
        },
    });
};
