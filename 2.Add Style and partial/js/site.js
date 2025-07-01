//DOM - hntl розмітка - я знаходиться в блоку <body>
//зберігає вказівник на елемент, який його визиває.
// function loadDOM(path) {
//     //this
// }

const loadDOM = (path) => {
    //Буду проводити підтвантаження даних по шляху, який передається
    console.log("path = ", path);
    //Об'єкт, який може відправляти заипти на сервер
    const xhr = new XMLHttpRequest();
    //GET = відправити запит
    //path - що хочемо завантажити
    //false - дані будуть завантажувати синхроно
    xhr.open("GET", path, false); 
    xhr.send(); //відправляю запит
    //document - це по факту елемент body - 
    document.write(xhr.response);
}