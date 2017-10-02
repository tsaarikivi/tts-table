import { Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import {
  TableData,
  TableColumn,
  TableItem
} from '../../models/table-item.model';

@Component({
  tag: 'tts-table',
  styleUrl: 'tts-table.scss'
})
export class TtsTable {
  @Prop() tableData: TableData;
  @Prop() rows?: number;

  @Event() tableItemSelected: EventEmitter;

  @Listen('itemSelected')
  handleItemSelected(event: CustomEvent) {
    this.tableItemSelected.emit(event.detail);
  }

  paddTableDataTo = (rows: number): TableData => {
    const ret = [];

    const { tableData } = this;
    for (let columnData of tableData) {
      ret.push(this.paddColumnDataTo(columnData, rows));
    }

    return ret;
  };

  paddColumnDataTo = (columnData: TableColumn, rows: number): TableColumn => {
    const ret = [];

    for (let row = 1; row <= rows; row++) {
      ret.push(this.getColumnWithRow(columnData, row));
    }

    return ret;
  };

  getColumnWithRow = (columnData: TableColumn, row: number): TableItem => {
    const filtered = columnData.filter(tableItem => tableItem.row === row);

    if (filtered.length > 0) {
      return filtered[0];
    }

    const [{ startTime, endTime }] = columnData;
    const freeTableItem: TableItem = {
      startTime,
      endTime,
      row,
      free: true
    };
    return freeTableItem;
  };

  getLongestColumnLength = (): number => {
    const { rows, tableData } = this;
    if (rows) {
      return rows;
    }

    let len = 0;
    for (let columnData of tableData) {
      for (let item of columnData) {
        if (item.row > len) {
          len = item.row;
        }
      }
    }
    return len;
  };

  render() {
    const longestColumnLength = this.getLongestColumnLength();
    const tableData = this.paddTableDataTo(longestColumnLength);

    return [
      <tts-side-column rows={longestColumnLength} />,
      tableData.map(tableColumnData => (
        <tts-table-column tableColumnData={tableColumnData} />
      ))
    ];
  }
}
