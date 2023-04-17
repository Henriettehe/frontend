import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { fetchShow } from "../utils/sanity/showServies"
import { writeClient } from "../utils/sanity/client"

export default function Show() {
   
    const {id} = useParams()
    const [show, setShow] = useState(null)

    async function getShow(id) {
        const data = await fetchShow(id)
        setShow(data[0])
    }

    useEffect(() => {
        getShow(id)
    }, [id])

    function RatingOptions() {
        let optionHTML = ""
        for(let r = 1; r < 6; r++) {
            optionHTML += '<option value="' + r +'">' + r + '</option>'
        }
        return optionHTML
    }

    function saveReview(event) {
        event.preventDefault()
        const name = document.getElementById("name").value
        const rating = document.getElementById("rating").value
        const comment = document.getElementById("comment").value
        const reviewObject = {
            _type: "review",
            name: name,
            rating: Number(rating),
            comment: comment
        }

        writeClient.path(id).setIfMissing({reviews: []})
        .append('reviews', [reviewObject]).commit({autoGenerateArrayKeys: true})
        .then((r) => {console.log ("Vurdering lagret")})
        .catch((error) => {console.log("noe feilet: ", error.message)})

        console.log(reviewObject)
    }
   
    return (
        <article>
            <h2>{show?.title}</h2>
            <ul>
                {show?.reviews?.map((r, i) => <li key={i}>
                    <p>{r.name} | Vurdering: {r.rating}</p>
                    {r.comment ? <p>{r.comment}</p> 
                    : null }</li>)}
            </ul>
            <>
            <form>
                <p>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                </p>
                <p>
                    <label htmlFor="rating">Vurdring</label>
                    <select name="rating" id="rating" >
                        <option value="1"></option>
                    </select>
                </p>
                <p>
                    <label htmlFor="comment">Kommentar</label>
                    <textarea name="comment" id="comment"></textarea>
                </p>
                <button onClick={saveReview}>Lagre vurdering</button>
            </form>
            </>
        </article>
    )
}