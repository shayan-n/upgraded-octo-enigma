import React, {Suspense, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import jMoment from "moment-jalaali";
import {MobileDateTimePicker} from "@mui/x-date-pickers";
import {faIR} from '@mui/x-date-pickers/locales';
import jalaliday from 'jalaliday'
import 'moment/locale/fa';
// import PersianUtils from 'material-ui-persian-date-picker-utils';
// import {
//     convertDateFormat,
//     dataBaseFormat, dataBaseFormatM,
//     formatToMDatePicker,
//     getDefaultDateTimeFormatPersianTime
// } from "../functions/persianDateFns.jsx";
// import {format} from "date-fns-jalali";

// const faLocale = faIR.components.MuiLocalizationProvider.defaultProps.localeText;

// jMoment.loadPersian({dialect: "persian-modern", usePersianDigits: true});

export default function GDateTimePickerEl(props) {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());

    const handleDateChange = (date) => {
        // console.log(convertDateFormat(new Date(date).toLocaleString()))
        //     if (props.setValue) {
        //         props.setValue(convertDateFormat(new Date(date).toLocaleString()))
        //     }
    };

    useEffect(() => {
        if(props.value) setSelectedDateTime(props.value)
    }, [props.value]);
    
    return (
        <Suspense fallback={<></>}>
            <div style={{position: 'relative'}} className={props.w100 ? 'w-100' : ""}>
                <label className={`date-label`}>{props.label}</label>
                <DatePicker
                    localeText={{
                        okButtonLabel: "correct",
                    }}
                    label={props.label}
                    slotProps={{textField: {placeholder: props.label}}}
                    value={new Date()}
                    onChange={(newValue) => handleDateChange(newValue)}
                    className={props.w100 ? 'w-100' : ""}
                    ampm={false}
                    disabled={props.disabled}
                    format="dd/MM/yyyy"
                ></DatePicker>
            </div>
        </Suspense>
    );
}
