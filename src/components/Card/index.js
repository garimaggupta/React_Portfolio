import React from "react"

const styles = {
    width: "18rem;"
}

function Card(props) {

    return (

        <div className="card" style={styles}>
            <a href={props.applink}>
                <img className="img-fluid" src={props.imgsrc} alt="App Thumbnail" />
            </a>
            <div className="card-body">
                <h5 className="card-title">{props.appname}</h5>
                <p className="card-text p-block">{props.appdesc}</p>
            </div>
            <div className="card-body">
                <a href={props.githubrepo} className="card-link">Github Repo</a>
            </div>
        </div>

    )
}

export default Card;