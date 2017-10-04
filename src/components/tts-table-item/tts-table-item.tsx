import {
  Component,
  Prop,
  Event,
  EventEmitter,
  Listen,
  State
} from '@stencil/core';
import { TableItem } from '../../models/table-item.model';

@Component({
  tag: 'tts-table-item',
  styleUrl: 'tts-table-item.scss'
})
export class TtsTableItem {
  @State() showTooltip: boolean = false;

  @Prop() tableItemData: TableItem;

  @Event() tableItemSelected: EventEmitter;

  @Listen('mouseenter')
  handleMouseEnter() {
    this.showTooltip = true;
  }

  @Listen('mouseleave')
  handleMouseLeave() {
    this.showTooltip = false;
  }

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
    const { title, tooltipText } = this.tableItemData;
    const { showTooltip } = this;
    return (
      <div class={this.getItemClass()} onClick={() => this.handleClick()}>
        {title}
        {showTooltip && tooltipText ? (
          <tts-tooltip>{tooltipText}</tts-tooltip>
        ) : null}
      </div>
    );
  }
}
