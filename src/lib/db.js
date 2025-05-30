import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("yugioh_db");




async function getCard(id) {
  let card = null;
  try {
    const collection = db.collection("cards");
    const query = { _id: new ObjectId(id) };
    card = await collection.findOne(query);

    if (card) {
      card._id = card._id.toString();
    } else {
      console.log("Keine Karte mit ID " + id);
    }
  } catch (error) {
    console.log(error.message);
  }
  return card;
}


async function createCard(card) {
  card.image_url = card.image_url || "";
  try {
    const collection = db.collection("cards");
    const result = await collection.insertOne(card);
    return result.insertedId.toString();
  } catch (error) {
    console.log(error.message);
  }
  return null;
}


async function deleteCard(id) {
  try {
    const collection = db.collection("cards");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("Keine Karte mit ID " + id);
    } else {
      console.log("Karte mit ID " + id + " wurde gelöscht.");
      return id;
    }
  } catch (error) {
    console.log(error.message);
  }
  return null;
}




async function getCardSets() {
  let sets = [];
  try {
    const collection = db.collection("cardsets");
    const query = {};
    sets = await collection.find(query).toArray();
    sets.forEach((set) => {
      set._id = set._id.toString();
    });
  } catch (error) {
    console.log(error.message);
  }
  return sets;
}


async function getCardSet(id) {
  let set = null;
  try {
    const collection = db.collection("cardsets");
    const query = { _id: new ObjectId(id) };
    set = await collection.findOne(query);

    if (set) {
      set._id = set._id.toString();
    } else {
      console.log("Kein CardSet mit ID " + id);
    }
  } catch (error) {
    console.log(error.message);
  }
  return set;
}


async function getCardsBySetId(setId) {
  let cards = [];
  try {
    const collection = db.collection("cards");
    const query = { set_id: parseInt(setId) };
    cards = await collection.find(query).toArray();
    cards.forEach(card => {
      card._id = card._id.toString();
    });
  } catch (error) {
    console.log("Fehler bei getCardsBySetId:", error.message);
  }
  return cards;
}


export async function getMyDeck() {
  const deck = await db.collection("mydeck").find().toArray();
  return deck.map(card => ({ ...card, _id: card._id.toString() }));
}


export async function addCardToDeck(cardId) {
  const card = await db.collection("cards").findOne({ _id: new ObjectId(cardId) });
  if (!card) return;
  const exists = await db.collection("mydeck").findOne({ _id: card._id });
  if (!exists) await db.collection("mydeck").insertOne(card);
}


export async function removeCardFromDeck(cardId) {
  await db.collection("mydeck").deleteOne({ _id: new ObjectId(cardId) });
}


export async function getCards(search = '') {
  let cards = [];
  try {
    const query = search
      ? { Card_name: { $regex: search, $options: 'i' } }
      : {};
    const collection = db.collection("cards");
    cards = await collection.find(query).toArray();
    cards.forEach((card) => {
      card._id = card._id.toString();
    });
  } catch (error) {
    console.error('Fehler beim Kartenabruf:', error.message);
  }
  return cards;
}


export async function getAllCards() {
  const client = await clientPromise;
  const db = client.db();
  const cards = db.collection('cards');
  return await cards.find().toArray();
}



export async function getCarDs(favoritesOnly = false) {
  const query = favoritesOnly ? { favorite: true } : {};
  const cards = await db.collection('cards').find(query).toArray();
  return cards.map(card => ({
    ...card,
    _id: card._id.toString()
  }));
}


export default {
  // Karten
  getCards,
  getCard,
  getCarDs,
  createCard, 
  deleteCard,
  addCardToDeck,
  removeCardFromDeck,
  getMyDeck,
  getAllCards,



  // Sets
  getCardSets,
  getCardSet,
  getCardsBySetId
};

