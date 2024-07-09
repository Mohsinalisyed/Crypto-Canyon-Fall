import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useGameData = () => {
    return useQuery({
        queryKey: ['games', 'crpto-games'],
        queryFn: async () => {
            try {
                const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/games`);
                return resp.data;
            } catch (error) {
                throw new Error('Error fetching reward data');
            }
        },
    });
};
