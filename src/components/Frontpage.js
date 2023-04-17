import { useEffect, useState } from "react"
import { fetchAllShows } from "../utils/sanity/showServies"
import { Link } from 'react-router-dom'

export default function Frontpage(){
    //gjør klar lagring av show:
    const [shows, setShows] = useState(null)

    //Hent data og sette inn i staten shows: 
    async function getShows() {
        const data = await fetchAllShows()
        setShows(data)
    }

    //Kjøre getShows når appen lastes: det gjør vi ved useEffect
    useEffect(() => {
        getShows()
    }, [])

    console.log(shows)

    return (
        <>
         <h2>Frontpage</h2>
        <ul>
            {shows?.map((show, index) => <li key={index}>
                <Link to={show._id}>{show.title}</Link>
                </li>)}
        </ul>
        </>
   
    )
}