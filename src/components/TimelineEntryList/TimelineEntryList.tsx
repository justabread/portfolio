import { ReactNode } from "react";
import { MonthYear } from "../../utils/dateUtils";

import styles from "./styles";

type TimelineEntryDate = { from: MonthYear; to?: MonthYear };

interface TimelineEntryListProps {
  title: string;
  rows: {
    date: TimelineEntryDate;
    description: ReactNode;
  }[];
  noDivider?: boolean;
}

const TimelineEntryList = ({
  title,
  rows,
  noDivider,
}: TimelineEntryListProps) => {
  return (
    <div className="cvElement">
      {title}
      {noDivider ? null : <hr />}
      <div css={styles.listContainer}>
        {rows.map((row, index) => (
          <div css={styles.listRow} key={index}>
            <div css={styles.listRowElement}>{`${row.date.from.formatted} - ${
              row.date.to ? row.date.to.formatted : "Ongoing"
            }`}</div>
            <div css={styles.listRowElement}>{row.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineEntryList;
