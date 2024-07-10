import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

export default function TestDatePicker(props) {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());

    const handleDateChange = (date) => {
    };
    
    return (
        <div style={{position: 'relative'}} className={props.w100 ? 'w-100' : ""}>
            <DatePicker
                localeText={{
                    okButtonLabel: "correct",
                }}
                label={props.label}
                slotProps={{textField: {placeholder: props.label}}}
                value={new Date()}
                onChange={(newValue) => handleDateChange(newValue)}
                className={props.w100 ? 'w-100' : ""}
                ampm={"false"}
                disabled={props.disabled}
                format="dd/MM/yyyy"
            ></DatePicker>
        </div>
    );
}
