export class BaseAcheteurDto {
    id: number
    nom: string
    prenom: string
    telephone?: string
    email?: string
    civilite: string
    dateNaissance: Date
    clientRegulier: boolean
}