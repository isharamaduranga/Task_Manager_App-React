import * as React from 'react';
import dayjs from 'dayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

const startOfQ12023 = dayjs('2023-01-01T00:00:00.000');
const endOfQ12025 = dayjs('2025-01-01T23:59:59.999');
export default function DatePickerValue(props) {
    const {label, name, value, onChange,helperText} = props;

    const [error, setError] = React.useState(null);

    const errorMessage = React.useMemo(() => {
        switch (error) {
            case 'maxDate':
            case 'minDate': {
                return 'Please select a date in the first quarter of 2023';
            }

            case 'invalidDate': {
                return 'Your date is not valid';

            }

            default: {
                return '';
            }
        }
    }, [error]);

    const handleDateChange = (newValue) => {
        // Convert the selected date to a string
        const dateString = newValue.format('MM-DD-YYYY');

        // Update the formik form state with the new value
        onChange({target: {name, value: dateString}});



    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                    label={label}
                    value={value ? dayjs(value) : null}
                    onChange={handleDateChange}
                    onError={(newError) => setError(newError)}
                    slotProps={{
                        textField: {
                            helperText: errorMessage,
                        },
                    }}
                    minDate={startOfQ12023}
                    maxDate={endOfQ12025}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
