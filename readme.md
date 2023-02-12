# node-tiklydown 
Wrapper For TiklyDown API to use download TikTok Post

## Features
- Download TikTok videos
- Download TikTok slide images

## Installation 
### NPM Version 
```bash
$ npm install node-tiklydown 
```
### GitHub Version 
```bash
$ npm install github:caliphdev/node-tiklydown 
```

## Usage
### Call v1 and v2 variables 
```javascript
const { v1, v2 } = require("node-tiklydown");
```
### Download TikTok Video 
To download TikTok video, use `v1` function with TikTok video URL parameter. 
```javascript
v1(url).then(data => {
  // Do something with the data
});
```
### Download TikTok Slide Image 
To download TikTok slide image, use `v2` function with TikTok slide image URL parameter. 
```javascript
v2(url).then(data => {
  // Do something with the data
});
```
