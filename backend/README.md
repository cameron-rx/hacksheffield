# Backend Instructions
## Install
## Using Atlas
## Endpoints

### POST /users
Used to add users to database/check for user in database and returns db uuid. Requires AuthOID from authentication.
#### Request
```
method: "POST"
body: {ID: Auth0ID}
```
#### Response
```
{
  id: uuid
  message: "User created in database"
}
```

### GET /users/:userID/habits
Gets all the habits for a specific user.
#### Request
```
method: "GET"
```
#### Response
```
{
  [habit objects]
}
```

### POST /users/:userID/habits
Adds habit to database.
#### Request
```
method: "POST"
body: {
        title: "Gym",
        description: "Workout to improve physical health",
        frequency: "weekly",
        include: true
```
#### Response
```
{id: habitID)
```

### DELETE /users/:userID/habits/:habitID
#### Request
```
method: "DELETE"
```
#### Response
```
Code 200: Success
Code 505: Error
```


### PUT /users/:userID/habits/:habitID
Updates the given habit with new fields.
#### Request
```
method: "PUT"
body: {
  description: "New Description" -- Add any fields that want to be changed.
}
```
#### Response
```
Code 200: success
Code 404: habit not found
code 505: error
```

### Point
#### Request
```
```
#### Response
```
```


### Point
#### Request
#### Response
