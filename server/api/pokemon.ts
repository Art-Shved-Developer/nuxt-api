import path from 'path';
import { readFile } from 'fs/promises';

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const filePath = path.join(process.cwd(), 'public', `${query.name}.json`);

  const module = await readFile(filePath, 'utf-8');
    return {
      pokemon: JSON.parse(module)
    }
})