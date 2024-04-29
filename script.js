const nav = document.querySelector('header');

window.addEventListener('scroll', function() {
  requestAnimationFrame(() => {
    if (pageYOffset > 255) {
      nav.classList.add('activate_under_shadow')
    } else {
      nav.classList.remove('activate_under_shadow')
    }
  });
});



function burgerMenu() {
    var header = document.querySelector('header');
    var burger = document.querySelector('.burger');
    var body = document.body;

    if (header) {
        header.classList.toggle('burger_menu');
        var isMenuOpen = header.classList.contains('burger_menu');
        body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

        setTimeout(function() {
            // Этот код выполнится через одну секунду
            if (isMenuOpen) {
                burger.classList.add('burger_cross');
            } else {
                burger.classList.remove('burger_cross');
            }
        }, 500);
    }
}


// Функция для вычисления площади ковра и общей цены
function calculateCarpet() {
    // Получаем значения ширины и длины ковра из полей ввода
    var width = parseFloat(document.getElementById('carpet_count_1').value.replace(',', '.'));
    var length = parseFloat(document.getElementById('carpet_count_2').value.replace(',', '.'));

    // Проверяем, что введены числовые значения
    if (!isNaN(width) && !isNaN(length)) {
        // Вычисляем площадь ковра
        var area = width * length;
        // Устанавливаем значение площади в соответствующем элементе
        document.getElementById('res_carpet_count').textContent = area.toFixed(2);
        // Вычисляем общую цену ковра
        var price = area * 100;
        // Устанавливаем значение общей цены в соответствующем элементе
        document.getElementById('res_carpet_price').textContent = price.toFixed(2);
    } else {
        // Если введены некорректные значения, выводим сообщение об ошибке
    }
}

// Слушаем изменения в полях ввода и пересчитываем результаты при изменении
document.getElementById('carpet_count_1').addEventListener('input', calculateCarpet);
document.getElementById('carpet_count_2').addEventListener('input', calculateCarpet);

// Функция для обработки клика
function handleClick(event) {
    // Получаем текущий элемент, на котором произошел клик
    var targetElement = event.target;

    // Переключаем класс choice_el у элемента, на который был клик
    targetElement.classList.toggle('choice_el');

    // Получаем все элементы с классами col_2, col_3 и col_4, у которых установлен класс choice_el
    var col2Elements = document.querySelectorAll('.col_2.choice_el');
    var col3Elements = document.querySelectorAll('.col_3.choice_el');
    var col4Elements = document.querySelectorAll('.col_4.choice_el');

    // Вычисляем суммы значений в этих элементах
    var sumCol2 = 0;
    col2Elements.forEach(function(element) {
        sumCol2 += parseInt(element.textContent);
    });

    var sumCol3 = 0;
    col3Elements.forEach(function(element) {
        sumCol3 += parseInt(element.textContent);
    });

    var sumCol4 = 0;
    col4Elements.forEach(function(element) {
        sumCol4 += parseInt(element.textContent);
    });

    // Выводим суммы в элементы с id="res_col_2", "res_col_3" и "res_col_4"
    document.getElementById('res_col_2').textContent = sumCol2;
    document.getElementById('res_col_3').textContent = sumCol3;
    document.getElementById('res_col_4').textContent = sumCol4;
}

// Добавляем обработчик клика ко всем элементам с классами col_2, col_3, col_4
document.querySelectorAll('.col_2, .col_3, .col_4').forEach(function(element) {
    element.addEventListener('click', handleClick);
});





