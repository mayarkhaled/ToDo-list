import {startDOM , createListCard} from './DOM.js'

function list (name , des , date  , checklist = []){
    return {name , des , date  , checklist};
}

let defaluts = [
    list('practical' , 'exams for the 3rd year' , '14/07/2020' , [['arci', 1], ['os',0]] ),
    list('netflix' , 'to watch' , '30/07/2020' , [['Anne', 1]] )
];

for(let i = 0 ; i < defaluts.length ; i++){
    createListCard(defaluts[i] );
}

startDOM();

export {list};