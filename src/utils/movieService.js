import client from "./client";

const movieFields = `
    'movieId': _id,
    title,
    'actorId': actor->_id,
    'actor': actor->full_name`;


export const getMovies = async () => {
    return await client.fetch(`
    *[_type == "movie"]{${movieFields}}
    `);
}

// export const getMoviesByActor = async (actorID) => {
//     return await client.fetch(`
//     *[_type=="movie" &&
//     actor._ref=="${actorID}"]{${movieFields}}
//     `);
// }

export const getMoviesByActor = async (slug) => {
    return await client.fetch(`
        *[_type=="actor" && slug.current=="${slug}"]{
        full_name,
        'slug':slug.current,
        "movies": *[_type=="movie"
        && references(^._id)].title}
    `);
}


