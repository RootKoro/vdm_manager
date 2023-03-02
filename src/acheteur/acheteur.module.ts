import { Module } from '@nestjs/common'
import { AcheteurService } from './acheteur/acheteur.service'
import { AcheteurController } from './acheteur/acheteur.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Acheteur, AcheteurSchema } from './schemas/acheteur.schema'


@Module({
	providers: [AcheteurService],
	controllers: [AcheteurController],
	imports: [
		MongooseModule.forFeature([{ name: Acheteur.name, schema: AcheteurSchema }]),
	],
})

export class AcheteurModule {}
