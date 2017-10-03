export interface TableItem {
  startTime: Date | number;
  endTime: Date | number;
  row: number;
  title?: string;
  tooltipText?: string;
  free?: boolean;
  unavailable?: boolean;
  selected?: boolean;
}

export interface TableColumn extends Array<TableItem> {}

export interface TableData extends Array<TableColumn> {}
