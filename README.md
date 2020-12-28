# CRS

Init OTIMIZE by github link

```javascript
let script = document.createElement("script");
script.src = "https://flopsi69.github.io/crs/<directory>/<mod.>/<filename>.js";
script.async = false;
document.head.appendChild(script);
```

gaEvent func

```javascript
function gaEvent(category, action, label) {
  try {
    dataLayer.push({
      event: "aevent",
      ecategory: category,
      eaction: action,
      elabel: label,
      interactionType: "False"
    });
  } catch (e) {}
}
```
