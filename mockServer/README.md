## Install

```bash
$ npm install
$ npm run start-auth
```

## How to login/register?

You can login/register by sending a POST request to

```
POST http://localhost:8000/auth/login
POST http://localhost:8000/auth/register
```

with the following data

```
{
  "email": "nilson@email.com",
  "password":"nilson"
}
```

You should receive an access token with the following format

```
{
   "access_token": "<ACCESS_TOKEN>"
}
```
