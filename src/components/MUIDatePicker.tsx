import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

interface MUIDatePickerProps {
  disabled: boolean;
  onChange: () => void;
  onAccept: () => void;
  inputRef: React.Ref<HTMLInputElement> | undefined;
  defaultValue: Dayjs | null | undefined;
}

const SX_PROPS = {
  '& .MuiInputBase-root': {
    width: '100%',
    backgroundColor: 'var(--color-light--3)',
    borderRadius: '5px',
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    outline: '4px solid var(--color-primary--0)',
    backgroundColor: '#fff',
  },
  '& .MuiInputBase-input': {
    padding: '0.8rem 1.2rem',
    fontFamily: 'inherit',
    fontSize: '1.6rem',
    border: 'none',
    transition: 'all 0.2s',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};

function MUIDatePicker({
  disabled,
  onChange,
  onAccept,
  inputRef,
  defaultValue,
}: MUIDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        disabled={disabled}
        onChange={onChange}
        onAccept={onAccept}
        inputRef={inputRef}
        defaultValue={defaultValue}
        sx={SX_PROPS}
      />
    </LocalizationProvider>
  );
}

export default MUIDatePicker;
