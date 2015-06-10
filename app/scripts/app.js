/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.data = {
    'sounds': {
      /*'meadow-ambience': {
        src: './sound-assets/meadow-ambience.wav',
        name: 'Meadow Ambience'
      },
      'aspen-tree-in-strong-wind': {
        src: './sound-assets/aspen-tree-in-strong-wind.wav',
        name: 'Aspen Tree'
      },*/
      'rain-thunder': {
        src: 'http://www.freesound.org/people/reinsamba/sounds/17084/download/17084__reinsamba__rain-and-final-thunder-clap.mp3',
        name: 'Rain Thunder'
      },
      'rain': {
        src: 'http://www.freesound.org/people/RHumphries/sounds/2519/download/2519__rhumphries__rbh-rain-01.wav',
        name: 'Rain'
      },
      'nightingale': {
        src: 'http://www.freesound.org/people/reinsamba/sounds/17185/download/17185__reinsamba__nightingale-song-3.wav',
        name: 'Nightingale'
      },

    }
  };

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    document.querySelector('body').removeAttribute('unresolved');

    // Ensure the drawer is hidden on desktop/tablet
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    drawerPanel.forceNarrow = true;
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

})(document);

// TODO: Decide if we still want to suggest wrapping as it requires
// using webcomponents.min.js.
// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
// )(wrap(document));