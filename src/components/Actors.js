import {useEffect, useState} from "react";
import {getActor, getActors} from "../utils/actorService";
import {Link, NavLink} from "react-router-dom";

function Actors() {
    const [actors, setActors] = useState([]);

    const requestActors = async () => {
        const res = await getActors();
        setActors(res);
    }

    useEffect(() =>{
        if (actors.length > 0) {
            return
        }
        requestActors().catch();
    })


    return (
        <>
            {actors.length > 0 ?
                <ul>
                    {actors?.map((actor) =>
                    <li key={actor._id}>
                        <NavLink to={`/actors/${actor.slug}`}>{actor.full_name}</NavLink>
                    </li>
                    )}
                </ul> : <h3>Empty</h3>

            }
        </>
    );
}

export default Actors;
