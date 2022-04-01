<h1 align="center">
<br>
  <img src="https://github.com/sushilburagute/zuck-frontend/blob/main/public/meta.png?raw=true" alt="dapr" width="640">
<br>
<br>
<b>Zuck Backend</b>
</h1>

<p align="center">
A backend built for an Food Ecommerce Store, <a href='https://zuck-food.vercel.app/'>Zuck</a>.
</p>

<p align="center">
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white">
</p>

<hr />

## Built With

- ⚡ **NodeJS** — JavaScript runtime built on Chrome's V8 JavaScript engine.
- ⚡ **ExpressJS** - Fast, unopinionated, minimalist web framework for node.
- ⚡ **Typescript** — TypeScript is a language for application-scale JavaScript.
- ⚡ **Mongoose** — Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
- ⚡ **JSONwebtoken** — An implementation of JSON Web Tokens.

## Getting started

1. Clone this repo using `https://github.com/sushilburagute/zuck-backend.git`
2. Move yourself to the appropriate directory<br />
3. Run `yarn` to install dependencies<br />
4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

<br/>

## Author

Sushil Buragute - [Twitter](https://twitter.com/codetastic1) - [Linkedin](https://www.linkedin.com/in/sushil-buragute/) - [Portfolio](https://sush.vercel.app)

<br/>
<br/>

---

<h1 align="center">
<b>API Documentation</b>
<br>
</h1>

## .env Config

```
PORT=5000
DB_LOCAL=<your mongodb local url>
DB_ATLAS=<your hosted mongodb url>
JWT_SECRET=<secret string to generate jwt>
JWT_EXPIRES_IN=<time for the jwt to expire>
```

# API Endpoints

Here's the documentation on how to use the API.

`*means that endpoint needs Auth.`

## /api/auth :

POST `/sign-up`: Route to Sign up.

```json
{
  "firstName": "John",
  "lastName": "Doh",
  "email": "john@johndoh.com",
  "password": "Test12345!"
}
```

POST `/sign-in`: Route to sign in.

```json
{
  "email": "john@johndoh.com",
  "password": "Test12345!"
}
```

POST `/logout`: Route to logout.

GET\* /user-info`: Route to gather user email.

## /api/food :

GET `/`: Route to fetch all data regarding the food dishes.
GET `/:id` Route to fetch the data on a specific dish.

## /api/user/cart/ :

GET* `/cart`: Route to view the user's cart data.
POST* `/cart`: Route to post the user's cart data.

```json
{
  "_id": "621cd2d85011592138892e7f",
  "type": "ADD_TO_CART",
  "quantity": 4
}
```

```json
{
  "quantity": 1,
  "_id": "621cd1835011592138892e76",
  "type": "REMOVE_FROM_CART"
}
```

```json
{
  "quantity": 3,
  "_id": "621cd19f5011592138892e79",
  "type": "ADD_QUANTITY_IN_CART"
}
```

```json
{
  "quantity": 2,
  "_id": "621cd19f5011592138892e79",
  "type": "SUBTRACT_QUANTITY_IN_CART"
}
```

## /api/user/favourites/ :

GET* `/favourites` :Route to view user's fav data.
POST* `/favourites` :Route to update user's fav data.

```json
{
  "_id": "621cd1835011592138892e76",
  "type": "ADD_TO_FAVOURITES"
}
```

```json
{
  "_id": "621cd1835011592138892e76",
  "type": "REMOVE_FROM_FAVOURITES"
}
```

## /api/admin/seed :

POST `/seed` : Route to seed data.

```JSON
{
	"name": "Pizza",
	"deliveryTime": 40,
	"price": 240,
	"discount": 9,
	"rating": 4.3,
	"veg": true,
	"type": "MAIN_COURSE",
	"image": "https://res.cloudinary.com/dus8fi5oj/image/upload/v1646053243/zuck-food/pizza_kqy2tq.jpg",
	"description": "But the pizza we all know today, made with tomato sauce, cheese, and numerous toppings, originated in Italy. It became popular in Naples in the 18th century as a cheap, nourishing food that was consumed mainly by peasants. The modern pizza as we know it today evolved from early Neapolitan flatbreads topped with lard, salt, and garlic."
}

```
