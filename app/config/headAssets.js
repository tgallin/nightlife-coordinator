/* Based on the template in Web Starter Kit :
https://github.com/google/web-starter-kit/blob/master/app/index.html
*/
import favicon16 from '../images/favicon-16x16.png';
import favicon32 from '../images/favicon-32x32.png';

import {
  isDev
}
from '../config/app';

const metaAssets = () => {
  return [{
      charset: 'utf-8'
    },
    // Meta descriptions are commonly used on search engine result pages to
    // display preview snippets for a given page.
    {
      name: 'description',
      content: 'Nightlife coordinator app by tgallin - freeCodeCamp challenge'
    },
    // Setting IE=edge tells Internet Explorer to use the latest engine to
    //  render the page and execute Javascript
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    },
    // Using the viewport tag allows you to control the width and scaling of
    // the browser's viewport:
    // - include width=device-width to match the screen's width in
    // device-independent pixels
    // - include initial-scale=1 to establish 1:1 relationship between css pixels
    // and device-independent pixels
    // - ensure your page is accessible by not disabling user scaling.
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    // Disable tap highlight on IE
    {
      name: 'msapplication-tap-highlight',
      content: 'no'
    },
    // Add to homescreen for Chrome on Android
    {
      name: 'mobile-web-app-capable',
      content: 'yes'
    },
    // Add to homescreen for Safari on IOS
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }, {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }, {
      name: 'apple-mobile-web-app-title',
      content: 'NightlifeCoordinator'
    }
  ];
};

const linkAssets = () => {
  const links = [
    { rel: 'icon', sizes: '16x16', href: favicon16, type: 'image/png'}, 
    { rel: 'icon', sizes: '32x32', href: favicon32, type: 'image/png'},
    { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'},
    { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
    { rel: 'stylesheet', href: '/assets/styles/main.css' }
    // SEO: If your mobile URL is different from the desktop URL,
    // add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones
    // { 'rel': 'canonical', 'href': 'http://www.example.com/' }
  ];
  return isDev() ? links.filter(l => l.rel !== 'stylesheet' || l.href.substr(0,4)==='http') : links;
};

export const title = 'Nightlife Coordinator App - freeCodeCamp challenge';
export const meta = metaAssets();
export const link = linkAssets();
