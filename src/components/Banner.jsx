import "../style/header.css"

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
]

const Banner = () => {
    return (
        <div className="banner">
            <img className="bg" alt="" />
        </div>
    )
}

export default Banner;