
// truthyness

// number: 0 is false
// string: empty string is false
// undefined: false
// null: false

// from https://www.freecodecamp.org/news/how-to-convert-value-to-boolean-javascript/#:~:text=In%20Boolean%20contexts,%20JavaScript%20utilizes
Boolean(false);         // false
Boolean(undefined);     // false
Boolean(null);          // false
Boolean('');            // false
Boolean(NaN);           // false
Boolean(0);             // false
Boolean(-0);            // false
Boolean(0n);            // false

Boolean(true);          // true
Boolean('hi');          // true
Boolean(1);             // true
Boolean([]);            // true
Boolean([0]);           // true
Boolean([1]);           // true
Boolean({});            // true
Boolean({ a: 1 });      // true

a = 1
console.log("a = " + (typeof a) + " " + a + " is : " + Boolean(a));
a = "1"
console.log("a = " + (typeof a) + " " + a + " is : " + Boolean(a));
a = ""
console.log("a = " + (typeof a) + " " + a + " is : " + Boolean(a));
a = []
console.log("a = " + (typeof a) + " " + a + " is : " + Boolean(a));

