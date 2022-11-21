<h1 align="center">
  Free-tech Log
</h1>

## Run

```
npm i
npm build
npm run dev
```

## EnvFile

.env.development

```
CONTENTFUL_ACESSTOKEN=
CONTENTFUL_SPACEID=
```

netlify.toml

```
[build]
  publish = "/public"
  command = "npm run build"
  environment = {NODE_VERSION = "14.20.0",CONTENTFUL_ACESSTOKEN = "",CONTENTFUL_SPACEID = "",}
```

##  Deploy

```
netlify deploy --prod
```

Node v18.0.0 以上
