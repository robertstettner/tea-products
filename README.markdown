Tea Products
==================================
![Example](http://sidnet.info/sites/default/files/marionette-logo.png)   ![Example](http://3.bp.blogspot.com/-JFOJ-k6tLnA/TsiKgBYPvqI/AAAAAAAAAT8/dGXeu0LeuTE/s320/backbone-js-logo.png) ![Example](http://requirejs.org/i/logo.png)


#Description
> A Marionette.js and Require.js Boilerplate with a tea products example that promotes decoupling your JavaScript into modules, separating business logic from application logic using Collections/Models, Regions and Views, including non-AMD Compatible Third Party Scripts in your project, optimizing your JavaScript and CSS files (minify, concatenate, etc), and unit testing your JavaScript.  Part of the [BoilerplateMVC](https://github.com/BoilerplateMVC) suite.

#Getting Started
   1. Download and install [Node.js](http://nodejs.org/#download)
   2. Clone this repository
   3. On the command line, type `npm install nodemon -g` to install the [nodemon](https://github.com/remy/nodemon) library globally.  If it complains about user permissions type `sudo npm install nodemon -g`.
   4.  If you have installed [Grunt](http://gruntjs.com/) globally in the past, you will need to remove it first by typing `npm uninstall -g grunt`.  If it complains about user permissions, type `sudo npm uninstall -g grunt`.
   5.  Next, install the latest version of [Grunt](http://gruntjs.com/) by typing `npm install -g grunt-cli`.  If it complains about user permissions, type `sudo npm install -g grunt-cli`. 
   6. Navigate to inside of the **tea-products** folder and type `npm install`
   7. Next, type `nodemon` (this will start your Node.js web server and restart the server any time you make a file change thanks to the wonderful **nodemon** library)
   8. To view the demo page, go to `http://localhost:8001`
   9. Type `grunt` to run your grunt build and create minified .js and .css files   
   10. Enjoy using Marionette, Backbone, Require, Grunt, Lodash, jQuery, jQueryUI, and Twitter Bootstrap!

#Tour of the Boilerplate Files

index.html
----------

### HTML5 Boilerplate

Uses a large portion of the [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate) HTML and CSS.

### Environment

As you continue down the page to the first `<script>` tag, you will notice there is a local JavaScript variable, called `production`, that is used to communicate to your application whether you would like to load production or development CSS and JavaScript files.

### BoilerplateMVC Helper Methods

To load our production/development CSS and JavaScript files, you can use the handy BoilerplateMVC helper methods included directly in our HTML page.  Below are the available helper methods:

   `loadCSS(url, callback)` - Asynchronously includes a CSS file to a page

   `loadJS(file, callback)` - Asynchronously includes a JavaScript file to the page

   `loadFiles(production, obj, callback)` - Calls the `loadCSS()` and `loadJS()` methods internally to asynchronously include our CSS and JavaScript files 

   **Note:** Require.js does not officially support [loading CSS files](http://requirejs.org/docs/faq-advanced.html#css), which is why we included the `loadCSS()` method to asynchronously include our CSS files.

### Production Mode

In production mode, your app's single minified and concatenated JavaScript file is loaded using Almond.js instead of Require.js.  Your application's minfied common CSS file is also included.

### Development Mode

In development mode, your app's non-minified JavaScript files are loaded using Require.js instead of Almond.js.  Your application's non-minified common CSS file is also included.

Config.js
---------

This file includes your Require.js configurations.

If we look at our App's Require.js configurations, we will see the first thing being configured are the module paths.  Setting paths allow you to define an alias name and file path for any module that you like.

Typically, you want to set a path for any module that will be listed as a dependency in more than one other module (eq. jQuery, Backbone).  This saves you some typing, since you just have to list the alias name, and not the entire file path, when listing dependencies.  After all of the file paths are set, you will find the Shim configuration (Added in Require.js 2.0).
   
The Shim configuration allows you to easily include non-AMD compatible JavaScript files with Require.js (a separate library such as [Use.js](https://github.com/tbranyen/use.js/) was previously needed for this). This is very important, because Backbone versions > 0.5.3 no longer support AMD (meaning you will get an error if you try to use both Require.js and the latest version of Backbone).  This configuration is a much better solution than manually editing non-AMD compatible JavaScript files to make sure the code is wrapped in a `define` method.  Require.js creator [James Burke](http://tagneto.blogspot.com/) previously maintained AMD compatible forks of both Backbone.js and Underscore.js because of this exact reason.

```js
   shim: {

      // Backbone
      "backbone": {

         // Depends on underscore/lodash and jQuery
         "deps": ["underscore", "jquery"],

         // Exports the global window.Backbone object
         "exports": "Backbone"

      },

   }
```

The Shim configuration also takes the place for the old Require.js `order` plugin.  Within the Shim configuration, you can list files and their dependency tree.  An example is jQuery plugins being dependent on jQuery:

```js
   shim: {

      // Twitter Bootstrap plugins depend on jQuery
      "bootstrap": ["jquery"]

   }
```

> You do not need a shim configuration for [jQuery](http://www.jquery.com) or [lodash](https://github.com/bestiejs/lodash) because they do not have any dependencies.

Init.js
-------------

The `require` method is used to asynchronously include all of the files/dependencies passed into the first parameter (jQuery, Backbone, Lodash, Router, etc) into the page.

Finally, a new [Marionette.Application](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md) instance is instantiated to get your Marionette app up and running.

> You don't need to instantiate a new router instance if you aren't using a Backbone Router class.

App.js
------
   App.js is where we instantiate our globally accessible `Marionette.Application` object.  This file starts with a define method that lists Backbone and Marionette as dependencies. Keep in mind that Backbone and Marionette had already been previously loaded in Init.js, but Require.js is smart enough not to load dependencies more than once.

   It is best practice to list out all of your dependencies for every file, regardless of whether or not they expose global objects and are already included in the page.  This is also especially important for the Require.js optimizer (which needs to determine which files depend on which other files).  

> If your dependencies do not expose global objects, then it is absolutely mandatory to list it as a dependency, since Require.js does not allow global variables (meaning your modules are private and cannot be accessed by other modules or code without explicitly listing them as dependencies).

   [Marionette.Application](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.application.md) is the heart of the Marionette framework.  The [Regions](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md), [Layouts](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.layout.md) and [AppRouters](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.approuter.md) you create are typically hung off of a global instance of `Marionette.Application`.  

   One of Marionette's strengths is that it introduces a Composite architecture, which lets you organize your application into separate regions or areas, with their own self-contained logic and structure.  One of the main ways this can be done is with [Regions](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md).  In App.js, we divide our application into two regions - the `headerRegion` and `mainRegion`, like so:

        App.addRegions({
            headerRegion:"#header",
            mainRegion:"#main"
        });

   This searches the DOM for a `<header>` element and for an element with an `id` of `main` and creates a new `Marionette.Region` for each.  Regions have a `show` method which can be passed a `View`.  When a view is passed to a `Region.show`, the view is appended to the Regions associated DOM element and its `render` method is triggered.  An associated `close` method is also available, which contains some basic logic for tearing down the Region's view.  We will see how `show` is used later in Controller.js.

AppRouter.js
------------
   AppRouter.js is where you can configure application-level routing paths.  It is a simple example of a Marionette.js AppRouter class, which is a variation of a Backbone.Router.  AppRouter's allow you to configure routes in an `appRoutes` map.  When a route in `appRoutes` is fired from a hash change event, it gets handled in the AppRouter's associated `controller` attribute object.  `AppRouter.controller` can actually be any object with method names that match the values in `appRoutes`, but Marionette provides a simple `Marionette.Controller` object which can be used for this purpose, and which provides Marionette event-handling and an `initialize` method.  

Here is a simple example of how a Marionette.Controller and Marionette.AppRouter interact:
        
        var AppRouter = new Backbone.Marionette.AppRouter({
           //"home" must be a method in AppRouter's controller
           appRoutes: {
               "home": "home"
           }, 
           controller: new Backbone.Marionette.Controller({
                home: function() {
                    //do something
                }
            })
        });

   Here we see that when a URL change event occurs and the URL hash matches `#home`, the `home` method in `AppRouter.controller` will be fired.

Controller.js
----------------
   Controller.js is an example of a `Marionette.Controller` as described above.  Please note that a Controller in Marionette is different than a typical MVC controller.  Read more about it [here](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.controller.md).  In Controller's `initialize` method, we show our first View, `HeaderView` in the `App.headerRegion` region. 

        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },

   Then, in our `index` function - which handles hash change routing from the `AppRouter` as described above - we show a `TableView` in the Application's `mainRegion`:

        index:function () {
            App.mainRegion.show(new TableView());
        }

Model.js
--------
   Model.js starts with a define method that lists jquery and backbone as dependencies.

   The rest of the file is a pretty standard Backbone.js Model class.

   Like other Backbone.js classes, there is an `initialize()` method that acts as the Model's constructor function.  There is also a **defaults** object that allows you to set default Model properties if you wish.

   Finally, a new Model class is returned.

Collection.js
------------------
   Collection.js starts with a define method that lists jquery, backbone, and Model.js as dependencies.

   The rest of the file is a pretty standard Backbone.js Collection class that is used to store all of your Backbone Models.  The Collection model property is set to indicate that all Models that will be within this Collection class will be of type Model (the dependency that is passed into the file).

   Finally, a new Collection class is returned.

Gruntfile.js
------------
This file is ready made for you to have your entire project optimized using Grunt.js, the [Require.js Optimizer](https://github.com/jrburke/r.js/) and [almond.js](https://github.com/jrburke/almond).

Grunt.js is a JavaScript command line task runner that allows you to easily automate common development tasks such as code linting, minification, and unit testing.

Almond.js a lightweight AMD shim library created by [James Burke](https://github.com/jrburke), the creator of Require.js.  Almond is meant for small to medium sized projects that use one concatenated/minified JavaScript file.  If you don't need some of the advanced features that Require.js provides (lazy loading, etc) then Almond.js is great for performance.

Marionette-Require-Boilerplate sets you up to use Require.js in development and Almond.js in production.  By default, Marionette-Require-Boilerplate is in _development_ mode, so if you want to try out the production build, read the production instructions below.

**Production Build Instructions**

Navigate to the root directory of the Marionette-Require-Boilerplate folder and type **grunt** and wait a few seconds for the build to complete.

> If you are on a Windows machine, you will have to type `grunt.cmd`

Once the script has finished, you will see that both _Init.min.js_, and the _main.min.css_ files will be created/updated.

Next, update the `production` local variable inside of **index.html** to be **true**.

And that's it!  If you have any questions just create in an issue on Github.

> Note that when running optimized builds, you must define a separate build process for each i18n language supported.  


#FAQ

**What libraries have you included?**

   -Marionette, Backbone, Require, Lodash, Almond, jQuery, jQueryUI, and Twitter Bootstrap.

**Why are you using Grunt for the build?**

   - Grunt comes jam packed with features and plugins to help improve project automation tasks.  Although the main job of Grunt is to run the Require.js optimizer, it is also for other tasks such as JSHinting your code.

**What Grunt plugins are you using?**

   - The boilerplate uses the **grunt-contrib-requirejs** plugin to run the Require.js optimizer and the **grunt-contrib-jshint** plugin to automate JSHint code quality checking.  Both plugins are maintained by the core Grunt team.

**What Grunt tasks can I use?**

   - The boilerplate provides `test`, `build`, and `default` tasks.

   - The `test` task will only JSHint your code for quality.  You can run the `test` task by typing `grunt test`.

   - The `build` task will concatenate and minify your JavaScript and CSS files using the Require.js optimizer.  You can run the `build` task by typing `grunt build`.

   - The `default` task will run both the `test` and `build` tasks.  You can run the `default` task by typing `grunt`.
   

**Do I have to use everything the boilerplate gives me?**

   -No!  Feel free to update the boilerplate to fit the needs of your application.  Certain things that you might not want/need include templates, the examples, etc.

**Do I need a web server to test the boilerplate?**

   -Yep, because the Require.js text plugin dynamically pulls in template files via ajax (which is not allowed with the `File://` local extension.  Luckily for you I have provided an easy to use Node.js web server for convenience.

**Can I contribute to this project?**

   -Please do! I am learning just like you.  If you want to contribute, please send pull requests to the dev branch.



##Change Log

`0.1.0` - January 21, 2013

- Cloned project based off of [Greg Franko](https://github.com/gfranko)'s [Backbone-Require-Boilerplate](https://github.com/gfranko/Backbone-Require-Boilerplate) project.  

- Added Marionette

- Added example tea products collection and example views

## License
Copyright (c) 2014 Robert Stettner
Licensed under the MIT license.		
