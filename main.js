window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
    }, 1000);

    
    // if(localSelectedColor !== null ) {
    //   setColor(localSelectedColor) 
     
      // options.forEach((option, index) =>  {
      //     if(option.value === localSelectedColor ) {
      //       document.getElementById("colorChanger").options[index].selected = true;
      //     }
      // });
    // } 
    const localSelectedColor = localStorage.getItem('chosenColor');
    console.log(localSelectedColor)
    
    const options = [...document.getElementById("colorChanger").options];
    for (let i = 0; i<options.length; i++) {
      setColor(localSelectedColor) 
      if(options[i].value === localSelectedColor ) {
        document.getElementById("colorChanger").options[i].selected = true;
      }
      
    }
    const select = document.getElementById("colorChanger");
    select.addEventListener("change", () => changer());
  });

  // Colors
  const colors = {
    normal: "antiquewhite",
    red: "red",
    grey: "grey",
    green: "green",
    purple: "purple",
  };

  function changer() {
    let selectedColor = document.getElementById("colorChanger").value;
    localStorage.setItem('chosenColor', selectedColor)
    switch (selectedColor) {
      case colors.red:
        setColor(colors.red);
        break;
      case colors.grey:
        setColor(colors.grey);
        break;
      case colors.green:
        setColor(colors.green);
        break;
      case colors.purple:
        setColor(colors.purple);
        break;
      default:
        setColor(colors.normal);
        break;
    }
  }

  function setColor(colors) {
    document.getElementById("contain").style.backgroundColor = colors;
  }

  // Format

  let input = document.getElementById("textLogger");
function komo() {
  let formatted = JSON.stringify(JSON.parse(input.value), null, 4);
  input.innerHTML = formatted;
};
 

  // Requests
  function get() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Response) => {
      console.log(Response);
      return Response.json();
    })
      .then((json) => setInfo(JSON.stringify(json)));
  }

  function post() {
    fetch("https://reqbin.com/echo/post/json", {
      method: "POST",
      body: {
        id: "12345",
        user: "user",
        email: "Sincere@april.biz",
      },
    })
      .then((Response) => {
        console.log(Response);
        return Response.json();
      })
      .then((answer) => {
        console.log(answer);
        setInfo(JSON.stringify(answer));
      });
  }

  function deleteCall() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((Response) => {
        console.log(Response);
        return Response.json();
      })
      .then((deleteRes) => {
        console.log(deleteRes);
        setInfo(JSON.stringify(deleteRes));
      })
      .catch((Error) => {
        console.log(Error);
      });
  }

  function setInfo(data) {
    document.getElementById("textLogger").innerHTML = data;
  }
  
  
  function actualClear(){
    document.getElementById("textLogger").innerHTML = ""
    console.log("Successful Clear")
  }

