export interface RangePickerProps {
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  onChange: (date: { startDate: Date; endDate: Date }) => void;
}
