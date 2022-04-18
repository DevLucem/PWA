# <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/svelte.png" width=48>  + <img src="https://vitejs.dev/logo.svg" width=64> + <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" width=72> + <img src="https://cdn.iconscout.com/icon/free/png-256/firebase-3628772-3030134.png" width=64>
# PWA Starter Template
#### ...with all the good stuff

[Demo: My-Progressive.Web.App](https://my-progressive.web.app)
![Demo](https://user-images.githubusercontent.com/22216995/159932666-65ad3861-7123-4187-88af-662fbf2a32db.png)

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
### Configure
- Create a firebase project or get the firebase config files of the one you already have
    ```
    apiKey: "",
    authDomain: "",
    projectId: ""
   ```
- Update the [src/firebase](./src/firebase.js) config files with your above keys
- To customize your app, go to [public/serviceWorker](./public/serviceWorker.js) and [public/manifest](./public/manifest.json) files and add any files not included in the `assets` and `icons`.
- More customization is available by searching lines with `TODO`
#### Test Locally
`npm run dev`

#### Build for production
`npm run build`

---

Your files will be available in the [dist](./dist) folder.
To push the files to your firebase hosting, run the commands below. Make sure to fill the dist folder as your hosting one.

`firebase init hosting && firebase deploy`

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
