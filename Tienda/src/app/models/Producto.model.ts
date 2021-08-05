export class producto{

    id:number;
    nombre:string;
    precio: number;
    provedor: string;
    img: string;

    constructor(id:number, nombre:string, precio:number, provedor:string, img:string ){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.provedor=provedor;
        this.img=img;
    }
}