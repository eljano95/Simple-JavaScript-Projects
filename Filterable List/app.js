let filterInput = document.getElementById('filter-input');
filterInput.addEventListener('keyup', filterNames);
function filterNames () {
    let filterValue = document.getElementById('filter-input').value.toUpperCase();
    let ul = document.querySelector('#names');
    let li = ul.querySelectorAll('.contacts');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        let txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}