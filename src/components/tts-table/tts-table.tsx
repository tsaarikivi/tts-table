import { Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import { TableData } from '../../models/table-item.model';

@Component({
  tag: 'tts-table',
  styleUrl: 'tts-table.scss'
})
export class TtsTable {
  @Prop() tableData: TableData;

  @Event() tableItemSelected: EventEmitter;

  @Listen('itemSelected')
  handleItemSelected(event: CustomEvent) {
    this.tableItemSelected.emit(event.detail);
  }

  render() {
    return [
      <tts-side-column rows={this.tableData[0].length} />,
      this.tableData.map(tableColumnData => (
        <tts-table-column tableColumnData={tableColumnData} />
      ))
    ];
  }
}
