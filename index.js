function handleNewItem(newItem){
  let newEntry = `<li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
  $('.shopping-list').append(newEntry);
  $('.shopping-list-entry').val('');
}


function main() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    let newItem = $('#shopping-list-entry').val();
    handleNewItem(newItem);
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function(e) {
    e.preventDefault();
    this.closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
    e.preventDefault();
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}


$(main);