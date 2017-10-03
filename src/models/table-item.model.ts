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

export interface TableColumn extends Array<TableItem> {}

export interface TableData extends Array<TableColumn> {}
