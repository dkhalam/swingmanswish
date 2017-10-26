  var headerHeight = $('header').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > headerHeight) {
      $('nav').addClass('fixed-nav');
    } else {
      $('nav').removeClass('fixed-nav');
    }
  });

  $("#click1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 115
    }, 2000);
  });

  $("#click2").click(function() {
    $('html, body').animate({
        scrollTop: $("#scoop").offset().top - 115
    }, 2000);
  });

  $("#click3").click(function() {
    $('html, body').animate({
        scrollTop: $("#playerInfo").offset().top - 115
    }, 2000);
  });

  $("#click4").click(function() {
    $('html, body').animate({
        scrollTop: $("#teamInfo").offset().top - 115
    }, 2000);
  });

  $("#click5").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 115
    }, 2000);
  });

  var addItems = document.querySelector('.add-items');
  var removeItems = document.querySelector('.remove-items');
  var itemsList = document.querySelector('.plates');
  var items = JSON.parse(localStorage.getItem('items')) || [];

  function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
    };

    items.push(item);
    var itemSlice = items.slice(0, 5);
    populateList(itemSlice, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

  function sweep(plates = [], platesList) {
    localStorage.clear();
  }

  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      return ` 
        <li>
          <input type="checkbox" data-index=${i} id="item${i}"  ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
    plates.slice
  }

  function toggleDone(e) {
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  if (addItems) {
    addItems.addEventListener('submit', addItem);
  }
  
  // removeItems.addEventListener('submit', removeItemz);
  if (itemsList) {
    itemsList.addEventListener('click', toggleDone);
  }
  
  populateList(items, itemsList);

  document.getElementById('removeItems').onclick = sweep();