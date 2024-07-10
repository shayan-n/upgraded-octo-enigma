import { faIR } from '@mui/x-date-pickers/locales';
import { faIR as fa } from "date-fns/locale/fa-IR";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from "@mui/x-date-pickers";
import TestDatePicker from "../components/TestDatePicker";
import { Box } from '@mui/material';

// import jMoment from "moment-jalaali";
// import JalaliUtils from "@date-io/jalaali";

// import PersianUtils from 'material-ui-persian-date-picker-utils';

// import utils from "material-ui-pickers-jalali-utils";

const faLocale = faIR.components.MuiLocalizationProvider.defaultProps.localeText;

// jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });

export default function Main() {
    return (
        <Box sx={{ padding: "2rem" }}>
            <LocalizationProvider 
                adapterLocale={fa}
                // utils={utils} 
                localeText={faLocale} 
                dateAdapter={AdapterDateFns} 
            >
                <TestDatePicker 
                    label={"تاریخ"}
                    value={""}
                    setValue={(date) => {}}
                />
            </LocalizationProvider>
        </Box>
    );
}