import { readFile } from 'fs/promises';

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const url = process.env.NODE_ENV === 'production' ? `../public/${query.name}.json` : `public/${query.name}.json`
  console.log('Debug: ', process)

  const module = await readFile(url, 'utf-8');
    return {
      pokemon: JSON.parse(module)
    }
})