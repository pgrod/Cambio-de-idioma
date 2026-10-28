"use client";

import { useContext } from "react";
import { ContextIdioma } from "../Contextos/ContextIdiomas";

export default function BotonEspañol() {

    const { cambiarIdioma } = useContext(ContextIdioma);

    return (
        <button
            onClick={() => cambiarIdioma("es")}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
            Español
        </button>
    );
}

