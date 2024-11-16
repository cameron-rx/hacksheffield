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

### Point
#### Request
```
```
#### Response
```
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
```
```
#### Response
```
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
