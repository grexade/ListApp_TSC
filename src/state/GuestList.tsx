// import { link } from "fs";
import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);

    }

    return (
    <div>
        <h3>Guest List</h3>

        <ul>
            {guests.map(guests => <li key = {guests}>{guests}</li>) }
        </ul>

        <input type="text" value = {name} onChange={(e) => setName(e.target.value)} />
        <button onClick = {onClick}>Add Guest</button>
    </div>
)
};

export default GuestList;