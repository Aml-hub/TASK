async function fetchUsers() {
    const response =await fetch('https://jsonplaceholder.typicode.com/users');
    const users=await response.json();
    return users;
}
function showUsers(users){
    const Tbody=document.getElementById('tbody');
    Tbody.innerHTML='';
    users.forEach(user =>{
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        <td>${user.phone}</td>
        <td> <button id='delete' onclick="deleteUser(this)">Delete</button> </td>
        `;
        Tbody.appendChild(row);
    })
}
function deleteUser(button){
    const row=button.parentElement.parentElement;
    row.remove();
}
document.getElementById("Show").addEventListener('click',async()=>{
    const users=await fetchUsers();
    showUsers(users);
})