import "./styleMovieItem.css"

export default function MovieItem(props){
    function renderFarm() {
        return props.data.list.map(function(movie, index) {
            return(
                <li key={index}>
                    <a href={movie.link}>
                        <img src={movie.imageUrl} />
                    </a>
                </li>
            )
        })
    }
    return (
        <div className="vertical-padding movie-item">
            <div className="container">
                <h1 className="title">{props.data.title}</h1>
                <ul>
                    {renderFarm()}
                </ul>
            </div>
        </div>
    )
}