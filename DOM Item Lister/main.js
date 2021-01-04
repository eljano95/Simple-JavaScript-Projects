let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filterInput = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filterInput.addEventListener('keyup', filterItems);

function addItem (e) {
    e.preventDefault();
    let inputValue = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(inputValue));

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem (e) {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems (e) {
    let filterValue = e.target.value.toLowerCase();
    let li = itemList.getElementsByTagName('li');

    Array.from(li).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(filterValue) != -1){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
}
