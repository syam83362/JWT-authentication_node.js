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

#### jwt has three parts

header, payload, signature

header has json object containing

{
    alg : "SHA256",
    type : "JWT"
}

payload has the json object as 

{
    userId : "syam"
    email : "syam@gmail.com"
}

we dont store the password inside the payload

finally signature is created using the header+payload+security key

token is not modified and created by server only