import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useUserData = () => {
    return useQuery({
        queryKey: ['user', 'crpto-users'],
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
export const useGameData = (id:string | null) => {
    return useQuery({
        queryKey: ['games', 'crpto-games', id],
        queryFn: async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/games/${id}?populate[screenshots][fields][0]=url&populate[video][fields][0]=url&populate[icon][fields][0]=url&populate[apk][fields][0]=url&populate[users_permissions_user][fields][0]=email&populate[users_permissions_user][fields][1]=slogan&populate[users_permissions_user][fields][]=username&populate[users_permissions_user][populate][icon][fields][3]=url`);
                return resp.data.data;
            } catch (error) {
                throw new Error('Error fetching reward data');
            }
        },
    });
};
