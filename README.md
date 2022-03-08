# Zuck Backend

---

Backend for the Food Ecommerce Store, [Zuck](https://zuck-food.vercel.app/).

---

# Controllers

## /api/auth:

`/sign-up`: Route to Sign up.
`/sign-in`: Route to sign in.
`/logout`: Route to logout.
`/user-info`: Route to gather user email.

## /api/food :

`/`: Route to fetch all data regarding the food dishes.
`/:id` Route to fetch the data on a specific dish.
`/cart`: Route to fetch/post the user's cart data.
`/favourite` :Route to fetch/post user's fav data.
`/order` : Route to handle order of the user.

## /api/admin :

`/seed` : Route to seed data.

# Todos

1. User get for favs
1. User get for cart
1. User post for favs (doesn't need quantity)
1. User post for carts (needs quantity)
