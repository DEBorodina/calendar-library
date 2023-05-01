export interface DateInputProps {
  handlePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  handleChange: (inputValue: Date) => void;
  value: Date;
  minDate?: Date;
  maxDate?: Date;
  setErrors: React.Dispatch<React.SetStateAction<string>>;
}
