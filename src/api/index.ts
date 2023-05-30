import axios from 'axios';
import { TCard } from '../types';

export async function getCards<T extends TCard[]>(
    path: string
): Promise<T> {
    const { data } = await axios.get<T>(path);
    return data;
};