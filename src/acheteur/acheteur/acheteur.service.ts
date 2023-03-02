import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateAcheteurDto } from '../dto/create-acheteur.dto'
import { UpdateAcheteurDto } from '../dto/update-acheteur.dto'
import { Acheteur, AcheteurDocument } from '../schemas/acheteur.schema'

@Injectable()
export class AcheteurService {
	constructor(
		@InjectModel(Acheteur.name) private readonly acheteurModel: Model<AcheteurDocument>,
	) {}

	async findAll(): Promise<Acheteur[]> {
		return await this.acheteurModel.find().exec()
	}

	async findOne(id: string): Promise<Acheteur> {
		return await this.acheteurModel.findById(id).exec()
	}

	async create(createAcheteurDto: CreateAcheteurDto): Promise<Acheteur> {
		return await new this.acheteurModel({
		...createAcheteurDto,
		createdAt: new Date(),
		}).save()
	}

	async update(id: string, updateAcheteurDto: UpdateAcheteurDto): Promise<Acheteur> {
		return await this.acheteurModel.findByIdAndUpdate(id, updateAcheteurDto).exec()
	}

	async delete(id: string): Promise<Acheteur> {
		return await this.acheteurModel.findByIdAndDelete(id).exec()
	}
}
