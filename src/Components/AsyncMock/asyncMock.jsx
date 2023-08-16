import aaaj from '../../images/aaaj.svg';
import Bayern from '../../images/Bayern.svg';
const articulos = [
    {
        id: 1,
        descripcion: "Remera de Argentinos Juniors",
        precio: "$" + 1500,
        industria: "Nacional",
        imagen: aaaj,
    },
    {
        id: 2,
        descripcion: "Remera de Bayer Munich",
        precio: "$" + 4000,
        industria: "Internacional",
        imagen: Bayern,
    }

]

export const listaProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(articulos)
        }, 3000)
    })
}

export const listaProductosById = (articuloId) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(articulos.find(art => art.id === parseInt(articuloId)))
        }, 1000)

    })
}

export default listaProductos