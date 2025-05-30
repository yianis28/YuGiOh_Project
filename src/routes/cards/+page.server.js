import db from '$lib/db.js';
import { fail } from '@sveltejs/kit';

export const load = async ({ url }) => {
	const search = url.searchParams.get('search')?.trim() || '';

	
	const cards = await db.getCards(search);
	const mydeck = await db.getMyDeck();

	
	const mydeckIds = mydeck.map(card => card._id.toString());

	
	const serializableCards = cards.map(card => ({
		...card,
		_id: card._id.toString()
	}));

	return {
		cards: serializableCards,
		mydeckIds,
		search
	};
};

export const actions = {
	add: async ({ request }) => {
		const form = await request.formData();
		const cardId = form.get('cardId');
		if (!cardId) return fail(400, { error: 'cardId fehlt' });

		await db.addCardToDeck(cardId);
		return { success: true };
	}
};

