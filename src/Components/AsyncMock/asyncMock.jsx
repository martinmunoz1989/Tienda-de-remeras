import aaaj from '../../images/aaaj.svg';
import Bayern from '../../images/Bayern.svg';
const articulos = [
    {
        id: 1,
        nombre: "Remera de Argentinos Juniors",
        precio: "$" + 1500,
        industria: "Nacional",
        imagen:aaaj,
    },
    {
        id: 2,
        nombre: "Remera de Bayer Munich",
        precio: "$" + 4000,
        industria: "Internacional",
        imagen:Bayern,
    }

]

export const listaProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(articulos)
        }, 3000)
    })
}

export default listaProductos