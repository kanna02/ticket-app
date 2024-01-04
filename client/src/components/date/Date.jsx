import DatePicker from 'react-date-picker';
import './Date.css';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';



export default function Date(props) {
    const [value, setValue] = useState(null);

    console.log(value);


    return(
        <DatePicker onChange={setValue} value={value} className="input-date" />
    );
}