import {
	Get,
	Param,
	Post,
  } from '@nestjs/common';

import { Controller } from '@nestjs/common';
import { DocService } from './doc.service';
@Controller('doc')
export class DocController {
	constructor (private docService: DocService) {}
	

	@Get("create_random")
	async createRandom(){
		return await this.docService.createRandom()
	}

	@Get("find/:name")
	async find(@Param("name") name: string){
		return await this.docService.find(name)
	}
	

}
