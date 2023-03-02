import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AcheteurDocument = Acheteur & Document;

@Schema()
export class Acheteur extends Document {
    @Prop({ required: true })
    prenom: string

    @Prop({ required: true })
    nom: string

    @Prop({ required: true })
    civilite: string

    @Prop({ required: true })
    client_regulier: boolean

    @Prop({ required: true })
    dateNaissance: Date

    @Prop({ required: true })
    createdAt: Date

    @Prop({ required: true })
    updatedAt: Date

    @Prop()
    deletedAt?: Date
}

export const AcheteurSchema = SchemaFactory.createForClass(Acheteur);