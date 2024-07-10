import { sql } from "@vercel/postgres";

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  
  const pokemon = await sql`SELECT * FROM pokemons WHERE name = ${query.name};`;

    return {
      pokemon: pokemon.rows[0].data
    }
})