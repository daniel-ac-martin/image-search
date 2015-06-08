Image Search
============

A simple web app for searching recent [Instagram]\(TM\) images based on their
tags.

Live version
------------

A [live version] of the app is available.

Usage
-----

1. Open the page in a modern web browser with javascript enabled.

2. Type the tag you would like to search for in "Tag". e.g. "Cats" (The '#' is
   optional.)

3. Choose the number of images you would like to see in "Number of images".
   (Must be between 1 and 20. Defaults to 12.)

4. Click "Search".

Installation
------------

If you would like to install this app on your own website. Simply clone this
repository and upload to a location of your choice.

If you make any changes to the code please edit `js/main.js` and replace the
clientID with a new one.

To clone this repository you can use the following command:

```shell
git clone https://github.com/daniel-ac-martin/image-search.git
```

You can then upload the files to the location of your choice. Alternatively you
should be able to simply open `index.html` directly into your browser without
uploading to a web server.

About
-----

This app is built exclusively from frontend technologies. It uses
[Initializr]-Bootstrap as it's base to help achieve good cross-browser
compatibility and responsive design. The [Spectragram] library is used to
interact with Instagram's public API, and [jQuery] is used to tie it all
together.

Most of the files in this repository are simply 'boilerplate' provided by
Initializr. The files of most interest are:

1. `index.html` (This still contains some boilerplate code.)
2. `css/main.css`
3. `js/main.js`

Features
--------

- This app is built using only frontend technologies so no complicated build
  process is involved.

- As it uses AJAX queries straight to Instagram's servers, it is generally
  faster than a full page load would be under a backend technology solution
  without the extra point of failure necessitated by a backend approach.

- It has a simple 'responsive' design, and works well on a variety of screen
  sizes from smart phones to 1080p desktops.

- Takes advantage of HTML5 for form validation.

Downsides to this approach
--------------------------

- Javascript is required.

Ideas for improvements
----------------------

- Backend scripting could be added to provide a fall-back when javascript is not
  available. (A backend solution *might* benefit from caching Instagram's JSON
  responses for popular searches using a technology like [MongoDB].)

- It should be possible to share a search URL. (This could be done with
  [jQuery BBQ] or possibly "Session history management".)

- It would be nice to have a button that loads the next set of images.
  Unfortunately, such a feature requires changes to the Spectragram library.

[Instagram]:    https://instagram.com/
[live version]: http://www.daniel-martin.co.uk/image-search/
[Initializr]:   http://www.initializr.com/
[jQuery]:       https://jquery.com/
[Spectragram]:  http://lab.adrianquevedo.com/jquery-spectragram/
[MongoDB]:      https://www.mongodb.org/
[jQuery BBQ]:   http://benalman.com/projects/jquery-bbq-plugin/
