# Walkwaves

A mobile app for exploring your city, built using the [OpenCage Geocoding API](https://opencagedata.com/) and React Native.

Learn how to build this app with this series of free tutorials:

[How to build a location based app in React Native - Part 1](https://learnetto.com/tutorials/how-to-build-a-location-based-app-in-react-native-part-1)

## How to run

Clone the repo:

`git clone https://github.com/learnetto/walkwaves.git`


Add your [Opencage API KEY](https://opencagedata.com/api) in `App.js`:

```
  reverseGeocode = () => {
    const key = 'YOUR_API_KEY';
```

Then cd into the directory, install packages and start the dev server:

```
cd walkwaves
yarn
expo start
```
