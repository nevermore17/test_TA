
import { MongoClient } from 'mongodb';

const serverUrl = "http://localhost:3000"
const findUrl = "/doc/find/"
const findIndexUrl = "/doc/findIndex/"

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'nest';
const collectionName = 'docs'

const COUNT = 100

async function test(method, nameArr){
	const start = new Date().getTime();
	return await Promise.allSettled(nameArr.map(obj => 
		fetch(`${serverUrl}${method}${obj.name}`)
	)).then(res => {
		const end = new Date().getTime();
		return end - start;
	})
}

async function main() {
	await client.connect();
	console.log('Connected successfully to server');
	const db = await client.db(dbName);
	const collection = await db.collection(collectionName);

	const result = await collection.find().limit(COUNT).toArray()

	const timeStandard = await test(findUrl, result)
	console.log("Time without index:", timeStandard, 'мс')
	const timeIndex = await test(findIndexUrl, result)
	console.log("Time with index:", timeIndex, 'мс')
	console.log("Duration:", timeStandard - timeIndex, 'мс')
	return 
}

main()
.then(console.log)
.catch(console.error)
.finally(() => client.close());
