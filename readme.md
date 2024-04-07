## `Number combination`


This library help to which series of sum of number can get specific lucky number.

this can be use in 
* Phone number 
    which allow to find lucky number by sum of series of digits


#### Example

```javascript
import { findSeries } from 'number-combination'l
const pattern = '12345**9';
const result = findSeries({ pattern: pattern, sumof: 5 });
console.log(result)
/**
 * list of sum of series = 5
 * result => [
 *   '12345089', // => 1 + 2 + 3 + 4 + 5 + 0 + 8 + 9 => 32 => 3 + 2 => 5
 *   '12345179', // => 1 + 2 + 3 + 4 + 5 + 1 + 7 + 9 => 32 => 3 + 2 => 5
 *   '12345269', // ...etc
 *   '12345359',
 *   '12345449', 
 *   '12345539',
 *   '12345629', 
 *   '12345719',
 *   '12345809', 
 *   '12345899',
 *   '12345989'
 * ]
*/
```
