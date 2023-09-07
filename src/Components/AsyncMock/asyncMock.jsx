import aaaj from '../../images/aaaj.jpg';
import Bayern from '../../images/Bayern.svg';
import River from '../../images/River-plate.jpg'
import Boca from '../../images/Boca-juniors.jpg'
import Chicago from '../../images/nueva-chicago.jpg'
import Barcelona from '../../images/barcelona.jpg'
import City from '../../images/manchester-city.jpg'
import Liverpool from '../../images/liverpool.jpg'
const articulos = [
    {
        id: 1,
        descripcion: "Remera titular de Argentinos Juniors",
        precio: 15000,
        industria: "Nacional",
        imagen: aaaj,
        Stock: 15, 
    },
    {
        id: 2,
        descripcion: "Remera Titular de River Plate",
        precio: 25000,
        industria: "Nacional",
        imagen: River,
        Stock: 10,
    },
    {
        id: 3,
        descripcion: "Remera titular de Boca Juniors",
        precio: 20000,
        industria: "Nacional",
        imagen: Boca,
        Stock: 10,
    },
    {
        id: 4,
        descripcion: "Remera suplente de Nueva Chicago",
        precio: 25000,
        industria: "Nacional",
        imagen: Chicago,
        Stock: 10,
    },
    {
        id: 5,
        descripcion: "Remera titular de Barcelona",
        precio: 25000,
        industria: "Internacional",
        imagen: Barcelona,
        Stock: 10,
    },
    {
        id: 6,
        descripcion: "Remera titular del Manchester City",
        precio: 25000,
        industria: "Internacional",
        imagen: City,
        Stock: 10,
    },
    {
        id: 7,
        descripcion: "Remera titular del Liverpool",
        precio: 25000,
        industria: "Internacional",
        imagen: Liverpool,
        Stock: 10,
    },
    {
        id: 8,
        descripcion: "Remera de Bayer Munich",
        precio: 25000,
        industria: "Internacional",
        imagen: Bayern,
        Stock: 10,
    },
    
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