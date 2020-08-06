# Intro

Pinboard is an open-source application where you can build up a visual board with nodes from different media. Find a working demo here: [Pinboard by Daan](https://pinboard-three.vercel.app/)

# Incentive

The problem arose when I wanted to gather works from different media (e.g. Instagram, Twitter, local and images found on the web), and could not find a service that allowed me to do so. This application is much like Pinterest, but allowes you to add works found on social media.

# Solution

By using modules that allow for the insertion of tweets and Instagram posts in a React interface, you can easily build up your moodboard through the `database.json` file. By providing a `type` (`instagram`, `twitter`, `image`), you can add any media-node you find online and add it to your board.

# Features

When adding a node, the tool allows you to add keywords using the `tags` array. The sum of all tags found in the `database.json` file will be showed through the toggle in the top of the interface. This list of tags simultaneously functions as a filter by setting the tags to be active or inactive.

# Install

Clone this repository

```
git clone git@github.com:daanrongen/pinboard.git
```

Change directory and install

```
npm install
# or
yarn install
```

Then run the application

```
npm run dev
# or
yarn dev
```

Navigate to `database.json` and add entries to your pinboard, one example is already provided in the JSON-file.

```
{
  "type": "instagram",
  "id": "https://www.instagram.com/p/CCBifKGl_Se/",
  "tags": ["visual design"]
}
```
