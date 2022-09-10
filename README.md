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

deploy

```
netlify deploy --prod
```

Node v14.20.0 でのみ動作確認済み
（それ以上のバージョンではエラーとなる可能性あり）
