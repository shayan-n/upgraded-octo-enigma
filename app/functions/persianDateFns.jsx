// import dayjs from 'dayjs';
// import jalaliday from 'dayjs/plugin/calendar';
// // import faLocale from 'dayjs/locale/fa';
// // import {addDays, format} from 'date-fns-jalali'

// dayjs.extend(jalaliday);

// // dayjs.locale('fa', faLocale);


// const persianMonths = [
//     'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
//     'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
// ];

// // Register custom Persian month names


// const monthAbbreviations = {
//     'فروردین': 'فرو',
//     'اردیبهشت': 'ارد',
//     'خرداد': 'خرد',
//     'تیر': 'تیر',
//     'مرداد': 'مرد',
//     'شهریور': 'شهر',
//     'مهر': 'مهر',
//     'آبان': 'آبا',
//     'آذر': 'آذر',
//     'دی': 'دی',
//     'بهمن': 'بهم',
//     'اسفند': 'اسف',
// };
// export const getNextTenPersianDates = () => {
//     const today = new Date();
//     const dates = [];

//     for (let i = 0; i < 10; i++) {
//         const date = addDays(today, i);
//         const persianDate = format(date, 'dd MMMM yyyy')
//             .replace(format(date, 'MMMM'), (match) => monthAbbreviations[match]);
//         dates.push(persianDate);
//     }

//     return dates;
// }

// export const PersianMonths = () => {
//     const nextTenDays = getNextTenPersianDates();

//     return (
//         <div>
//             {nextTenDays.map((date, index) => (
//                 <p key={index}>{date}</p>
//             ))}
//         </div>
//     );
// }

// export const formatDate = (date) => {
//     return format(new Date(date), 'dd MMMM yyyy')
//     // return dayjs(date).locale('fa').format('DD MMM YYYY');
// };
// export const formatDayOfWeek = (date) => {
//     return format(new Date(date), 'EEEE')
// };

// export const dataBaseFormat = (date) => {

//     return `${date.$y}-${date.$M}-${date.$D}T00:00:00.000Z`;

//     // return date
// }
// export const dataBaseFormatM = (date) => {
//     return date.$d.toISOString().slice(0, 23)
// }
// export const enIso = (date) => {
//     return dayjs(date).format('YYYY-MM-DDTHH:mm:ss[Z]'); // Get ISO string
// }
// export const convertToSQLDateTime = (dateString, trimSeconds) => {
//     const date = new Date(dateString);
//     const year = date.getUTCFullYear();
//     let day
//     const month = String(date.getUTCMonth() + 1).padStart(2, '0');
//     day = String(date.getUTCDate()).padStart(2, '0');
//     if (!trimSeconds) {
//         day = String(date.getUTCDate() + 1).padStart(2, '0');
//     }
//     return `${year}-${month}-${day}T00:00:00.000Z`;
// }
// export const convertToSQLDateOnly = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getUTCFullYear();
//     const month = String(date.getUTCMonth() + 1).padStart(2, '0');
//     const day = String(date.getUTCDate()).padStart(2, '0');

//     return `${year}-${month}-${day}`;
// }
// export const convertToSQLDateTimeEndOfDay = (dateString, trimSeconds = false,) => {
//     const date = new Date(dateString);
//     const year = date.getUTCFullYear();
//     const month = String(date.getUTCMonth() + 1).padStart(2, '0');
//     const day = String(date.getUTCDate()).padStart(2, '0');
//     return `${year}-${month}-${day}T00:00:00.000Z`;
// }
// export const convertToSQLDate = (dateString, yesterday, addOne) => {
//     const date = new Date(dateString);
//     const year = date.getUTCFullYear();
//     const month = String(date.getUTCMonth() + 1).padStart(2, '0');
//     let day;
//     if (yesterday) {
//         const yesterday = new Date(date);
//         yesterday.setDate(date.getDate() - 1);
//         day = String(yesterday.getUTCDate()).padStart(2, '0');
//         return `${year}-${month}-${day}T06:00:00.000Z`;
//     } else if(addOne) {
//         day = String(date.getUTCDate() + 1).padStart(2, '0');
//         // console.log(date, day)
//         return `${year}-${month}-${day}`;
//     } else {
//         day = String(date.getUTCDate()).padStart(2, '0');
//         // console.log(date, day)
//         return `${year}-${month}-${day}`;
//     }
// }
// export const trimTimeSpanSeconds = (ts) => {
//     let parts = ts.split(':')
//     return `${parts[0].padStart(2, '0')}:${parts[1].padStart(2, '0')}:00`;
// }

// export const getDefaultFormat = (dateStringFromSqlServer) => {

// // Creating a Day.js object from the SQL Server date string
//     const dayjsDate = new Date(dateStringFromSqlServer).toLocaleDateString();
//     if (!dayjsDate) return;

//     return dayjsDate.format("YYYY/MM/DD");
// }
// export const getDefaultFormatWTime = (dateStringFromSqlServer) => {

//     const dayjsDate = new Date(dateStringFromSqlServer).toLocaleDateString();
//     if (!dayjsDate) return;

//     return format(new Date(dayjsDate), "yyyy/MM/dd - HH:mm")
// }
// export const getDefaultFormatTimeBased = (dateStringFromSqlServer) => {

//     const dayjsDate = dayjs(dateStringFromSqlServer);
//     if (!dayjsDate) return;

//     return dayjsDate.format("YYYY/MM/DD - HH:mm");
// }

// export const convertToPersianTime = (sqlDateTime) => {
//     // Assuming the SQL datetime is in this format: "2023-11-16T14:30:00Z"
//     const dayjsDate = new Date(sqlDateTime)

//     return dayjsDate;
// };
// export const getDefaultEnFormat = (dateStringFromSqlServer) => {
//     const dayjsDate = dayjs(dateStringFromSqlServer).locale('en').$d;
//     const formattedDate = dayjs(dayjsDate, 'YYYY-MM-DD');
//     return formattedDate;
// }


// export const getCurrentDateTime = () => {
//     const currentDate = new Date();
//     const formattedDate = currentDate.toLocaleString();

//     return formattedDate;
// };


// export const getDefaultDateTimeFormat = (dateStringFromSqlServer) => {
//     const dayjsDate = dayjs(dateStringFromSqlServer);

//     if (!dayjsDate) return;

//     return dayjsDate.format("YYYY/MM/DD - HH:mm");
// }

// export const getDefaultDateTimeFormatPersianTime = (dateStringFromSqlServer) => {
//     if (!dateStringFromSqlServer) {
//         return dayjs().format("YYYY/MM/DD - HH:mm")
//     }
//     const dayjsDate = dayjs(dateStringFromSqlServer);

//     if (!dayjsDate) return;

//     return dayjsDate.format("YYYY/MM/DD - HH:mm");
// }


// export const extractHourAndMinute = (dateStringFromSqlServer) => {
//     const dayjsDate = dayjs(dateStringFromSqlServer);

//     if (!dayjsDate.isValid()) return; // Check if the date is valid

//     return dayjsDate.format("HH:mm"); // Format to display only hour and minute
// }
// export const convertTimeFormat = (timeString, trim) => {
//     const today = new Date(timeString);
//     const hours = today.getHours().toString().padStart(2, '0');
//     const minutes = today.getMinutes().toString().padStart(2, '0');

//     if (trim) {
//         return `${hours}:${minutes}`;
//     }
//     return `${hours}:${minutes}:00`;
// };

// export const minutesToDbFormat = (time) => {
//     const extractedMinutes = parseInt(time);

//     const hours = Math.floor(extractedMinutes / 60);
//     const minutes = extractedMinutes % 60;

// // Pad the hours and minutes with leading zeros if needed
//     const formattedHours = String(hours).padStart(2, '0');
//     const formattedMinutes = String(minutes).padStart(2, '0');

//     return `${formattedHours}:${formattedMinutes}:00`;

// }

// export const hoursToDbFormat = (time) => {
//     const extractedHours = parseInt(time);

//     // Pad the hours with leading zeros if needed
//     const formattedHours = String(extractedHours).padStart(2, '0');

//     return `${formattedHours}:00:00`;
// }

// export const convertTimeToPersianMinutes = (timeString, con) => {
//     if (!con) {
//         const [hours, minutes] = timeString.split(':').map(Number);
//         const totalMinutes = hours * 60 + minutes;
//         return `${totalMinutes} دقیقه`;
//     } else {
//         if (!timeString || timeString === '') return '00:00'
//         const [hours, minutes] = timeString.split(':').map(Number);
//         const totalMinutes = hours * 60 + minutes;
//         return `${hours.toString().length === 1 ? `0${hours}` : `${hours}`}:${minutes.toString().length === 1 ? `0${minutes}` : `${minutes}`}`
//     }
// };
// export const timeToMin = (timeString, con) => {
//     const [hours, minutes] = timeString.split(':').map(Number);
//     const totalMinutes = hours * 60 + minutes;
//     return `${totalMinutes}`;

// };

// export const convertTimeStringToDate = (timeString) => {
//     const [hours, minutes, seconds] = timeString.split(':').map(Number);

//     // Get today's date
//     const today = new Date();
//     const year = 2024; // Change this to the desired year
//     const month = 0; // Month is 0-indexed (0 = January)
//     const day = 1; // Day of the month

//     // Set the time from the provided string
//     const dateWithTime = new Date(year, month, day, hours, minutes, seconds);

//     return dateWithTime;
// };


// export const convertDbTime = (time, con) => {
//     if (con) {
//         return time.substring(11, 16)

//     }
//     const formattedTime = time.substring(0, 5)
//     return formattedTime
// }
// export const convertDbHour = (time) => {
//     const formattedTime = time.substring(0, 2)
//     return formattedTime
// }

// export const convertDbHourToNonZero = (time) => {
//     const date = new Date(`2023-01-01T${time}`);
//     const hour = date.getHours().toString();

//     return hour;

// }
// const formatDateForSQL = (inputDate) => {
//     const formattedDate = dayjs(inputDate).format('YYYY-MM-DDTHH:mm:ss[Z]');
//     return formattedDate;
// };


// export const formatToMDatePicker = (sql, tehran) => {

//     const sqlDate = sql; // SQL date
//     const secondDate = tehran; // Second date

//     const parsedSqlDate = new Date(sqlDate);

// // Extract hour and minute from the second date
//     const [, hour, minute] = secondDate.match(/(\d{2}):(\d{2})/);
//     parsedSqlDate.setHours(parseInt(hour));
//     parsedSqlDate.setMinutes(parseInt(minute));

//     let numberHour = parseInt(hour)
//     let numberMin = parseInt(minute)


// // Parse the English datetime
//     const parsedEnglish = new Date(sql);
//     const englishYear = parsedEnglish.getFullYear();
//     const englishMonth = parsedEnglish.getMonth() + 1; // Months are zero-based
//     const englishDay = parsedEnglish.getDate();

// // Parse the Persian datetime
// //     const persianHours = parsedPersian.getHours();
// //     const persianMinutes = parsedPersian.getMinutes();
// //     const persianSeconds = parsedPersian.getSeconds();

//     return `${englishYear}-${englishMonth}-${englishDay}T${numberHour.toString().length === 1 ? `0${numberHour}` : `${numberHour}`}:${numberMin.toString().length === 1 ? `0${numberMin}` : `${numberMin}`}:00.000Z`;
// }
// export const formatJalaliDate = isoDate => {
//     const formattedDate = dayjs(isoDate).locale('fa').format('YYYY/MM/DD HH:mm');
//     return formattedDate;
// };
// export const convertDateFormat = (inputDate) => {
//     const date = new Date(inputDate);

//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');

//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');

//     const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;
//     return formattedDate;
// };
// export const convertDateFormatToFixedTiming = (inputDate, h, m) => {
//     const date = new Date(inputDate);

//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');

//     const formattedDate = `${year}-${month}-${day}T${h}:${m}:00.000Z`;
//     return formattedDate;
// };

// export const getDefaultFormatWTimeAlt = (dateStringFromSqlServer, con, isComplex) => {

//     // const teh = format(new Date(dateStringFromSqlServer), 'HH:mm')
//     // const date = new Date(dateStringFromSqlServer)
//     // console.log(date)
//     // const parsedSqlDate = new Date().toLocaleDateString();
//     const date = dateStringFromSqlServer
//     const timeZone = "Asia/Tehran";


//     const utcDate = new Date(dateStringFromSqlServer)
//     let time
//     if (isComplex) {
//         time = ''
//     } else if (con) {
//         const numberHour = String(utcDate.getHours()).padStart(2, '0');
//         const numberMin = String(utcDate.getMinutes()).padStart(2, '0');
//         time = `${numberHour.toString().length === 1 ? `0${numberHour}` : `${numberHour}`}:${numberMin.toString().length === 1 ? `0${numberMin}` : `${numberMin}`}`
//     } else {
//         time = utcDate.toISOString().split('T')[1].toString().split(':00')[0]
//     }
//     let zonedDate
//     if (isComplex) {
//         zonedDate = format(utcDate, 'yyyy/MM/dd')
//     } else {
//         zonedDate = format(utcDate, 'yyyy/MM/dd') + " - " + time
//     }
//     return zonedDate
// }
// export const formatToMDatePickerInit = (tehran) => {

//     const secondDate = tehran; // Second date

//     const parsedSqlDate = new Date();

// // Extract hour and minute from the second date
//     const [, hour, minute] = secondDate.match(/(\d{2}):(\d{2})/);
//     parsedSqlDate.setHours(parseInt(hour));
//     parsedSqlDate.setMinutes(parseInt(minute));

//     let numberHour = parseInt(hour)
//     let numberMin = parseInt(minute)


// // Parse the English datetime
//     const parsedEnglish = parsedSqlDate;
//     const englishYear = parsedEnglish.getFullYear();
//     const englishMonth = parsedEnglish.getMonth() + 1; // Months are zero-based
//     const englishDay = parsedEnglish.getDate();

// // Parse the Persian datetime
// //     const persianHours = parsedPersian.getHours();
// //     const persianMinutes = parsedPersian.getMinutes();
// //     const persianSeconds = parsedPersian.getSeconds();

//     return `${englishYear}-${englishMonth}-${englishDay}T${numberHour.toString().length === 1 ? `0${numberHour}` : `${numberHour}`}:${numberMin}:00.000Z`;
// }

// export const convertToTextMonth = (sqlDbTime) => {
//     if (!sqlDbTime) return
//     const utcDate = dayjs(sqlDbTime);

// // Convert to Persian calendar
//     const formattedDate = utcDate.format('DD MMMM YYYY');

// // Define mapping for English to Persian month names
//     const monthMapping = {
//         Farvardin: 'فروردین',
//         Ordibihesht: 'اردیبهشت',
//         Khordad: 'خرداد',
//         Tir: 'تیر',
//         Mordad: 'مرداد',
//         Shahrivar: 'شهریور',
//         Mehr: 'مهر',
//         Aban: 'آبان',
//         Azar: 'آذر',
//         Dey: 'دی',
//         Bahman: 'بهمن',
//         Esfand: 'اسفند'
//     };

// // Replace English month names with Persian
//     const persianDate = Object.keys(monthMapping).reduce(
//         (acc, month) => acc.replace(month, monthMapping[month]),
//         formattedDate
//     );

//     return persianDate
// }

// export const convertToPersianDateString = (georgianDate) => {
//     if (!georgianDate) {
//         return format(new Date(), 'yyyy/MM/dd')
//     }
//     return format(new Date(georgianDate), 'yyyy/MM/dd')
// };
// export const convertToPersianDateStringEnd = (georgianDate) => {
//     if (!georgianDate) {
//         return format(new Date(), 'yyyy/MM/dd')
//     }
//     const date = new Date(georgianDate);
//     date.setDate(date.getDate());

//     return format(date, 'yyyy/MM/dd');
// };
// export const convertToPersianDate = (georgianDate, hideYear) => {
//     const weekday = format(georgianDate, 'EEEE');

//     if (hideYear) {
//         return format(georgianDate, 'EEEE') + " " + format(georgianDate, 'dd MMMM');
//     }
//     return format(georgianDate, 'EEEE') + " " + format(georgianDate, 'dd MMMM yyyy');
// };

// export const getGeorgianDate = (gDate) => {
//     let temp = gDate.toString().split('T')[0]
//     return temp
// }