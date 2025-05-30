import db from '$lib/db.js';

export const actions = {
  create: async ({ request }) => {
    const formData = await request.formData();
    const card = {
      card_name: formData.get('card_name'),
      card_type: formData.get('card_type'),
      card_number: formData.get('card_number'),
      card_level: formData.get('card_level')
    };

    if (!card.card_name || !card.card_type) {
      return { error: 'Name und Typ sind Pflichtfelder.' };
    }

    try {
      await db.createCard(card);
      return { success: true };
    } catch (err) {
      console.error('Fehler beim Speichern:', err.message);
      return { error: 'Speichern fehlgeschlagen.' };
    }
  }
};




