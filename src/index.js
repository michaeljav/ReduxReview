

// import {createStore} from 'redux'
// const {createStore}  = require('redux')
import {ADD_TODO,DELETE_TODO,DONE_TODO} from './redux/actionTypes.js';
import store from './redux/store.js';

// const itemListDom = document.querySelector('#itemList');
// const itemDom = document.querySelector('#item');

// console.log('itemDom');
// console.log(itemDom.cloneNode(true)); 
// itemListDom.textContent = '';

// const inv= itemDom.querySelector('input');
// const btnDeleteDom = itemDom.querySelector('button');
//     const lblNameDom = itemDom.querySelector('span');
// console.log('inv');
// console.log(inv);
// console.log(btnDeleteDom);
// console.log(lblNameDom);
// itemDom.classList.remove('d-none');
    // lblNameDom.style.border = '2px solid red'; 
    // lblNameDom.style.textDecoration = 'line-through'; 
    // inv.checked = true;



const itemListDom = document.querySelector('#itemList');
const itemDom = document.querySelector('#item');
const txtNewNoteDom = document.querySelector('#txtNewNote');

txtNewNoteDom.addEventListener('keyup', (e) => {
   if(e.keyCode === 13) {
     const text = e.target.value;
     e.target.value = '';
     
    store.dispatch({
      type: ADD_TODO,
      payload: {
       text,
      },
    });

   }
});

const updateList = (items) => {
  


// delete list inside
itemListDom.textContent = '';
// itemListDom.innerHTML = '';
//Find element inside
// const inv= itemDom.querySelector('input');
// console.log('inv');
// console.log(inv);


   for(const item of items){
    const cloneDom= itemDom.cloneNode(true);
    //find element input checkbox
    const chkAbleDom = cloneDom.querySelector('input');
    const btnDeleteDom = cloneDom.querySelector('button');
    const lblNameDom = cloneDom.querySelector('span');
    cloneDom.classList.remove('d-none');
    
    lblNameDom.textContent = item.text;
    if(item.completed){
      
      lblNameDom.style.textDecoration = 'line-through'; 
    }
    

    btnDeleteDom.addEventListener('click', () => {
        store.dispatch({
          type:DELETE_TODO,
          payload: {
            id:item.id,
          }
        });
    });
    
    chkAbleDom.checked = item.completed;
    chkAbleDom.addEventListener('click', () => {
       store.dispatch({
         type: DONE_TODO,
         payload: {
           id: item.id,
         }
       });
    });

    itemListDom.appendChild(cloneDom);
    
   }
 }

//cADA VEZ QUE UNA ACCION SEA EMITIDA EN EL REDUCER  SE EJECTUAN LOS METODOS SUBCRITOS
store.subscribe(() => {
  const state = store.getState();

  updateList(state);
});



