import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../modules/IAnimal";


export const AnimalPage = () => {
    const [isFed, setIsFed] = useState(false);
    const [localAnimalList, setLocalAnimalList] = useState<IAnimal[]>([]);

    let params = useParams();

    useEffect(() => {
        if(params.id){
            setLocalAnimalList(JSON.parse(localStorage.getItem('zooList') ?? ""))
        }
    },[])

    
    return(<>
        {localAnimalList.filter((animal) => animal.id.toString() === params.id).map((animal) => 
            {return(
                <div key={animal.id} className="printAnimal">
                    <h1 className="printTitle">{animal.name}</h1>
                    <img src={animal.imageUrl} alt="Missing picture of animal" className="printZooPicture" />
                    <p>{animal.longDescription}</p>
                    <p>{animal.name} föddes år {animal.yearOfBirth}.</p>
                    <p>{animal.name}s latinska namn är {animal.latinName}</p>
                    {isFed ? 
                        <p>{animal.name} blev matat idag klockan : {new Date(Date.now()).toLocaleTimeString("sv-SV")}</p> : <button onClick={() => setIsFed(true)}>Mata djuret</button>
                    }
                </div>
            )}
        )}


        {localAnimalList.filter((animal) => animal.id.toString() === params.id).length<1 && 
         <>
            <div className="notFoundBody">
                <div className="notFound">Page not found</div>
            </div>
         </>
        }
        
        </>
    )
}
