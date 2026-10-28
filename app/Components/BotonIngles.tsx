"use client";

import { useContext } from "react";
import { ContextIdioma } from "../Contextos/ContextIdiomas";

export default function BotonIngles() {

    const { cambiarIdioma } = useContext(ContextIdioma);

    return (
        <button
            onClick={() => cambiarIdioma("en")}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
            Inglés
        </button>
    );
}
