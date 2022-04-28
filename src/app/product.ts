export class Prodotti{
    constructor(id:number, nomePiatto:string, categoria: Categoria, prezzo: number, descrizione:string, img:string, like:number) {
        this.id = id,
        this.nomeProdotto = nomePiatto,
        this.categoria = categoria,
        this.prezzo = prezzo,
        this.descrizione = descrizione,
        this.img = img,
        this.like = like
    }
    id:number;
    nomeProdotto:string;
    categoria: Categoria;
    prezzo:number;
    descrizione: string;
    img : string;
    like: number;
}
export enum Categoria {
    smartphone = "Smartphone",
    tv = "Tv",
    console = "Console",
    smartwatch = "Smartwatch"
}