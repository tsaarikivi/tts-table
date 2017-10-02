import { Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import { TableColumn } from '../../models/table-item.model';
import { getShortTimeString } from '../../helpers/time';

@Component({
  tag: 'tts-table-column',
  styleUrl: 'tts-table-column.scss'
})
export class TtsTableColumn {
  @Prop() tableColumnData: TableColumn;

  @Event() columnItemSelected: EventEmitter;

  @Listen('itemSelected')
  handleItemSelected(event: CustomEvent) {
    this.columnItemSelected.emit(event.detail);
  }

  getColumnTitle = (): string => {
    const [{ startTime, endTime }] = this.tableColumnData;
    return getShortTimeString(startTime, endTime);
  };

  render() {
    const columnTitle = this.getColumnTitle();

    return (
      <div>
        <div class="table-column-title">{columnTitle}</div>
        {this.tableColumnData.map(tableItemData => (
          <tts-table-item tableItemData={tableItemData} />
        ))}
      </div>
    );
  }
}
