import aaaj from '../../images/aaaj.svg';
const articulos = [
    {
        id: 1,
        nombre: "Remera de Argentinos Juniors",
        precio: "$" + 1500,
        imagen:{aaaj},
    }
]

export const listaProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(articulos)
        }, 3000)
    })
}

export default articulos