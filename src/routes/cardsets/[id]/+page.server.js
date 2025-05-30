import db from '$lib/db';
import { ObjectId } from 'mongodb';

export async function load({ params }) {
  const id = params.id;


  if (!ObjectId.isValid(id)) {
    throw new Error("Ungültige ID");
  }

  const set = await db.getCardSet(id);
  if (!set) {
    throw new Error("Set nicht gefunden");
  }

  const cards = await db.getCardsBySetId(set.set_id); 

  return { set, cards };
}
