# Timeless react-native coding challenge

To get an impression of how you are working with react-native we want you to
spend some time to implement a simple app to show an overview and detail view of
the assets currently hosted on timeless.investments.

To load the asset data you can use our graphql endpoint at
https://graph.cdn.timeless-internal.net/graphql. A playground with staging data
is reachable at https://graph.staging.timeless-internal.net/graphql.

In the file ./queries.ts are two react hooks to use for asset list loading and
asset detail loading.

As an inspiration you can use these designs of our app taken from figma:

<div style="display:flex;width:766px;gap:16px;align-items:flex-start;">
  <img src="./documentation/browse.png" style="flex-shrink:0; width:375px;" alt="browse page" width="375" />
  <img src="./documentation/product-detail-page.png" style="flex-shrink:0; width:375px;" alt="detail page" width="375" />
</div>

## expected scope

- as an initial page the app should show the list of assets
- by pressing an asset the app should navigate to the detail page
- the implementation should show some kind of persistent state, like the
  subscriptions to notifications of assets (the bell icon, on the assets tile).
  This does not need to be connected to a backend and can be mocked locally
- for the implementation you should not spend too much time, please keep it
  around 4 hours and prioritize the topics that are important for you

- to submit the coding challenge please fork this repository and submit a pull
  request with your solution

## process after submission

- we will have a closer look into the code and set up an appointment to discuss
  the result
- the discussion will be held in a video call and should start with a short
  presentation of the solution
- after the presentation the discussion will go deeper into the code to speak
  about the implementation and decisions made, e.g. why some parts are
  prioritized and what would be done differently with more time

## hints

- in the folder `./assets` you can find some icons used in the designs, and some
  files used in our design system to describe our colors, typography, shadows
  and other design elements
