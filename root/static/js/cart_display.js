$(document).ready(() => {

    console.log('cart-display.js -> Srart');
    const user_id = $('#user-id').val();

    $.ajax({
    url: "/orders/ajax_cart_display",
    data: `uid=${user_id}`,
    success: (response) => {
        //console.log(response);
        $('#card-count').text(response.count);
        $('#_count').text(`Товарів у кошику: ${response.count} шт`);
        $('#_total').text(`Вартість: ${response.total} грн`);
    }
    });


});