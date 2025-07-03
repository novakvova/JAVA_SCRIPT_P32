        //Чекаємо завантаження усіх елементів
        window.onload = () => {

            var usersJson = localStorage.users;
            console.log("UsersJson", usersJson);
            var list = JSON.parse(usersJson);

            let content = "";
            for(let i=0;i<list.length;i++) {
                content += 
                `
                <tr>
                    <th scope="row">${i+1}</th>
                    <td>${list[i].lastName}</td>
                    <td>${list[i].firstName}</td>
                </tr>
                `;
            }

            listUsers = document.getElementById("listUsers");
            //Астоматично знайшов елемент по Id
            listUsers.innerHTML = content;

            console.log("list", list.length);


            //видаляю останій із списку
            buttonDeleteLast.onclick = () => {
                list.pop(); //Видалив останій із списку
                localStorage.users = JSON.stringify(list);
                location.reload(); //Перегружаємо сторінку
            }

        }

        //innerHTML - Можна змінювати вміст компонента повністю