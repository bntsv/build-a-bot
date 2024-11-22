# build-a-bot

## Project setup
```
npm install
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Course notes

To output the webpack configuration for production mode:
vue inspect --mode=production > webpack.config.js 

.env will be used for all environments builds (npm run build -- --mode=production | npm run build -- --mode=development will access env variables from that file)
if there is a dedicated file (.env.development) only the corresponding environment (development) will be using the env variables from that file 
