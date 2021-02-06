# Yorch Bot

## Description

This is a chatbot for my Twitch channel. It is similar to the one I use for Icemanrv's channel.
I will try new functinalities in this bot before implementing them in the one I use in his channel.

## Requirements

- [Nodejs](https://nodejs.dev/)
- [Yarn](https://yarnpkg.com/)

## Installation

Clone this repository:

```
git clone https://github.com/JorgeMayoral/yorch-bot
```

Enter in the directory and install dependencies:

```
cd yorch-bot
yarn
```

Create a file called .env and fill it with your Twitch username and oauth key (You can get the oauth key [here](https://twitchapps.com/tmi/))

```
USER=yourUsername
PASS=oauth:oauthKey
```

You can modify the bot however you like.

Add the channels where the bot is going to post to the line 13

## Running

### Development

To run the app in development mode with autoreload after changes run:

```
yarn dev
```

### Production

To run the app in production mode run:

```
yarn start
```
