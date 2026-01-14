# what is JWT

a jwt is like a digital ID card that is created by the server and stored in the clients browser(during login)

for every other request this token is sent and verifies by the server

# what problem the jwt solving

Imagine this situation 👇

You have a login system.

User logs in → server verifies username & password → user is authenticated

Now the problem:

👉 How does the server remember that this user is logged in for every request?

Example:

/login ✅

/profile ❓

/dashboard ❓

We need a way to prove the user is logged in for every request.

That’s where JWT comes in.