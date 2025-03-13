/* eslint-disable react/prop-types */
function Menu({ monsters, onSelect }) {
  return (

    // Original code for the Nav Items
    // <nav className="navbar navbar-expand-lg bg-body-tertiary text-white">
    //   <div className="container-fluid">
    //     <ul className="navbar-nav p-3">
    //       {monsters.map((monster, index) => (
    //         <button
    //           key={index}
    //           onClick={() => onSelect(monster)}
    //           className="nav-item m-2 p-3 btn btn-secondary text-white shadow">{monster.name}</button>
    //       ))}
    //     </ul>
    //   </div>
    // </nav>

    <nav className="navbar bg-body-tertiary">
        <div className="container">
        {monsters.map((monster, index) => (
            <button
              key={index}
              onClick={() => onSelect(monster)}
              className="nav-item m-2 p-3 btn btn-secondary text-white shadow">{monster.name}</button>
          ))}
        </div>
    </nav>
  );
}

export default Menu;
