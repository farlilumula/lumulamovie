import { useContext } from 'react';
import { WatchedContext } from '../context/WatchedContext';

export default function WatchedList() {
    const { watched } = useContext(WatchedContext);
    return (
        <div>
            <h1>Film yang Telah Ditonton</h1>
            {watched.map(movie => (
                <div key={movie.id}>
                    <img src={movie.thumbnail} alt={movie.title} width={120} />
                    <p>{movie.title} ({movie.year})</p>
                </div>
            ))}
        </div>
    );
}