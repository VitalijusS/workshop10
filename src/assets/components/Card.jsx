import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { GiDogHouse } from "react-icons/gi"

export function Card() {
    const [heart, setHeart] = useState(false);
    const [likes, setLikes] = useState(0);
    function handleHeart() {
        if (!heart) {
            setHeart(true);
            setLikes(prev => prev + 1)
        } else {
            setHeart(false)
            setLikes(prev => prev - 1)
        }
    }


    return (
        <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "200px" }}>
            <p>Likes: <span>{likes}</span></p>
            <div>
                <p><GiDogHouse /> Like my dog</p>
                <img onDoubleClick={handleHeart} src="https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg?wp=1&w=204&h=204" alt="dog" />
                <button onClick={handleHeart} style={heart ? { color: "red" } : { color: "black" }}> <FaHeart /></button>
            </div>
        </div >
    )
}