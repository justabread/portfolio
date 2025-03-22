export type MonthYear = {
  date: Date;
  formatted: string;
};

const formatMonthYear = (date: Date): string => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${month}/${year}`;
};

export const createMonthYear = (month: number, year: number): MonthYear => {
  const date = new Date(year, month - 1);

  return {
    date,
    formatted: formatMonthYear(date),
  };
};
