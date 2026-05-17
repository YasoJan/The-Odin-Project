
Since constructors can be called without using new by mistake, which would cause hard-to-track errors as it won’t do all the new object and this binding stuff, we should safeguard them. You can use the new.target meta-property like this, which will throw an error if Player is called without new:

```
if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
```