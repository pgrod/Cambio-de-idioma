
"use client";

import React, { useContext } from "react";
import { ContextIdioma } from "../Contextos/ContextIdiomas";

const elementos = [
    { es: "Correr", en: "Run" },
    { es: "Caminar", en: "Walk" },
    { es: "Saltar", en: "Jump" },
    { es: "Estudiar", en: "Study" },
    { es: "Leer", en: "Read" },
    { es: "Beber", en: "Drink" },
    { es: "Comer", en: "Eat" },
    { es: "Hablar", en: "Talk" },
    { es: "Sentarse", en: "Sit" },
    { es: "Manejar", en: "Drive" }
];

export default function IdiomaProvider(props: { children: React.ReactNode }) {

    return (
        <ContextIdioma.Provider
            value={{
                elementos,
                idioma: "es",
                cambiarIdioma: () => {}
            }}
        >
            {props.children}
        </ContextIdioma.Provider>
    );
}

export const useIdioma = () => {
    return useContext(ContextIdioma);
};
