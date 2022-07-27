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

const colors = {
    normal : "antiquewhite",
    red : "red",
    grey : "grey",
    green : "green",
    purple : "purple"
}

function changer() {
    let selectedColor = document.getElementById("colorChanger").value;
    switch (selectedColor){
        case "red" :
            setColor(colors.red)
            break;
            case "grey" :
                setColor(colors.grey)
                break;
                case "green" :
                    setColor(colors.green)
                    break;
                    case "purple" :
                        setColor(colors.purple)
                        break;
                        default:
                            document.getElementById("contain").style.backgroundColor = "antiquewhite";
                            break;
    }
}

function setColor(colors) {
    document.getElementById("contain").style.backgroundColor = colors;
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}