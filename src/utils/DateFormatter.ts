export class DateFormatter {
  static getInputValueFromDate = (value: Date) => {
    if (!value) return '';
    const dateValue = value.getDate();
    const date = String(dateValue).padStart(2, '0');

    const monthValue = value.getMonth() + 1;
    const month = String(monthValue).padStart(2, '0');

    const year = value.getFullYear();

    return `${date}/${month}/${year}`;
  };
}
