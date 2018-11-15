function addSticker() {
    let title = $('.title')[0];
    let content = $('.content')[0];
    let ul = $('#sticker-list')[0];
    if ($(title).val() && $(content).val()) {
       let sticker = $('<li>').addClass('note-content');
       let a =$('<a>x</a>')
           .addClass('button')
           .on('click',()=>{
               sticker.remove();
       });
       let h2 = $(`<h2>${$(title).val()}</h2>`);
       let hr = $('<hr>');
       let p = $(`<p>${$(content).val()}</p>`);
       sticker.append(a).append(h2).append(hr).append(p);
       sticker.appendTo(ul);
       $(title).val('');
       $(content).val('');
    }
}