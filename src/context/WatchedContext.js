import { createContext, useState, useEffect } from 'react';
import { loadWatched, saveWatched } from '../utils/storage';

export const WatchedContext = createContext();

export const WatchedProvider = ({ children }) => {
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    const stored = loadWatched();
    if (stored) setWatched(stored);
  }, []);

  useEffect(() => {
    saveWatched(watched);
  }, [watched]);

  const addWatched = (movie) => {
    if (!watched.find((m) => m.id === movie.id)) {
      setWatched([...watched, movie]);
    }
  };

  const removeWatched = (id) => {
    setWatched(watched.filter((m) => m.id !== id));
  };

  return (
    <WatchedContext.Provider value={{ watched, addWatched, removeWatched }}>
      {children}
    </WatchedContext.Provider>
  );
};