import React from "react";
import FilmItem from "../filmItem/FilmItem";

function FilmList(props) {
    return (
        <div>
            {props.filmItems.map((filmItem) => (
                <div>
                    <FilmItem filmInfo={filmItem} key={filmItem.id} />
                </div>
            ))}
        </div>
    );
}

export default FilmList;
