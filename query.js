db.movies.find({});
db.movies.find({ 'writer': 'Quentin Tarantino' });
db.movies.find({ 'actors': 'Brad Pitt' });
db.movies.find({ 'franchise': 'The Hobbit' });
db.movies.find({ $and: [{ 'year': { $gte: 1990 } }, { 'year': { $lt: 2000 } }] });
db.movies.find({ $or: [{ 'year': { $lt: 2000 } }, { 'year': { $gt: 2010 } }] });

db.movies.updateOne({ 'title': 'The Hobbit: An Unexpected Journey' }, { $set: { 'synopsis': 'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from dragon Smaug.' } });
db.movies.updateOne({ 'title': 'The Hobbit: The Desolation of Smaug' }, { $set: { 'synopsis': 'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.' } });
db.movies.updateOne({ 'title': 'Pulp Fiction' }, { $addToSet: { 'actors': 'Samuel L. Jackson' } });

db.movies.createIndex({ 'synopsis': 'text' });
db.movies.find({ $text: { $search: 'Bilbo' } });
db.movies.find({ $text: { $search: 'Gandalf' } });
db.movies.find({ $text: { $search: 'Bilbo -Gandalf' } });
db.movies.find({ $or: [{ $text: { $search: 'dwarves, hobbit' } }] });
db.movies.find({ $and: [{ $text: { $search: 'gold, dragon' } }] });

db.movies.deleteOne({ "title": "Pee Wee Herman's Big Adventure" });
db.movies.deleteOne({ 'title': 'Avatar' })