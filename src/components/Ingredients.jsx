import React from 'react';

const Ingredients = ({ meal }) => {
    return (
        <>
            {meal === "plov" ? <div> 1 кг длиннозёрного риса
                <br />
                1 кг баранины
                <br />
                1 кг моркови
                <br />
                300 мл растительного масла
                <br />
                4 небольшие луковицы
                <br />
                2 небольших сухих острых перчика
                <br />
                чеснок – по желанию
                <br />
                1 ст. л. сушеного барбариса
                <br />
                1 ст. л. зиры
                <br />
                1 ч. л. семян кориандра
                <br />
                соль </div> : null
            }
            {meal === "lagman" ? <div> Говядина(мякоть) - 600 г
                <br />
                Картофель - 200 г (2 шт.)
                <br />
                Помидоры - 450 г (2 шт.)
                <br />
                Перец болгарский - 140 г (1 шт.)
                <br />
                Лук репчатый - 110 г (1 шт.)
                <br />
                Морковь - 150 г (1 шт.)
                <br />
                Чеснок - 4 зубчика
                <br />
                Томатная паста - 70 г
                <br />
                Мука - 1 ст. ложка
                <br />
                Масло растительное - 50 мл
                <br />
                Соль - 1 ч. ложка (или по вкусу)
                <br />
                Перец чёрный молотый - 1/5 ч. ложки (или по вкусу)
                <br />
                Кинза свежая - 2-3 веточки
                <br />
                Укроп свежий - 2-3 веточки
                <br />
                Базилик свежий - 2 веточки
                <br />
                Вода - 500-700 мл
                <br />
                <strong>Для лапши:</strong>
                <br />
                Мука - 450-500 г (примерно 3 стакана объёмом 250 мл)
                <br />
                Яйцо - 1 шт.
                <br />
                Вода - 200 мл
                <br />
                Соль - 1/2 ч. ложки
                <br />
                Масло растительное - 25 мл
            </div> : null}
            {meal === "manty" ? <div> <strong>Для теста:</strong>
                <br />
                Яйцо - 1 шт.
                <br />
                Вода теплая - 0,5 стакана
                <br />
                Соль
                <br />
                Мука - примерно 1 стакан
                <br />
                <strong>Для начинки:</strong>
                <br />
                Мясо (желательно мелко порубленное, не фарш)
                <br />
                Лук - 2-3 шт. (чем больше, тем вкуснее и сочнее)
                <br />
                Специи, приправы по вкусу</div> : null}
        </>
    );
};

export default Ingredients;