const productos = [
    { id:1, nombre: "Camiseta Argentina 98", precio: 12000, img: "./img/arg98.jpg"},
    { id:2, nombre: "Camiseta Boca 2000", precio: 15000, img: "./img/boca00.jpg"},
    { id:3, nombre: "Camiseta Argentina 2022", precio: 15000, img: "./img/arg22.jpg"},
    { id:4, nombre: "Camiseta Independiente 2003", precio: 10000, img: "./img/ind03.jpg"}
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos);
        }, 2000)
    })
};

// funcion que retorna un solo item

export const getUnProduct = (id) => {
    return new Promise((res) => {
        setTimeout(() => {
            const producto = productos.find( prod => prod.id === id);
            res(producto);
        }, 2000)
    })
};