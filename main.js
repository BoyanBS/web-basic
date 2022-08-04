window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
    }, 1000);

    const localSelectedColor = localStorage.getItem('chosenColor');
    console.log('selectedColor', localSelectedColor);

    // Information After Reload
    if(!!localSelectedColor) {
      setColor(localSelectedColor) 

      const options = [...document.getElementById("colorChanger").options];

      options.forEach((option, index) => {
          if(option.value === localSelectedColor ) {
            document.getElementById("colorChanger").options[index].selected = true;
          }
      });
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

 

  // Requests
  function get() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setInfo(JSON.stringify(json[0])));
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
