import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doc } from './schemas/doc.schema';
import { Model } from 'mongoose';
import { CreateDocDto } from 'src/doc/dto/create.doc.dto';

@Injectable()
export class DocService {
	
	constructor(@InjectModel(Doc.name) private docModel: Model<Doc>) {}

	private COUNT = 100

	async find(name: string){
		return await this.docModel
		.find({
			name
		}).hint({ $natural: 1 }).exec()
	}

	async findIndex(name: string){
		return await this.docModel
		.find({
			name
		}).hint({ name: 1 }).exec()
	}

}
