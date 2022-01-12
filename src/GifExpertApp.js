import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {


    const [categorias, setCategorias] = useState(['Naruto']);

    return(
        <>
        <h2>GifExperteApp</h2>
        <AddCategory setCategorias={setCategorias} categorias={categorias}/>
        <hr/>

        <ol>
           {
               categorias.map(categoria =>
                   <GifGrid 
                   key={categoria}
                   categoria={categoria}/>
               )
           }
        </ol>

        </>
    );
}