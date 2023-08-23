Создание карточной игры, суть которой заключается в том, что нужно разгадать все пары карт. В данной игре реализован следующий функционал: выбор сложности, основная логика игры, вывод результата. 
Есть три уровня сложности: легкий, средний, сложный. От уровня сложности зависит количество карточек, которые будут показаны пользователю на игровом экране.
- Легкий уровень - 6 карточек (3 пары)
- Средний уровень - 12 карточек (6 пар)
- Сложный уровень - 18 карточек (9 пар).
Как только уровень сложности выбран, игроку показывается на игровой поле.
Карты обыкновенные игральные:

- 4 масти (черви, бубны, крести, пики)
- 9 рангов (6, 7, 8, 9, 10, Q, K, J, A).
Когда пользователь кликает на карточку, она переворачивается и показывает ранг и масть. 

Когда игрок кликает на предположительную пару, то игра осуществляет сверку карточек:

- Если карточки совпадают ⇒ игра продолжается
- Если карточки не совпадают ⇒ игра заканчивается

Если были найдены все пары, игрок побеждает.
Каким бы ни был финал игры, пользователю показывается всплывающее окно со:

- Статусом (проиграл / выиграл).
- Временем, затраченным на игру.
- Кнопкой, предлагающей сыграть снова.

В проекте настроен линтер для кода JS/TS и CSS/SASS, prettier для форматирования кода. В коде запуск линтеров осуществляется перед созданием коммита автоматически.В проект интегрирован TypeScript. Входные аргументы функций и методов объектов затипизированы.Запуск проверки типов осуществляется перед созданием коммита автоматически (с помощью husky).В проекте написаны unit-тесты.

Код игры храниться в GIT : https://github.com/Ilmira260696/3course
