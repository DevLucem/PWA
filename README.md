# <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/svelte.png" width=48>  + <img src="https://vitejs.dev/logo.svg" width=64> + <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" width=72> + <img src="https://cdn.iconscout.com/icon/free/png-256/firebase-3628772-3030134.png" width=64>
# PWA Starter Template
#### ...with all the good stuff

---
### Features
- Created with [Svelte][svelte] for easy development
- JIT development with [Vite][vite] for fast builds!
- Preset [Tailwind CSS][tailwind] no hassle UI
- Initialized [Firebase Hosting][firebase] for testing
- Preset [PageJS Router][pagejs] on your pages

[svelte]: [https://svelte.dev/]
[vite]: [https://vitejs.dev/]
[tailwind]: [https://tailwindcss.com/]
[firebase]: [https://firebase.google.com/docs/hosting]
[pagejs]: [https://www.npmjs.com/package/page]

---
### Getting Started
```
npx degit devlucem/pwa my-app
cd my-app
npm install
```
#### Test Locally
`npm run dev`

Note the PWA will not be installable in development mode as the manifest file is unreachable.

### Build for production
`npm run build`

Your files will be available in the `dist` folder. Go to [dist/serviceWorker](./dist/serviceWorker.js) file and update the css file and js files in the `assets` variable to the new names generated in the [dist/assets](./dist/assets) folder before running the next command.

`firebase deploy`

# Made With ♥
```
(                   (                            
)\ )                )\ )                         
(()/(     (    )    (()/(   (          (     )    
/(_))   ))\  /((    /(_)) ))\   (    ))\   (     
(_))_   /((_)(_))\  (_))  /((_)  )\  /((_)  )\  '
|   \ (_))  _)((_) | |  (_))(  ((_)(_))  _((_))  
| |) |/ -_) \ V /  | |__| || |/ _| / -_)| '  \()
|___/ \___|  \_/   |____|\_,_|\__| \___||_|_|_|  
```
