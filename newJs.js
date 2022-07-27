function get() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json =>
            setInfo(JSON.stringify(json[0]))
        )
}

function post() {
    fetch("https://reqbin.com/echo/post/json", {
        method: "POST",
        body: {
            "id": "12345",
            "user": "user",
            "email": "Sincere@april.biz"
        }
    })
        .then(Response => {
            console.log(Response)
            return Response.json()
        })
        .then(answer => {
            console.log(answer)
            setInfo(JSON.stringify(answer))
        })
}

function deleteCall() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
    })
        .then(Response => {
            console.log(Response)
            return Response.json()
        })
        .then(deleteRes => {
            console.log(deleteRes)
            setInfo(JSON.stringify(deleteRes))
        })
        .catch(Error => {
            console.log(Error)
        })
}

function setInfo(data) {
    document.getElementById("textLogger").innerHTML = data;
}

function changer() {
    let text = document.getElementById("colorChanger").value;
    if (text === "red") {
        document.getElementById("contain").style.backgroundColor = "red"
    } else if (text === "purple") {
        document.getElementById("contain").style.backgroundColor = "purple"
    } else if (text === "grey") {
        document.getElementById("contain").style.backgroundColor = "grey"
    } else if (text === "green") {
        document.getElementById("contain").style.backgroundColor = "green"
    } else {
        document.getElementById("contain").style.backgroundColor = "antiquewhite"
    }


    // switch (num) {
    //     case 5:
    //         console.log(5)
    //         return  5;
    //     case 10:
    //         console.log(10)
    //         break;
    //     default:
    //         break;
    // }
}

