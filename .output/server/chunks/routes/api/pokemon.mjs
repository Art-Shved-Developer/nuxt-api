import { d as defineEventHandler, g as getQuery } from '../../runtime.mjs';
import { readFile } from 'fs/promises';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const pokemon = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const url = `../public/${query.name}.json` ;
  console.log("Debug: ", process);
  const module = await readFile(url, "utf-8");
  return {
    pokemon: JSON.parse(module)
  };
});

export { pokemon as default };
//# sourceMappingURL=pokemon.mjs.map
