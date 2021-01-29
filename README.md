# Creamy-JS
a ui rendering libary
## Usage
To convert Creamy Code to Html
```js
Creamy.toHTML([Creamy code])
```

## How to use Creamy Code
Example: 
```json
{
    tag: "div",
    id: "my-block",
    class: ["btn", "bg-green"],
    attributes: [
        {
            att: "data-action",
            value: "blast"
        }
    ],
    child: [
        "Hello, from ",
        {
            tag: "span",
            css: `
                color: brown;
            `,
            child: [
                " from {{lib}}"
            ]
        }
    ]
}
```
options:

```tag```-type="string": the html element
<br>
```id```-type="string": add a id to the element
<br>
```class```-type="array": a array in which you can put the classes
<br>
```attributes```-type="array":
<br>
```attributes > att```-type="string": the name of the attributute
<br>
```attributes > value```-type="string": the value of the attributute
<br>
```child```-type="array": the inside of the element
<br>
```child > string```-type="string": the text
<br>
```child > JSON Object```-type="object": another element