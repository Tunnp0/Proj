$(document).ready(() => {

    console.log('cart.js -> Start');

    $('#catalog').on('click', '.add-to-cart-btn', (event) => {
        console.log('add-btn -> Click');
        const userId = $('#user-id').val();
        console.log('User-ID: ' + userId)

        if (userId == 'None') {
            alert('Для використання кошику ви повинні авторизуватись!!!');
        } else {
            let productId = $(event.target).prev().val();
            console.log('Product-ID: ' + productId)

            $.ajax({
                url: '/orders/ajax_cart',
                data: `uid=${userId}&pid=${productId}`,
                success: (response) => {
                    console.log(response);
                    alert('Товар успішно доданий до кошика!')
                    $('#card-count').text(response.count);
                    $('#_count').text(`Товарів у кошику: ${response.count} шт`);
                    $('#_total').text(`Вартість: ${response.total} грн`);
                }
            });
        }
    });

});