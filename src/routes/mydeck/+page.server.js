import db from '$lib/db.js';
import { fail } from '@sveltejs/kit';

export const load = async () => {
  const cards = await db.getMyDeck(); 
   console.log('Deck-Karten:', cards);
  return { cards };
};

export const actions = {
  remove: async ({ request }) => {
    const formData = await request.formData();
    const cardId = formData.get('cardId');
    if (!cardId) return fail(400, { error: 'cardId fehlt' });

    await db.removeCardFromDeck(cardId); 
    return { success: true };
  }

};

