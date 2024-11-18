# DevTinder Apis

## authRouter

- POST /signup
- POST /login
- POST /logout

## profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## conectionRequestRouter

- POST /request/send/intrested/:userID
- POST /request/send/ignored/:userID
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

## userRouter

- GET /connections
- GET /request/recived
- GET /feed - Gets you the profile of other users on platform
