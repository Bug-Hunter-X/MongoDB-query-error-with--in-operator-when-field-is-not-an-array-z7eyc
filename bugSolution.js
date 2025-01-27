```javascript
const query = {
  $or: [
    { field: { $in: [1, 2, 3] } },
    { field: { $exists: false } },
  ],
};
db.collection.find(query).toArray();
```
This solution handles cases where the field is either an array containing the desired values or does not exist at all.  This is a more robust approach than just checking for array type, as it addresses the situation where the key might be missing entirely.