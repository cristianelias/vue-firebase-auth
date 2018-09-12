# vue-firebase-auth

## Functionality by branches
 - `00/only-vue-firebase`: A basic auth flow with just VueJS2 + Firebase.
 - `01/vuex-firebase`:     Adds Vuex.js for state management `[WIP]`

## Project setup
```
nvm use
npm install
```

## Firebase API config for development
Place Firebase API options in:
```
/.env.local
```

Using the following keys:
``` 
VUE_APP_FIREBASE_API_KEY=
VUE_APP_FIREBASE_AUTH_DOMAIN=
VUE_APP_FIREBASE_DATABASE_URL=
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=
VUE_APP_FIREBASE_PROJECT_ID=
VUE_APP_FIREBASE_STORAGE_BUCKET=
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Live demo 💪🏻
🛸https://vue-firebase-auth.netlify.com/
