# rest-api
REST API built with Express and Sequelize

[link](https://banana-pudding-65840.herokuapp.com/api)

List of user routes:

Route | HTTP | Header(s) | Body | Description
---|---|---|---|---
`/api/users` | GET | `none` | `none` | Get all the users
`/api/users/:id` | GET | `none` | `none` | Get a single user
`/api/users` | POST | `none` | `username:string` __(Required)__,<br>`password:string` __(Required)__ | Create a user
`/api/users/:id` | DELETE | `none` | `none` | Delete a user
`/api/users/:id` | PUT | `none` |`username:string` __(Required)__,<br>`password:string` __(Required)__ | Update a user with new info
