import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGameData = () => {
    return useQuery({
        queryKey: ['games', 'crpto-games'],
        queryFn: async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/games?populate[screenshots][fields][0]=url&populate[video][fields][0]=url&populate[icon][fields][0]=url&populate[apk][fields][0]=url&populate[users_permissions_user][fields][0]=email&populate[users_permissions_user][fields][1]=slogan&populate[users_permissions_user][fields][]=username&populate[users_permissions_user][populate][icon][fields][3]=url`);
                return resp.data;
            } catch (error) {
                throw new Error('Error fetching reward data');
            }
        },
    });
};
