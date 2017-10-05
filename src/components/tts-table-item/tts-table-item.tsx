import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { TableItem, Tooltip } from '../../models/table-item.model';

@Component({
  tag: 'tts-table-item',
  styleUrl: 'tts-table-item.scss'
})
export class TtsTableItem {
  @Prop() tableItemData: TableItem;

  @Event() tableItemSelected: EventEmitter;

  render() {
    const { title, tooltipData } = this.tableItemData;
    return (
      <div class={this._getItemClass()} onClick={() => this._handleClick()}>
        {title}
        {tooltipData ? (
          <paper-tooltip>{this._renderTooltipData(tooltipData)}</paper-tooltip>
        ) : null}
      </div>
    );
  }

  _getItemClass = (): string => {
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

  _handleClick = (): void => {
    const { tableItemData } = this;
    if (!tableItemData.disabled) {
      this.tableItemSelected.emit(tableItemData);
    }
  };

  _renderTooltipData(tooltipData: Tooltip[]) {
    return tooltipData.map(({ type, value }) => {
      switch (type) {
        case 'text':
          return <p>{value}</p>;
        case 'image':
          return <img src={value} />;
        default:
          return null;
      }
    });
  }
}
