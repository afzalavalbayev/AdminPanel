const form = document.querySelector(".form");
const api = 'https://fakestoreapi.com/auth/login';


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const username = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;

    const user = {
        username: username,
        password: password
    }

    login(api, user);

    
})

function login(url, data){
    document.querySelector(".btn").textContent = "Loading...";
    
    return axios.post(url, data).then((res) =>{ 
        if(res.data.token){

            document.querySelector(".btn").textContent = "Sign up";
            
            Toastify({
  text: "Login Succesfull",
  duration: 2000,
  destination: "https://github.com/apvarun/toastify-js",
  gravity: "top", 
  position: "center",
  stopOnFocus: true, 
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){}
}).showToast();

            localStorage.setItem("token", res.data.token);

            setTimeout(() =>{
                window.location.href = "../pages/dashboard.html"
            }, 1000)
        }
    })   

    .catch(() =>{
            document.querySelector(".btn").textContent = "Sign up";
            Toastify({
  text: "Username or password is incorrect!",
  duration: 2000,
  destination: "https://github.com/apvarun/toastify-js",
  gravity: "top", 
  position: "center",
  stopOnFocus: true, 
  style: {
    background: "linear-gradient(to right, #cf0000ff, #c51a1aff)",
  },
  onClick: function(){}
}).showToast();
        
    })
}