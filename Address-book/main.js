document.getElementById('filterInput').addEventListener('keyup', () => {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li.collection-item');
    li.forEach(item => {
        let a = item.getElementsByTagName('a')[0];
        item.style.display = a.innerHTML.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    })

    let head = ul.querySelectorAll('li.collection-header');
    head.forEach(item => {
        let h5 = item.getElementsByTagName('h5')[0];
        item.style.display = h5.innerHTML.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    })
})