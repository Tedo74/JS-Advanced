function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    let capacityVal = 0;
    let totalprice = 0;
    let product = $('.custom-select');
    let price = $('#price');
    let quantity = $('#quantity');
    let btnSubmit = $('#submit');
    let ul = $('.display');
    let capacity = $('#capacity');
    let sum = $('#sum');

    btnSubmit.on('click', () => {
        if (product.val() && price.val()) {

            totalprice += +price.val();
            capacityVal += +quantity.val();

            if (capacityVal < 150) {
                let li = $(`<li>Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}</li>`);
                ul.append(li);

                capacity.val(capacityVal);
                sum.val(totalprice);

                disableBtn(btnSubmit);
                product.val('');
                price.val(1);
                quantity.val(1);
            } else {
                product.prop('disabled', true);
                price.prop('disabled', true);
                quantity.prop('disabled', true);
                disableBtn(btnSubmit);
                capacity.addClass('fullCapacity');
                capacity.val('full');
            }
        }
    });

    product.on('input', () => {
        enableBtn(btnSubmit);
    });

    function disableBtn(btn) {
        btn.prop('disabled', true);
    }

    function enableBtn(btn) {
        btn.prop('disabled', false);
    }
}