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
    const { tableItemData: { disabled, highlighted, selected } } = this;
    let itemClass = 'table-item';
    if (disabled) {
      return (itemClass += ' disabled');
    } else if (selected) {
      return (itemClass += ' selected');
    } else if (highlighted) {
      return (itemClass += ' highlighted');
    }
    return itemClass;
  };

  handleClick = (): void => {
    const { tableItemData } = this;
    if (!tableItemData.disabled) {
      this.tableItemSelected.emit(tableItemData);
    }
  };

  render() {
    return (
      <div class={this.getItemClass()} onClick={() => this.handleClick()}>
        {this.tableItemData.title}
        <slot name="tooltip">{this.tableItemData.title}</slot>
      </div>
    );
  }
}
