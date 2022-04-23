## [My-Progressive.Web.App](https://my-progressive.web.app) Starter Template
#### ...with all the good stuff

![Demo](https://user-images.githubusercontent.com/22216995/159932666-65ad3861-7123-4187-88af-662fbf2a32db.png)

### Features
- Created with [Svelte](https://svelte.dev/) for easy development
- JIT development with [Vite](https://vitejs.dev/) for fast builds!
- Preset [Tailwind CSS](https://tailwindcss.com/) no hassle UI
- Initialized [Firebase Hosting](https://firebase.google.com/docs/hosting) for testing
- Preset [PageJS Router](https://www.npmjs.com/package/page) on your pages

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
- More theme and website customizations are available by searching lines with `TODO`
- You can use [Icons Builder](https://www.pwabuilder.com/imageGenerator) to generate your icons
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
