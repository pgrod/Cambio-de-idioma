"use client";

import { useState, useEffect, useContext } from "react";
import { ContextIdioma } from "./Contextos/ContextIdiomas";
import IdiomaProvider from "./Providers/IdiomaProvider";
import BotonEspanol from "./Components/BotonEspañol";
import BotonIngles from "./Components/BotonIngles";

export default function Home() {
    return (
        <IdiomaProvider>
            <Traductor />
        </IdiomaProvider>
    );
}

function Traductor() {

    const { elementos } = useContext(ContextIdioma);

    const [idioma, setIdioma] = useState("es");
    const [listaElementos, setListaElementos] = useState<string[]>([]);

    useEffect(() => {
        const nuevosElementos = elementos.map((elemento) => {
            if (idioma === "es") {
                return elemento.es;
            } else {
                return elemento.en;
            }
        });

        setListaElementos(nuevosElementos);

    }, [idioma, elementos]);

    function cambiarIdioma(nuevoIdioma: string) {
        setIdioma(nuevoIdioma);
    }

    return (
        <ContextIdioma.Provider
            value={{ elementos, idioma, cambiarIdioma }}
        >
            <div className="min-h-screen bg-pink-50 flex flex-col items-center p-10">

                <h1 className="text-4xl font-bold text-pink-700 mb-4">
                    Traductor de Elementos
                </h1>

                <p className="text-gray-600 mb-8">
                    Selecciona un idioma para traducir las palabras
                </p>

                <div className="flex gap-4 mb-8">
                    <BotonEspanol />
                    <BotonIngles />
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl">

                    <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">
                        Lista de Elementos
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        {listaElementos.map((elemento, index) => (
                            <div
                                key={index}
                                className="bg-pink-100 text-pink-800 text-center p-4 rounded-xl shadow-sm"
                            >
                                {elemento}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </ContextIdioma.Provider>
    );
}
