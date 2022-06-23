// <!-- Option 1: Bootstrap Bundle with Popper -->
// <!-- Option 1: Bootstrap Bundle with Popper -->
/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
crossorigin="anonymous"></script> */

// <!-- Option 2: Separate Popper and Bootstrap JS -->
// <!--
// <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
// -->

  function getandupdate() {
    console.log("Updating List...");
   tit=document.getElementById('title').value;
   des=document.getElementById('description').value;
   if(localStorage.getItem('itemsJson')==null) {
     itemJsonArray=[];
     itemJsonArray.push([tit,des]);
     localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
   }
   else {
     itemJsonArrayStr=localStorage.getItem('itemsJson')
     itemJsonArray=JSON.parse(itemJsonArrayStr);
     itemJsonArray.push([tit,des]);
     localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));

   }
   update();
  }
   function update() {
    if(localStorage.getItem('itemsJson')==null) {
     itemJsonArray=[];
     
     localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
   }
   else {
     itemJsonArrayStr=localStorage.getItem('itemsJson')
     itemJsonArray=JSON.parse(itemJsonArrayStr);
  
   }
   

   //populate the table
    let tablebody=document.getElementById("tablebody");
   let str=" ";
   itemJsonArray.forEach((element ,index)=> {
     str+=`
     <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
     
      </tr>
      `
     
   });
   tablebody.innerHTML=str;
  }
  
 add=document.getElementById("add");
 add.addEventListener("click",getandupdate);
update();
function deleted(itemindex) {
 console.log("Delete",itemindex);
 itemJsonArrayStr=localStorage.getItem('itemsJson');
     itemJsonArray=JSON.parse(itemJsonArrayStr);

//delete itemindex  element from the array
itemJsonArray.splice(itemindex,1);
     localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
     update();
}
   
