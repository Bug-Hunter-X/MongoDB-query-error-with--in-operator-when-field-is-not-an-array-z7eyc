```javascript
const query = {
  field: { $in: [1,2,3] },
};

// This query will throw an error if the field is not an array
db.collection.find(query).toArray();
```