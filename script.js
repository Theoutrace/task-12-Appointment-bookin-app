const myForm = document.getElementById('my-form')
const userName = document.getElementById('name')
// console.log(userName);
const userEmail = document.getElementById('email')
const button = document.getElementById('form-button')
// console.log(button);

button.addEventListener('click',onSubmit)

function onSubmit(e){
  e.preventDefault()
  // console.log('working');

  let user_Obj = {
    name: userName.value,
    email: userEmail.value
  }
  // console.log(user_Obj);
  /////// we constructed an object till here
  // looks like  {name: 'Abhishek', email: 'fghjk@gmail.com'}
  // localstorage accepts only string so we convert it to one

  const obj_stringified = JSON.stringify(user_Obj)
  // console.log(obj_stringified);

  ///adding this stringified object to localstorage
  //save it by making email as a key for object
  localStorage.setItem(userEmail.value,obj_stringified)


  
  //////////////////to clear input field after submit
  userName.value = ''
  userEmail.value = ''
}
////////////////////////////////////////////////////////////////
//                        task 12
////////////////////////////////////////////////////////////////

//step 1. takeout keys from localstorage and make it object  //
// this will make an array of all items in keys
let arrOfKeys = Object.keys(localStorage)   
// console.log(arrOfKeys);   //prints all the keys in array

//step 2. running forEach with every key to get its value
arrOfKeys.forEach(function(key){

  //step 3. getting value saved in stringifiedDetails
  let stringifiedDetails = localStorage.getItem(key)
  // console.log(stringifiedDetails);

  //step 4. break items using parse and make object of data in stringifiedDetails
  let userDetails = JSON.parse(stringifiedDetails)
  // console.log(userDetails);

  ////create element

  //step 5. create element, assign values and append under parent
  const nameOfUser = document.createElement('h4')
  const emailOfUser = document.createElement('h4')

  nameOfUser.innerHTML = userDetails.name
  emailOfUser.innerHTML = userDetails.email
  const parentName = document.getElementById('divName')
  const parentEmail = document.getElementById('divEmail')
  parentName.appendChild(nameOfUser)
  parentEmail.appendChild(emailOfUser)
})




