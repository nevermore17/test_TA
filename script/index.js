const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'nest';
const collectionName = 'docs'

const COUNT = 10000000

function getRandomString() {
	const length = Math.floor(Math.random() * 100)
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	const randomArray = new Uint8Array(length);
	crypto.getRandomValues(randomArray);
	randomArray.forEach((number) => {
	  result += chars[number % chars.length];
	});
	return result;
}


async function main() {
	await client.connect();
	console.log('Connected successfully to server');
	const db = await client.db(dbName);
	const collection = db.collection(collectionName);

	const options = {

	}
		for (let j = 0; j < 100; j++) {
			const dto = []
			for(let i = 0; i < Math.floor(COUNT/100); i++){
				const str = getRandomString()
				const doc = {
					name: str,
				}
				dto.push(doc)
			}
			await collection.insertMany(dto, options)
			console.log(`Complete ${j+1}%`)
		}
		
  
	return 'done.';
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());