import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doc } from './schemas/doc.schema';
import { Model } from 'mongoose';
import { CreateDocDto } from 'src/dto/create.doc.dto';

@Injectable()
export class DocService {
	
	constructor(@InjectModel(Doc.name) private docModel: Model<Doc>) {}

	private COUNT = 1000


	async createRandom(){
		const stringArr = []
		for(let i = 0; i < this.COUNT; i++){
			const doc:CreateDocDto = {
				name: this.getRandomString()
			}
			stringArr.push(doc)
		}
		return await this.docModel.create(stringArr)
	}

	async find(name: string){
		return await this.docModel.find({
			name
		})
	}

	private getRandomString() {
		const length: number = Math.floor(Math.random() * 100)
		const chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let result:string = "";
		const randomArray = new Uint8Array(length);
		crypto.getRandomValues(randomArray);
		randomArray.forEach((number) => {
		  result += chars[number % chars.length];
		});
		return result;
	}
}
