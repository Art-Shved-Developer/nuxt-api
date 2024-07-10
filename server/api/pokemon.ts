import { readFile } from 'fs/promises';

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const module = await readFile(`public/${query.name}.json`, 'utf-8');
    return {
      pokemon: JSON.parse(module)
    }
})