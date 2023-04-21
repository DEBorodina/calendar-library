export interface DateInputProps {
  onFocus: () => void;
  onBlur: (inputValue?: string) => void;
  onChange: (inputValue?: string) => void;
  onToggle: () => void;
  value: string;
}
