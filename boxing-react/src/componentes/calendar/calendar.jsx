import Form from "react-bootstrap/Form";
import React, { useState } from 'react';

export const Calendar = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className="container-fluid" style={{ width: "10%" }}>
        <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
        </div>
    );
}