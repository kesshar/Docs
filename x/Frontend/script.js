const API="http://localhost:3000";

async function register(){
    const email=document.getElementById('email').value;
    const password=document.getElementById('pass').value;
    const res=await fetch(API+"/register",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({email,password})
    });
    const data=await res.json();
    if(!res.ok){
        alert(data.message);
        return;
    }
    alert("Registered Successfully");
    window.location="./index.html";
}

async function login(){
    const email=document.getElementById("email").value;
    const password=document.getElementById("pass").value;
    const res=await fetch(API+"/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({email,password})
    });
    const data=await res.json();
    localStorage.setItem("token",data.token);
    window.location="dashboard.html";
}


async function createNote(){
    const text=document.getElementById("notetext").value;
    const token=localStorage.getItem("token");
    await fetch(API+"/notes",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "authorization":token
        },
        body:JSON.stringify({text})
    });
    loadNotes();
}

async function loadNotes(){
    const token=localStorage.getItem("token");
    const res=await fetch(API+"/notes",{
        headers:{
            "authorization":token
        }
    });

    const notes=await res.json();
    const ul=document.getElementById("notes");
    ul.innerHTML="";
    notes.forEach(n=>{
        const li=document.createElement("li");
        li.innerHTML=`
        ${n.text}
        <button onclick="deleteNote('${n._id}')">Delete</button>
    `;

    ul.appendChild(li);

  });

}


// DELETE NOTE
async function deleteNote(id){

  const token = localStorage.getItem("token");

  await fetch(API+"/notes/"+id,{
    method:"DELETE",
    headers:{
      "authorization":token
    }
  });

  loadNotes();

}


if(document.getElementById("notes")){
  loadNotes();
}