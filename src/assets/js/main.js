$(document).ready(function () {

    // Скрол вверх по нажатию на кнопку
    $('#scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    // Скрыти кнопки вверх верху страницы
    function hideBlock() {
        var block = $('#scroll-up');
        if ($('html').scrollTop() >= 20) {
            block.show();
        }
        else {
            block.hide();

        }
    }
    $(window).scroll(hideBlock);

    // Открытия попапа после отправки формы в футере
    $('#OK').click(function () {
        const emailValue = $("#email").val();

        if (emailValue !== '') {
            Swal.fire({
                icon: 'success',
                title: `We will send newsletters on your email: ${emailValue}`,
                showConfirmButton: false,
                timer: 1500
            })
            $("#email").val('');
        }
    });

    // Обработка карточки товара в корзине
    $('.product-cart').each(function () { // Перебераем элемент каждой карточки товара в корзине
        const that = this; // Сохраняем контекст для передачи контекста вниз по уровню

        $(that).find('.remove-count-items').click(function () { // Ищем в кнопку минус в контексте каждой карточки товара
            let currentCount = Number($(that).find(".count-items").text());
            const unitPrice = $(that).find('.cart-unit-price').text();
            let arraySubtotal = [];

            if (currentCount > 0) {
                currentCount--
                $(that).find(".count-items").text(currentCount);
            }
            $(that).find('.cart-subtotal').text(currentCount * unitPrice); // Считаем sub total

            $('.cart-subtotal').each(function () {
                arraySubtotal.push(Number($(this).text())); // Получаю все значения sub Total
            });

            const totalSum = arraySubtotal.reduce((acc, a) => acc + a, 0); // Cумирую все значения sub Total
            $('.cart-total').text(totalSum);
        });

        $(that).find('.add-count-items').click(function () {
            let currentCount = Number($(that).find(".count-items").text());
            const unitPrice = $(that).find('.cart-unit-price').text();
            let arraySubtotal = [];

            currentCount++
            $(that).find(".count-items").text(currentCount);
            $(that).find('.cart-subtotal').text(currentCount * unitPrice);

            $('.cart-subtotal').each(function () {
                arraySubtotal.push(Number($(this).text()));
            });

            const totalSum = arraySubtotal.reduce((acc, a) => acc + a, 0);
            $('.cart-total').text(totalSum);
        });


        $(that).find('.cart-delete-item').click(function () {
            $(that).remove();
            if ($('.product-cart').length === 0) {
                $('.cart-header-items').remove()
                $('#cart-no-items-info').css("display", "flex");
            }
            let arraySubtotal = [];
            $('.cart-subtotal').each(function () {
                arraySubtotal.push(Number($(this).text())); // Получаю все значения sub Total
            });
            
            const totalSum = arraySubtotal.reduce((acc, a) => acc + a, 0); // Cумирую все значения sub Total
            $('.cart-total').text(totalSum);
        })
    })
});