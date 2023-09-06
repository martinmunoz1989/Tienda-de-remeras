import { createContext, useState } from "react";

export const ItemsContext = createContext({
    itemsCant: 0,
    sumarItemCant: () => { },
    restarItemCant: () => { }
});

//se crea custom provider
function ItemsProvider({ children }) {
    const [itemsCant, setItemsCant] = useState(0)

    //incrementa item + 1
    const sumarItemCant = (cantidad = 1) => {
        setItemsCant(prevItemsCant => prevItemsCant + cantidad);
    };

    const restarItemCant = () => {
        if (itemsCant > 0) {
            setItemsCant(itemsCant - 1);
        }
    };

    return <ItemsContext.Provider
        value={{
            itemsCant: itemsCant,
            sumarItemCant: sumarItemCant,
            restarItemCant: restarItemCant,

        }}>
        {children}
    </ItemsContext.Provider>
}

export default ItemsProvider