# Zuck Backend

Backend for the Food Ecommerce Store, [Zuck](https://zuck-food.vercel.app/).

### Tech Stack

1. expressJS
1. typescript
1. mongoose
1. jsonwebtoken

---

# API Documentation

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
