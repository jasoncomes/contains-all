# containsAll - classList Prototype Function

> `containsAll` prototype function to check an element to see if they contain all classes. Used primarily with *classList*.

```jsx
if (window.DOMTokenList && !DOMTokenList.prototype.containsAll) {
  DOMTokenList.prototype.containsAll = function() {
    const cls = Array.isArray(arguments[0])
      ? arguments[0]
      : arguments[0].split(",");

    // Return if a class doesn't exists
    for (const cl of cls) {
      if (!this.contains(cl.trim())) return false;
    }

    return true;
  };
}
```

### **Parameters**

- `arguments` String|Array. required. A string that specifies the classes you'd like the element to have attached. **If no argument is passed, will default to false.

### Examples

---

**String Format**

```jsx
if (el.classList.containsAll("cheese, ketchup, mustard, pickles, lettuce")) {
  alert("cheeseburger!!");
}
```

**Array Format**

```jsx
if (el.classList.containsAll(["cheese", "ketchup", "mustard", "pickles", "lettuce"])) {
  alert("cheeseburger!!");
}
```

### Previous Examples

---

```jsx
if (el.classList.contains("cheese") && el.classList.contains("ketchup") && el.classList.contains("mustard") && el.classList.contains("pickles") && el.classList.contains("lettuce")) {
  alert("cheeseburger!!");
}
```

Example showing how it previously worked.