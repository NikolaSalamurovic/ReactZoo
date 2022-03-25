import axios from "axios";
import { IAnimal } from "../modules/IAnimal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '.././App.css'


export const PrintZoo = () => {
    const [animal, setAnimal] = useState<IAnimal[]>([]);

    useEffect(() => {
        axios.get<IAnimal[]>('https://animals.azurewebsites.net/api/animals')
        .then(response => {
            setAnimal(response.data);
        })
    },[])

    localStorage.setItem('zooList', JSON.stringify(animal))

    
    return(
        <ul>
        {animal.map((animal: IAnimal) => {

            return(
                <li key={animal.id} className="zooAnimals">
                    <h1 className="zooTitle">{animal.name}</h1>
                    <img src={animal.imageUrl} alt="Missing picture of animal" className="zooPicture"/>
                    <p>{animal.shortDescription}</p>
                    <Link to={`/animals/${animal.id}`} className="zooLink">Läs mer om {animal.name}</Link>
                </li>
            )}
        )}
        </ul>
    )
};