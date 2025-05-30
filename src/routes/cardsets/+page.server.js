import db from '$lib/db.js';

export async function load() {
  const sets = await db.getCardSets(); // holt alle CardSets aus MongoDB
  return { sets };
}

