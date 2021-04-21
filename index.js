/**
 * Getting the parent div from the html file
 */

var parentContainer = document.getElementById('outter');
console.log("1")

const tableTag = document.getElementById('table-set');

function editButtonToggle(e){
    console.log("e",e.target);
    var childNode = e.target.parentElement.parentElement.children;
    //console.log("childNode",childNode);
    if(e.target.innerText == 'Edit'){
        e.target.innerText = 'Save'
        for(let item of childNode){
            //console.log("item",item);
    
            if(item.className == 'content-editable'){
                item.contentEditable = "true";
                
            }
        }
        
    }else{
        e.target.innerText = 'Edit'

        for(let item of childNode){
            //console.log("item",item);
    
            if(item.className == 'content-editable'){
                item.contentEditable = "false";
                
            }
        }
    }
    return e.target;
}

  
var oReq = new XMLHttpRequest();
oReq.responseType = 'json';
oReq.open("GET", "https://reqres.in/api/users");
oReq.onload  = function() {
    let jsonResponse = oReq.response;
    console.log("hi", jsonResponse)
    // do something with jsonResponse
    for(let item of jsonResponse.data){
     
        //console.log("item",item);
        const tableRow = document.createElement('tr');
        tableRow.setAttribute("id","tableRow-id");
        const tableDataId = document.createElement('td');
        const tableNodeId = document.createTextNode(item.id);
        tableDataId.appendChild(tableNodeId);
        const tableDataEmail = document.createElement("td");
        const tableNodeEmail = document.createTextNode(item.email);
        tableDataEmail.appendChild(tableNodeEmail);
        tableDataEmail.setAttribute("class","data-email");
        const tableDataFirstName = document.createElement("td");
        tableDataFirstName.setAttribute("class","content-editable");
        const tableNodeFirstName = document.createTextNode(item.first_name);
        tableDataFirstName.appendChild(tableNodeFirstName);
       const tableDataLastName = document.createElement("td");
        const tableNodeLastName = document.createTextNode(item.last_name);
        tableDataLastName.setAttribute("class","content-editable");
        tableDataLastName.appendChild(tableNodeLastName);
        const tableDataAvatar = document.createElement("td");
        const tableNodeAvatar = document.createTextNode(item.avatar);
        tableDataAvatar.appendChild(tableNodeAvatar);
        const tableDataButton = document.createElement("td");
        const tableButton = document.createElement("button");
        const tableButtonText = document.createTextNode("Del");
        tableButton.appendChild(tableButtonText);
        tableDataButton.appendChild(tableButton);
        const tableButtonEdit = document.createElement("button");
        const tableButtonEditText = document.createTextNode("Edit");
        tableButtonEdit.setAttribute("id","edit-button");
        tableButtonEdit.appendChild(tableButtonEditText);
        tableDataButton.appendChild(tableButtonEdit);
        tableButton.onclick = function(e){
            var confirmMsg = confirm("Are you sure you want to delete this row?");
            if (confirmMsg == true) {
            //console.log("e",e.target.parentElement.parentElement);
             e.target.parentElement.parentElement.style.display = "none";
            } 
        }

        tableButtonEdit.onclick = editButtonToggle


        tableRow.appendChild(tableDataId);
        tableRow.appendChild(tableDataEmail);
        tableRow.appendChild(tableDataFirstName);
        tableRow.appendChild(tableDataLastName);
        tableRow.appendChild(tableDataAvatar);
        tableRow.appendChild(tableDataButton);
        tableTag.appendChild(tableRow);
       

    }
 };
oReq.send(null);

      
    



