import "./styleFilimoBox.css"

export default function Movielist(props){
    function renderFarm() {
        return props.data.list.map(function(movie, i) {
            return(
                <li key={i}>
                    <a href={movie.linkUrl}>
                        <img src={movie.image} />
                        <h3>{movie.title}</h3>
                    </a>
                </li>
            )
        })
    }
    return (
        <div className="vertical-padding">
            <div className="container">
                <h1 className="title">{props.data.title}</h1>
                <ul>
                    {renderFarm()}
                </ul>
            </div>
        </div>
    )
}