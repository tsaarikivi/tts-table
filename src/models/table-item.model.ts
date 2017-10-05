export interface TableItem {
  startTime: Date | number;
  endTime: Date | number;
  row: number;
  title?: string;
  tooltipText?: string;
  highlighted?: boolean;
  disabled?: boolean;
  selected?: boolean;
}
export type TableColumn = TableItem[];
export type TableData = TableColumn[];
