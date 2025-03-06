function Coffee(order){

    const customer = order.customer
    const cSize = order.cSize;
    const cType = order.cType;
    const cMilk = order.cMilk;

    return(
        <div className="card">
            <div className="card-body">
                <h5>{customer}</h5>
                <p className="card-text">Coffee Size: {cSize}</p>
                <p className="card-text">Coffee Type: {cType}</p>
                <p className="card-text">Milk Type: {cMilk}</p>
            </div>
        </div>
    );
}

export default Coffee; 