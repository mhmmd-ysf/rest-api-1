---
layout: challenge
title: REST API
---

## Learning Competencies

* Mampu memetakan alur data dalam aplikasi web.
* Mampu mengenali 5 method HTTP (GET, POST, DELETE, PUT, PATCH)
* Mampu mengimplementasikan pola MVC di dalam aplikasi web.
* Mampu menggunakan Sequelize untuk membuat model dan migration.
* Mampu menggunakan parameter URL untuk mengirimkan data ke server-side
* Mampu menggunakan kode JavaScript untuk memanipulasi response
* Mampu menggunakan authentication/authorization dengan JWT (jsonwebtoken)

## Summary

Kita akan membuat sebuah server menggunakan REST di aplikasi kita yang dilengkapi fitur *authentication* dan *authorization* pengguna, sehingga tidak sembarang orang dapat mengakses API yang telah kita buat.

Good luck and have fun! 😎

## <a name="morning"></a> Morning Releases (Part 1)

### Release 0: Skeleton
Buatlah *skeleton* aplikasi dan definisikan beberapa route yang akan kamu gunakan seperti contoh di bawah.

| Route            | HTTP   | Description                 |
|:-----------------|:-------|:----------------------------|
| `/api/todos`     | GET    | Get all the todos info      |
| `/api/todos/:id` | GET    | Get a single todo info      |
| `/api/todos`     | POST   | Create a todo               |
| `/api/todos/:id` | DELETE | Delete a todo               |
| `/api/todos/:id` | PUT    | Update a todo with new info |
| `/api/todos/:id` | PATCH  | Update a todo with new info |

Jangan lupa membuat dokumentasi untuk aplikasi ini, silakan liat task ini untuk referensi:
- [Documenting REST API](../api-docs/index.html)

### Release 1: Models 💃
Buatlah file model yang diperlukan untuk melakukan interaksi CRUD ke database, masukkan ke folder `models`. Gunakan `Sequelize` sebagai ORM-nya.

Kolom yang wajib ada di `Todo`:
- `title`
- `description`

Sisanya bisa kamu tambah sendiri jika perlu

### Release 2: Controllers and Routes Integration 🔧
Buatlah direktori `controllers` di dalam aplikasi `express` kamu. Susunlah file-file controller yang diperlukan untuk mengakses model-model terkait. Pastikan code yang kamu tulis bersifat DRY.

Lalu integrasikan dengan `routes` yang sudah kamu buat di Release 0.

### Release 3: Test your API! 👨‍💻
Lakukan test terhadap API yang sudah kamu buat, bisa menggunakan `Postman`, `Insomnia` atau `curl`

----------------------------------------------------------------------
## <a name="afternoon"></a> Afternoon Releases (Part 2)

### Release 4: Authentication endpoints! 🔐
Tambahkan endpoint berikut ke aplikasi kamu:

| Route         | HTTP | Description                                          |
|:--------------|:-----|:-----------------------------------------------------|
| `/api/signup` | POST | Sign up with new user info                           |
| `/api/signin` | POST | Sign in and get an access token based on credentials |

Nama route boleh kamu ganti, misal `register` dan `login`

### Release 5: Generating Token
Implementasikan routes di Release 4! Untuk `/api/signin`, pastikan kamu mengirim response berupa token (yang bisa di-generate menggunakan package `jsonwebtoken`)

### Release 6: Authentication and Authorization middlewares 👮‍
Buat dan implementasikan middleware untuk pengecekan apakah pengguna API kamu memiliki token? Apakah tokennya bisa untuk mengakses route yang dikunjungi?

Di bawah ini adalah rules untuk masing masing route:

| Route            | HTTP   | Description                                                |
|:-----------------|:-------|:-----------------------------------------------------------|
| `/api/todos`     | GET    | Get all user's todos                        |
| `/api/todos/:id` | GET    | Get a single todo (Owner only)      |
| `/api/todos`     | POST   | Create a todo (Authenticated users only)                                 |
| `/api/todos/:id` | DELETE | Delete a todo (Owner only)                                 |
| `/api/todos/:id` | PUT    | Update a todo with new info (Owner only) |
| `/api/todos/:id` | PATCH  | Update a todo with new info (Owner only) |

*Tips*: Kamu bisa buat migration baru untuk menambahkan kolom `user_id` di `Todos`.

### Release 7: Deploy to Heroku 🚀
Deploy aplikasi ke `Heroku` agar kita dapat mengaksesnya langsung API-nya dengan mudah dari manapun.

Sertakan URL-nya di README jika kamu sudah berhasil deploy.
