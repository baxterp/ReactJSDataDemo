import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

function handleDate(date) {
        alert(date);
}

class DateTimePicker extends React.Component {
    render() {
        return <Datetime dateFormat="YYYY-MM-DD" timeFormat={false} input={false} onChange={handleDate} />;
    }

}
  
export default DateTimePicker;