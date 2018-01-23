# Personal site of Jorge Piñon

Mostly as a showcase of work, an excercise in static site generators, and for when I have to write something.

Built with [harp.js](https://harpjs.com/) and insomnia. 


## local development
`cd [your-app-root-dir]`

### run harp.js server
1. `nvm use 7.4 (harp-compatible)`
2. `harp server`
3. Open <a href="http://localhost:9000">http://localhost:9000</a>

### for scss
`compass watch`

### for js
`npm run watch-js`


## Publishing to AWS
[See the post about this](http://www.jorgepinon.com/posts/harp-to-s3-workflow.html)

Uploading only work index page:
`aws s3 sync . s3://www.jorgepinon.com --exclude "*" --include "work/index.html"`

Uploading only css and js (dryrun):
`aws s3 sync . s3://www.jorgepinon.com --exclude "*" --include "assets/css/*" --include "assets/js/bundle.min.js" --dryrun`