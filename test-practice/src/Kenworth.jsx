function Kenworth(details) {

    const model = details.model;
    const tagline = details.tagline;
    const abstract = details.abstract;

    return(
        <div className="card">
            <div className="card-body">
                <h5>{model}</h5>
                <p className="card-text">{tagline}</p>
                <p className="card-text">{abstract}</p>
                <button className="btn btn-secondary">More...</button>
            </div>
        </div>
    ); 

}

export default Kenworth;