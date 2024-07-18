# Challengers

Проект, где люди могли бы размещать челленджи, делиться ими и трекать прогресс. Так же предполагается что за выполненные челленджей они будут получать баллы и в зависимости от балов у них будет рейтинговая система в рамках города / страны / мира. Челленджи представляют из себя различного вида полезные для человека активности, привязанные ко времени

### Слоган:
> ***Challenges that improve you***

### Актуальные ссылки:
- [Главная](https://challengers-nu.vercel.app/)
- [StoryBook](https://challengers-storybook.vercel.app/)

## Функционал

1. Создать челлендж: свой, случайный или взять из подготовленного списка (возможность создать при просмотре чужих челленджей или добавить в список)
2. Страница своих челленджей по годам и месяцам
3. Страница просмотра отчета по выполненному челленджу за день
4. Отчет по челледжу с прикрепленной ссылкой на соц сети с отображением поста (верификация на существование)
5. За выполнение челленджей растет уровень (рост зависит от сложности челленджа и сокращается по мере выполнения новых челленджей)
6. Бенефиты за уровни
7. Рейтинг по странам и мировой

## Дизайн

Интерфейс в стиле Cyberpunk

Цветовая гамма: яркие и мотивирующие цвета, такие как оранжевый (символизирует энергию и энтузиазм), зеленый (здоровье и рост) и синий (доверие и надежность)

## Технологический стек

### Фронтенд:

* React + Next.js + TypeScript
* Cтилизация с помощью SCSS modules (темную и светлую тему)
* Управление состоянием с помощью Redux
* Взаимодействие с API через GraphQL/Apollo Client
* Jest и Testing Library для тестирования
* Storybook для документирования

### Бэкенд:

* База данных Postgres (Vercel)
* Аутентификация

## Структура БД

1. **Users:** Таблица для хранения информации о пользователях
2. **Challenges:** Таблица для хранения информации о челленджах
3. **UserChallenges:** Связующая таблица для отслеживания прогресса пользователей в челленджах
4. **Ratings:** Таблица для хранения рейтингов пользователей
