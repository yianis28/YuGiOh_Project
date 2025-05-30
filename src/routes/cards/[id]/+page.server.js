import db from '$lib/db';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  console.log("params.id:", params.id);

  const card = await db.getCard(params.id);

  if (!card) {
    throw error(404, 'Karte nicht gefunden');
  }

  return { card };
}
