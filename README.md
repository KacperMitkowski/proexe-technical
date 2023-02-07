# Technical exercise

This is a simple website with fake, basic CRUD with sortings, appbar, light/dark theme etc.

## Used technologies:
- Javascript, Typescript, React.js (with hooks), 
- mui, css, html
- axios

## How to run app:
1. download repo
2. npm install
3. npm start
4. visit http://localhost:3000/ in your browser

## Details:
* Instead of using redux I used useContext with useReducer
* I added dummy buttons in appbar
* I tried to implement CQRS
* RWD is implemented
* Project is in React 17 since there were some problems with compatibility with mui
* only url for GET actually gets data. Then create/update/delete runs on the stored data. If you like to check the validation for failed request you need to change from API_URL to FAKE_URL (you can try in post/put/delete as well - show below) 

![image](https://user-images.githubusercontent.com/43199382/217274438-33261ed3-9d6c-464b-ba98-0ef819205c2b.png)
