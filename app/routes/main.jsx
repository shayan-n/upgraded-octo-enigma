// import {faIR} from '@mui/x-date-pickers/locales';
// import {AdapterDateFnsJalali} from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import DatePicker from "../components/TestDatePicker";
import { faIR} from "date-fns/locale/fa-IR";
// import PersianUtils from 'material-ui-persian-date-picker-utils';

// const faLocale = faIR.components.MuiLocalizationProvider.defaultProps.localeText;

export default function Main() {
    return (
        <>
            <LocalizationProvider 
                adapterLocale={faIR}
                // utils={PersianUtils} 
                // localeText={faLocale} 
                dateAdapter={AdapterDateFns} 
            >
                <DatePicker 
                    label={"date"}
                    value={""}
                    setValue={(date) => {}}
                />
            </LocalizationProvider>
        </>
    );
}