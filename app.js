/* THEORY                   
// array = массив 
// const array = [1, 2, 3, 5, 20, 42]
// const arraySting = ['a', 'b', 'c', null, 12]

// const array = new Array(1, 2, 3, 5, 20, 42)
// console.log(array.length)

// console.log(array[5])
// console.log(array[array.length]) // undefined, cos array[6] doesnt exist
// array[0] = 'khan';
// console.log(array)

// adding new elemetns 

// array[array.length] = 'test'
// console.log(array) */


const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)
// const notes = ['обучиться javascript','найти работу']
//     function render () {
//         for (let i = 0; i < notes.length; i++){
//             listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//         }
// } 
// render ()


// createBtn.onclick = function () {
//     if(inputElement.value.length === 0) {
//         return 
//     }
//     // listElement.innerHTML = 
//   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value) )
// inputElement.value = ''
// }


// function getNoteTemplate (title) {
//     return `<li
//     class="list-group-item d-flex justify-content-between align-items-center"
//   >
//     <span>${title}</span>
//     <span>
//       <span class="btn btn-small btn-success">&check;</span>
//       <span class="btn btn-small btn-danger">&times;</span>
//     </span>
//   </li>`
// }




/* Object theory *
 * 
 * key: value


const person = {
    firstName: 'Alikhan',
    lastName: 'Osipov',
    age: 24,
    birthYear: 1998,
    hasGirlfriend: false,
    languages: ['kz', 'ru', 'eng'],
    getFullName: function (){
        console.log(person.firstName + ' ' + person.lastName)
    }
}

console.log(person['languages'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = true;
console.log(person[key])

person.getFullName()

*/

const notes = [
    // {
    //     title: 'заметка1',
    //     completed: false,
    // },
    // {
    //     title: 'заметка2',
    //     completed: true,
    // },
]

function render () {
    listElement.innerHTML = ''
    if(notes.length === 0){
        listElement.innerHTML = '<p> Нет элементов </p>'
    }
    for (let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
} 
render ()

createBtn.onclick = function () {
    if(inputElement.value.length === 0) {
        return 
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}
 
listElement.onclick = function (event) {
    if(event.target.dataset.index){
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type === 'toggle'){
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove'){
            notes.splice(index, 1)
        }
    }render()
} 
function getNoteTemplate (note, index) {
    return `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span class="${note.completed ? 'text-decoration-line-through' : 'color-red'}">${note.title}</span>
    <span>
      <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" 
      data-index="${index}" data-type="toggle">&check;</span>
      <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
    </span>
  </li>`
}