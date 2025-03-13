/* eslint-disable react/prop-types */


function Monster({ selectedMonster }) {
  return (
    <div className="container border p-3 rounded shadow">
      <h1 className="display-5">{selectedMonster.name}</h1>
      <p className="text-center">
        <img
          src={selectedMonster.image}
          alt={selectedMonster.name}
          className="rounded img-fluid"
        />
      </p>
      <p><strong>Location: </strong>{selectedMonster.location}</p>
      <p><strong>Films: </strong>{selectedMonster.films}</p>
      
    </div>
  );
}

export default Monster;