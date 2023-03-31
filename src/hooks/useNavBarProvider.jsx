import { useState } from "react";

function useNavBarProvider() {
    const [cardHamburguer, setCardHamburguer] = useState('');

    return {
        cardHamburguer,
        setCardHamburguer
    }
}

export default useNavBarProvider;