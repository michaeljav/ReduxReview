

import {ADD_TODO,DELETE_TODO,DONE_TODO} from './redux/actionTypes.js';
import store from './redux/store.js';


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



