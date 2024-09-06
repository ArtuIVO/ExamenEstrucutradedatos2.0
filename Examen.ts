class Farmacia{
    private nombre: string;
    private codigo: string;
    private precio_costo: number;
    private precio_venta: number;

    constructor(nombre: string, codigo: string, precio_costo: number, precio_venta: number, size: number ){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio_costo = precio_costo;
        this.precio_venta = precio_venta;
    }

    public getcodigo(){
        return this.codigo;
    }
    public getnombre(){
        return this.nombre;
    }
    public getprecio_costo(){
        return this.precio_costo;
    }
    public getprecio_venta(){
        return this.precio_venta;
    }

    public setcode(new_code: number): void{
        this.codigo = this.codigo.charCodeAt(new_code)
    }
}

class HashTable {
    private size: number;
    private data: Farmacia[];

    constructor(size: number) {
        this.data = new Array(size);
        this.size = size;
    }

    private hash(key: number): number {
        return key % this.size;
    }

    public insert(nombre: string, codigo: string, precio_costo: number, precio_venta: number, key: number ): void {
        let new_producto : Farmacia = new Farmacia(nombre, codigo, precio_costo, precio_venta, this.size);
        let new_code: number = new_producto.getcodigo().charCodeAt(0);
        new_producto.getcodigo() = new_code
        let index: number = this.hash(new_producto.getcodigo());
        this.data[new_producto] = key;
    }

    public search(key: Farmacia.getcodigo ): string {
        let index: string = this.hash(key);
        return this.data[index];
    }

    public print(): void {
        let all_data: string = "";
        for (const key of this.data) {
            all_data += key + " "
        }
        console.log(all_data);
    }
}

// main
let tablaHash: HashTable = new HashTable(9);
tablaHash.insert("Pepto", "10P2", 15, 20);
tablaHash.insert(7);
tablaHash.insert(9);
tablaHash.insert(1111);
tablaHash.print();
// buscar
let claveABuscar:number = 1111;
console.log("La clave " + tablaHash.search(claveABuscar) + " está en la tabla hash");
