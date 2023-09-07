import aaaj from '../../images/aaaj.svg';
import Bayern from '../../images/Bayern.svg';
const articulos = [
    {
        id: 1,
        descripcion: "Remera de Argentinos Juniors",
        precio: 15000,
        industria: "Nacional",
        imagen: aaaj,
        Stock: 15, 
    },
    {
        id: 2,
        descripcion: "Remera de Bayer Munich",
        precio: 25000,
        industria: "Internacional",
        imagen: Bayern,
        Stock: 10,
    }

]

export const listaProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(articulos)
        }, 2000)
    })
}

// listado por ID
export const listaProductosById = (articuloId) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(articulos.find(art => art.id === parseInt(articuloId)))
        }, 1000)

    })
}

// listado por ind. nacional
export const listaProductosNacionales = () => {
    return new Promise((res) => {
        setTimeout(() => {
            const productosNacionales = articulos.filter(articulo => articulo.industria === "Nacional");
            res(productosNacionales);
        }, 2000)
    })
}

// listado por ind. nacioanl
export const listaProductosInternacionales = () => {
    return new Promise((res) => {
        setTimeout(() => {
            const productosImportados = articulos.filter(articulo => articulo.industria === "Internacional");
            res(productosImportados);
        }, 2000)
    })
}

export default listaProductos