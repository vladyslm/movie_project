import client from "./client";

const actorFields = `
    _id,
    full_name,
    'slug': slug.current`;

export const getActor = async (slug) => {
    return await client.fetch(`
    *[_type=="actor" && slug.current=="${slug}"]{${actorFields}}
    `);
}

export const getActors = async () => {
    return await client.fetch(`
    *[_type=="actor"]{${actorFields}}
    `);
}
