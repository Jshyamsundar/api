fetch("https://fakestoreapi.com/users").then((date)=>{
    // console.log(date);
    return date.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`  <tr>
        <td>${values.id}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.password}</td>


        
    </tr>` 
    });
    document.getElementById("table-body").innerHTML=tableData;
}).catch((err)=>{
    console.log(err)
})