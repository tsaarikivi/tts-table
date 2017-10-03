![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# tts-table

## Using this component

Put a script tag similar to this:

```html
<script src='https://unpkg.com/tts-table/dist/ttstable.js'></script>
```

or versioned:

```html
<script src='https://unpkg.com/tts-table@0.0.1/dist/ttstable.js'></script>
```

or node with node modules run:

```bash
yarn add tts-table
```

and add:

```html
<script src='node_modules/my-name/dist/myname.js></script>
```

...in the head of your index.html. Then you can use the element anywhere in your template, JSX, html etc.
Note that some js frameworks might require additional steps to the ones below.
Polyfills might also be needed for webcomponents.

## Documentation

### Properties

```ts
// Things you can set as props to the component
@Prop() tableData: TableData;

// TableData is an array of arrays of TableItem
interface TableData extends Array<TableColumn> {}
interface TableColumn extends Array<TableItem> {}

// This is the data model of one item
interface TableItem {
  startTime: Date | number;
  endTime: Date | number;
  row: number;
  title?: string;
  free?: boolean;
  unavailable?: boolean;
  selected?: boolean;
}
```

### Events

```ts
// you should listen to tableItemSelected event if you want to change the selected item.
@Event() tableItemSelected: EventEmitter;
```

Please note that you should handle the logic of selecting / adding free / unavailbling the items in the parent component. The logic is delegated because of multi / single selection possibilities. Maybe someone does not want selections at all.

```ts
// Here is an example of single seleciton
function setSelectedItem(tableData, selectedItem) {
  return tableData.map(
    columnData => columnData.map(
      tableItem => {
        if (
          tableItem.startTime === selectedItem.startTime &&
          tableItem.endTime === selectedItem.endTime &&
          tableItem.row === selectedItem.row
        ) {
          return Object.assign({}, tableItem, {selected: true})
        }
        return Object.assign({}, tableItem, {selected: false})
      }
    )
  )
}
```

### Styles

```scss
tts-table {
  --tts-table-font-family: 'Courier New', monospace;
  --tts-table-column-width: 240px;
  --tts-table-column-title-padding: 6px;
  --tts-table-column-title-font-size: 16px;
  --tts-table-item-margin: 4px 2px;
  --tts-table-item-font-size: 14px;
  --tts-table-item-padding: 10px;
  --tts-table-item-height: 34px;
  --tts-table-item-border-radius: 2px;
  --tts-table-item-color: rgba(16, 16, 16, 0.95);
  --tts-table-item-background-color: #fafafa;
  --tts-table-item-hover-background-color: #ea80fc;
  --tts-table-item-unavailable-background-color: rgba(168, 168, 168, 0.7);
  --tts-table-item-unavailable-hover-background-color: rgba(168, 168, 168, 0.7);
  --tts-table-item-selected-background-color: #40c4ff;
  --tts-table-item-free-background-color: #ffea00;
}
```

## Getting Started with hacking

0. Send cool ideas
1. Fork this repo
2. Run yarn install
3. Run yarn start
4. Hack on
5. Pull request
6. (Run yarn build for building)
