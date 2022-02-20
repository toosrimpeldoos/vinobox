# Next.js + Tailwind Vinoboxtest

This repo is dedicated to try to impress the people @ Vinobox

This example shows uses [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. 

## Preview

Preview the example live on [Vercel](https://vinobox.vercel.app/):

[![Open in Browser](https://www.computerhope.com/cdn/browsers.png)](https://vinobox.vercel.app/)

## Deploy your own

Deploy the example docker in a local or cloudbased solution.
The bearer token has to passed as an enviroment variable (VINO_BEARER).


## How to use

For local testing add the .en.local file

```bash
# .env.local
VINO_BEARER={any-valid-bearer-token}
```


Execute docker 
```bash 
docker build -t vinolocal . && docker run -it vinolocal
```
