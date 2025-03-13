function Menu({ monsters, onSelect }) {

    return (
        <div>
            <ul>
                {monsters.map((monster, index) => (
                    <li key={index}onClick={() => onSelect(monster)}>
                        {monster.name}   
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;