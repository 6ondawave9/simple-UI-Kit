# simple-UI-Kit-by-6ondawave9
## Простой UI-Kit на чистом JS+CSS
**Уставновка версии для разработчика**
1. rel="stylesheet" href="UIKV-style.css"
2. <script src="UIKV-script.js"></script>
**Уставновка минифицированной версии**
1. rel="stylesheet" href="UIKV-style-minified.css"
2. <script src="UIKV-script-minified.js"></script>
**В UI-Kit входят**
- Кнопки
  - Обычная (class="UIKV-btn-common")
  - Зеленая (class="UIKV-btn-green")
  - Красная (class="UIKV-btn-red")
- Поля ввода
  - input text/password (class="UIKV-input")
  - textarea (class="UIKV-textarea")
- Чекбоксы
  - Классический (class="UIKV-checkbox")
  - Переключатель (class="UIKV-switch")
 - Радио-кнопки (class="UIKV-radio")
 - Модальные окна (class="UIKV-modal-window")
- Всплывающие блоки
  - Обычный со стрелкой вверх (class="UIKV-context-message-common-up")
  - Обычный со стрелкой вниз (class="UIKV-context-message-common-down")
  - Красный со стрелкой вверх (class="UIKV-context-message-red-up")
  - Красный со стрелкой вниз (class="UIKV-context-message-red-down")
- Выпадающие списки
  - Нативный (class="UIKV-native-select")
  - Кастомный (class="UIKV-custom-select")
- Input range (class="UIKV-range")
- Прогресс-бары (class="UIKV-progress")  
**Использование кастомного выпадающего списка**
1. Создайте блок и задайте ему id
2. Создайте объект класса UIKVCustomSelect
3. Передайте в конструктор 
  1. id блока
  2. Массив со значениями
  3. Значение по умолчанию (опционально)
*В файле index.html находятся примеры использования*
