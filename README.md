# Description

PoC PrimeNG + Angular 10.X

## Step 01: scapholding an empty angular project
ng new poc-primeng-styles

## Step 02: add primeNG dependencies
```javascript
npm install primeng --save
npm install primeicons --save
npm install primeflex --save
```

## Step03: configure primeng styles and select a theme
```javascript
"styles": [
  "node_modules/primeng/resources/themes/saga-blue/theme.css",
  "node_modules/primeng/resources/primeng.min.css",
  "node_modules/primeicons/primeicons.css",
  //...
],
```

## Step04: add some primeng components to the main angular view
Inside main angular modules
```javascript
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

imports: [
    ...
    DialogModule,
    ButtonModule,
]
```

## Step05: use these component imported in your views
