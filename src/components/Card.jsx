import React from "react"

export default function Card(props) {
    const item = props.item;

    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }



    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/images/${item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="/images/star.png" className="card--star" />
                <span>{item.stats.rating}</span>
                <span className="gray">({item.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p>{item.title}</p>
            <p><span className="bold">From ${item.price}</span> / person</p>
        </div>
    )
}