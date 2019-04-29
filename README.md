# rest-api
REST API built with Express and Sequelize

[link](https://fathomless-cove-41521.herokuapp.com/api)

List of user routes:

Route | HTTP | Header(s) | Body | Description
---|---|---|---|---
`/api/register` | POST | `none` | `username:string` __(Required)__,<br>`password:string` __(Required)__ | Log a user in
`/api/login` | POST | `none` | `username:string` __(Required)__,<br>`password:string` __(Required)__ | Create a user
`/api/users` | GET | `none` | `none` | Get all the users
`/api/users/:id` | GET | `none` | `none` | Get a single user
`/api/users/:id` | DELETE | `none` | `none` | Delete a user
`/api/users/:id` | PUT | `none` |`username:string` __(Required)__,<br>`password:string` __(Required)__ | Update a user with new info

List of todo routes:

Route | HTTP | Header(s) | Body | Description
---|---|---|---|---
`/api/todos` | GET | `none` | `none` | Get all the todos
`/api/todos/:id` | GET | `none` | `none` | Get a single todo
`/api/todos` | POST | `none` | `todoname:string` __(Required)__,<br>`password:string` __(Required)__ | Create a todo
`/api/todos/:id` | DELETE | `none` | `none` | Delete a todo
`/api/todos/:id` | PUT | `none` |`todoname:string` __(Required)__,<br>`password:string` __(Required)__ | Update a user with new info
