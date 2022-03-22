import Movie from "./Movie";
import {getMovies} from "../utils/movieService";
import {useState, useEffect} from "react";

function Movies() {
    const [data, setData] = useState([]);


    const requestMovies = async () => {
        const res = await getMovies();
        setData(res)
    }

    useEffect(() => {
        if (data.length > 0) {
            return;
        }
        requestMovies().catch((err) => console.log(err));
    })


    return (
        <>
            <h1>Movies</h1>
            {data.length > 0 ?
                data?.map((movie) =>
                    <Movie key={movie.title + movie.actor} title={movie.title} actor={movie.actor}/>
                ) : <h3>Empty</h3>
            }
            {/*<button type="button" onClick={}>Get</button>*/}
        </>
    );
}

export default Movies;
