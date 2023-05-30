import { useState, useEffect } from 'react';
import { getCards } from '../api';
import { TCard } from '../types';

export const useGetCards = () => {
  const [cards, setCards] = useState<TCard[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    clearError()
    setLoading(true);

    getCards(import.meta.env.VITE_API_URL)
      .then((data: TCard[]) => {
        setCards(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
        alert(err.message);
      });

  }, []);

  const clearError = () => {
    setError(null)
    setLoading(true)
  }
  return { cards, loading, error };
}