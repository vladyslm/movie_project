import {getMoviesByActor} from "../utils/movieService";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Filmography() {
    const [name, setName] = useState("");
    const [filmography, setFilmography] = useState([]);
    const slug = useLocation().pathname.split("/")[2];

    const getFilmography = async (slug) => {
        const res = await getMoviesByActor(slug);
        const resObj = res[0];
        setFilmography(resObj?.movies);
        setName(resObj.full_name);

    }

    useEffect(() => {
        getFilmography(slug).catch((err) => console.log(err));
    }, [])

    const renderName = () => {
        return (
            <>
                {name !== "" ? <p>{name}</p> : <p>Loading actor's name...</p>}
            </>
        )
    }

    const renderFilmography = () => {
        return (
            <>
                {filmography?.length > 0 ?
                    filmography?.map((movie) => <p key={movie}>{movie}</p>):
                    <p>Empty list</p>
                }
            </>
        );
    }

    const renderContent = () => {
        return (
            <>
                {renderName()}
                {renderFilmography()}
            </>

        )
    }


    return (
        <>
            {filmography !== {} ?
                renderContent()
                : <p>Loading...</p>
            }
        </>
    );
}

export default Filmography;
