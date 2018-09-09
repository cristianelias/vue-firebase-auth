# vue-firebase-auth

## Project setup
```
nvm use
npm install
```

## Firebase API config for development
Place Firebase API options in:
```
./configs/firebase_config.json
```

## Firebase API config for production
Firebase API options are loaded from the NODE_ENV variables specified here:
```
./configs/firebase.json => #asJSONForProduction
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
