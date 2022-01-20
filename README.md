# subscriptions_ad

## Requirements
Docker must be installed to run this app

## Install
```
npm install
```

## Endpoints

### /subscriptions (GET)
Gets all subscriptions

### /subscriptions/:id (GET)
Gets 1 subscription

### /subscriptions (POST)
Creates a new subscription
#### body (json)
  - firstName:  String
  - birthdate: date
  - newsletterId: Number
  - consent: boolan
  - gender: string
  - email: string + email format
