import { state } from '../../store/store.js';

function createSelectList() {
    const selectArray = state.notes.selectArray;
    let result = document.createElement('td');

    //Create and append select list
    let selectList = document.createElement("select");
    selectList.classList.add("category");    
    
    //Create and append the options
    for (let i = 0; i < selectArray.length; i++) {
        let option = document.createElement("option");
        option.value =selectArray[i];
        option.text = selectArray[i];
        selectList.appendChild(option);
    }
    result.appendChild(selectList);

    return result;
}

export default createSelectList;