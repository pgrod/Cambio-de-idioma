
import { createContext } from "react";

export const ContextIdioma = createContext({
    elementos: [
        { es: "", en: "" }
    ],
    idioma: "es",
    cambiarIdioma: (idioma: string) => {}
});
