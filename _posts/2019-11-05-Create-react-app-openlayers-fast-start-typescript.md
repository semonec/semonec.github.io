---
title:  "Create React App with OpenLayers v6.x + typescript"
date:   2019-11-05 21:00:00 +0900
categories: OpenLayers
tag:
- OpenLayers
- React
---
Organize Create React App with OpenLayers v6.x + typescript

## Create React project /w TypeScript ##

```bash
$ yarn create react-app --typescript
# or
$ npx create-react-app --typescript
```

**Execute project**

```bash
$ yarn start
```

## OpenLayers initialize ##

### Add OpenLayers package & type definition ###

```bash
$ yarn add ol @types/ol
```

### Modify App.tsx ###

**src/App.tsx**

```typescript
import React from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const mapStyle = {
  width: "100%",
  height: "400px"
}

class App extends React.Component {
  componentDidMount() {
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

  render() {
    return (
      <div className="App">
          <div id="map" className="map" style={mapStyle}></div>
      </div>
    );
  }
}

export default App;
```

1. Change App to React Component.
2. add `<div id="map" className="map" ></div>` 
   Map will be displayed in the div layer
3. Import OpenLayers modules
   ```typescript
   import Map from 'ol/Map';
   import View from 'ol/View';
   import TileLayer from 'ol/layer/Tile';
   import XYZ from 'ol/source/XYZ';
   ```
4. Declare `componentDidMount()` function and create new Map object
    ```typescript
    componentDidMount() {
      new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          })
        ],
        view: new View({
          center: [0, 0],
          zoom: 2
        })
      });
    }
    ```
5. Run build
   ```bash
   $ yarn start
   ```

Now, you can see like below
![Screenshot](./assets/images/screenshot.png)







https://github.com/semonec/open_layers_study/tree/master/quick_start
