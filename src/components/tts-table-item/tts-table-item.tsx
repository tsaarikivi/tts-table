import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { TableItem } from '../../models/table-item.model';

@Component({
  tag: 'tts-table-item',
  styleUrl: 'tts-table-item.scss'
})
export class TtsTableItem {
  @Prop() tableItemData: TableItem;

  @Event() tableItemSelected: EventEmitter;

  getItemClass = (): string => {
    const { tableItemData: { unavailable, free, selected } } = this;
    let itemClass = 'table-item';
    if (unavailable) {
      return (itemClass += ' unavailable');
    } else if (selected) {
      return (itemClass += ' selected');
    } else if (free) {
      return (itemClass += ' free');
    }
    return itemClass;
  };

  handleClick = (): void => {
    const { tableItemData } = this;
    if (!tableItemData.unavailable) {
      this.tableItemSelected.emit(tableItemData);
    }
  };

  render() {
    return (
      <div class={this.getItemClass()} onClick={() => this.handleClick()}>
        {this.tableItemData.title}
        <slot name="tooltip">{this.tableItemData.tooltipText}</slot>
      </div>
    );
  }
}
