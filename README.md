# Doctor Lookup

Doctor Lookup is a simple app built to highlight the basics of asynchronous AJAX API calls.

**Doctor Lookup** will let you find medical providers in a given area that by searching their information on **BetterDoctor.com**.  But can't we already do this through **BetterDoctor's** existing (and quite polished) site?  Yes!  The real fun of **Doctor Lookup** is looking at the code under the hood.  This app implements the **BetterDoctor** API, serving as a good introduction to using API's, parsing their returns, and building a UI.
**Doctor Lookup** is also an example of how to set up and develop a project using **Node Package Manager (NPM)** , **Bower**, and **Gulp** task runner.

## Application Behavior

* The application is fairly straightforward from the user perspective.  It takes one primary input, a text string in the search input field.  The user may further customize by changing the municipality of the search, radius, and number of results returned/  The app will then return a list of doctors whose files contain that text string somewhere in their BetterDoctor entry.


## Installation

Requires **npm** and **bower** installed in order to run.

Step 1: **Clone this repository to your local computer**

```console
git clone [url]
```

Step 2: **Install all development and production dependencies from the project root directory**

```console
npm install
```
```
bower install
```
Step 3: **Note that this project requires an API key from Better Doctors to be exported from a `.env` file in the project root. To run, please obtain a free key from BetterDoctor and insert it into  `.env` as `apiKey`**

```js
exports.apiKey = "YOUR KEY HERE";
```

Step 4: **Use _gulp_ to build compile the app**

```console
gulp build
```

**Note:** You can create a minified production build of the app by adding the `--production` tag

```console
gulp build --production
```

Step 5: **Use _Browser Sync_ to run a local server instance**

```console
gulp serve
```

Step 6: **Enter whatever horrible medical affliction you suffer into the form and click `Search` to find some doctors!**


## Known Bugs

* Not exactly a bug, but the data set doesn't actually do a good job of searching by by medical condition.  The API seems to perform a text search over the doctor's bio and practice description, many of which only contain general descriptions of their practice areas.  For example, "toothache" will not return any results when searching in the Portland area. 

## Technologies Used

* This project was developed using NPM and Bower dependency managers.  The following packages are used in one or both of the development or produciton builds:
*   Gulp.js (workflow automation)
*   Browserify (manage requirements between files in app logic)
*   Gulp concat (concatenation of multiple files)
*   Gulp-uglify (Minification of files for production build)(also, saying Uglify is fun)
*   Gulp-Util (Creates environment variables)
*   Vinyl Source Stream (Assists with paths in concatenation)
*   JS Hint (javascript linter)
*   Sass (CSS compiler)
*   Gulp Sourcemaps (used in Sass source management)
*   Bower-files (Assists in managing front end vendor dependencies)
*   Browser Sync (runs local dev server and file watchers)
*   Del (file cleanup during builds)

*   And all the usual suspects: HTML, CSS, Javascript, Atom text editor, Spotify for Dev's headphone soundtrack.

## Support and Contact

_Created by Zach Swanson.  No ongoing support planned, but feel free to reach out with comments or questions to zach.j.swanson@gmail.com_

## License

MIT License. Copyright 2017 Zach Swanson
