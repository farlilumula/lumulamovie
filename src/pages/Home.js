import MovieCard from '../components/CardMovie';

function Home() {
    const movieList  = [
        {
            id: 1,
            title: "Smile",
            year: 2016,
            thumbnail: "../assets/smile.png",
        },
        {
            id: 2,
            title: "Lostcity",
            year: 2016,
            thumbnail: "../assets/Lostcity.png",
        },
        {
            id: 3,
            title: "Superman",
            year: 2016,
            thumbnail: "../assets/superman.png",
        }
    ];

    return (
        <div>
            <h1>Daftar Film</h1>
            <div className="movie-grid">
                {movieList.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Home;