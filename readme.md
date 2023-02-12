# node-tiklydown 
Wrapper For TiklyDown API to use download TikTok Post

## Fitur
- Unduh video TikTok
- Unduh gambar slide TikTok

## Cara Penggunaan

### Memanggil variabel v1 dan v2
```
const { v1, v2 } = require("node-tiklydown");
```
### Unduh Video TikTok
Untuk mengunduh video TikTok, gunakan fungsi `v1` dengan parameter URL video TikTok.
```javascript
v1(url).then(data => {
  // Do something with the data
});
```
### Unduh Gambar Slide TikTok
Untuk mengunduh gambar slide TikTok, gunakan fungsi `v2` dengan parameter URL gambar slide TikTok.
```javascript
v2(url).then(data => {
  // Do something with the data
});
```