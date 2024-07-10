import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import path from 'path';
import { readFile } from 'fs/promises';
import 'node:http';
import 'node:https';
import 'fs';
import 'node:fs';
import 'node:url';

const pokemon = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const filePath = path.join(process.cwd(), "public", `${query.name}.json`);
  const module = await readFile(filePath, "utf-8");
  return {
    pokemon: JSON.parse(module)
  };
});

export { pokemon as default };
//# sourceMappingURL=pokemon.mjs.map
