## Overview
- After taking a career break, I am looking for new projects to flex my development muscles. At the same time, I realized a biography site would be useful, so I developed this project in my spare time.
- A simple site such as this could be build with any number of site builders. However I have over-engineered this app with Typescript, React, Redux, Routing, data fetching and validation.

## What are the core concepts?
- This app is simply a representation of my resume, therefore the site model is designed with relatively small classes.
- For efficiency, create-react-app was used to initialize the app.
- Responsive layout is handled by React Bootstrap.
- There are limited UI interactions and React Bootstrap handles a lot of them. Therefore the only redux states required are the open state of the sidebar and the selected skill type. This could have been handled by a simpler React Context.
- Sass is used for styling. There are separate partials for colors, variables and bootstrap. Where possible, bootstrap variables are overridden, but in some cases components will have their own scss files.
- React Router handles page navigation. Each route will show a Page component.
- Page components share the same functionality for checking loading and error states from React Query.
- The AJV package is used for data validation.
- As is my typical approach, UI components are kept as small and independent as possible.
- The app is hosted on a Github Page and uses my custom dev domain. Committing to the gh_pages git branch publishes the app.

## What have I learned?
- This is my first time to develop an entire app with Typescript. It seems to integrate with react well. I have spent years in my past career as a Java developer, so I am comfortable with strongly-types languages.
- React Redux Toolkit has a new concept of slices. I found this very convenient as it removed alot of the reducer/action boiler-plate I have written before.
- Integrating React Query was simple due to its available hooks, however in this app, we are reading local json files for data, which doesn't take full advantage of caching techniques.
- I built the validation schemas but have yet to integrate them. I haven't decided if a web application should actually need to validate the API data. Wrapping the json response in the site model classes provide safety values incase any returned data is missing.

## What updates can be made going forward?
- Jest unit testing needs to be added.
- Automated feature tests need to be added.
- I hope to add a settings page that will include a localization language selector and a light/dark color theme selector.
- I will start browsing public apis and building other projects based on available data.
- New projects will be added to the Projects page.
- Talk to a Visual Designer to review the light/dark color themes.
