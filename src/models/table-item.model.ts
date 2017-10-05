export interface TableItem {
  startTime: Date | number;
  endTime: Date | number;
  row: number;
  title?: string;
  tooltipData?: Tooltip[];
  highlighted?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

export interface Tooltip {
  type: string;
  value: string;
}

export type TableColumn = TableItem[];

export type TableData = TableColumn[];
