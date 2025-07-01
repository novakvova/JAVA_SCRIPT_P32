let listUsers = [];

const onSubmitForm = (event) => {
    event.preventDefault();
    const lastName = document.getElementById("lastName");
    const firstName = document.getElementById("firstName");
    // console.log("LastName = ", lastName.value);
    // console.log("FistName = ", firstName.value);

    listUsers.push(
        {
            lastName: lastName.value,
            firstName: firstName.value
        }
    );
    //аналог Dictionary
    // localStorage.users = "Салют козаки";
    console.log("List users", listUsers);
    localStorage.users = JSON.stringify(listUsers);
    console.log("List users json", JSON.stringify(listUsers));
}

window.onload = () => {
    console.log("onload");
    const btnRegister =  document.getElementById("btnRegister");
    //Повісим обробник натиску на кнопку
    btnRegister.onclick = onSubmitForm;
}

