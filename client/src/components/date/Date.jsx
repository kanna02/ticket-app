import DatePicker from 'react-date-picker';
import './Date.css';
import 'react-calendar/dist/Calendar.css';

export default function Date(props) {
    return(
        <DatePicker onChange={props.setValue} value={props.value} className="input-date" format="y-MM-dd"/>
    );
}