// * Задание на урок:
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
// 4) Потренироваться и переписать цикл еще двумя способами*/


'use strict';

const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

first: for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', 'Человек-гандон');
    if (lastFilm === null || lastFilm === '' || lastFilm.length > 50) {
        i--;
        continue first;
    }
    const rateFilm = prompt('На сколько оцените его?', '5');
    if (rateFilm === null || rateFilm === '' || rateFilm.length > 50) {
        i--;
        continue first;
    }
    personalMovieDB.movies[lastFilm] = rateFilm;
}
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель")
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман")
} else {
    console.log("Произошла ошибка");
}
// let lastFilm;
// let rateFilm;
// do {
//     lastFilm = prompt('Один из последних просмотренных фильмов?', 'Человек-гандон');
//     rateFilm = prompt('На сколько оцените его?', '5');

// }
// while(lastFilm == null || lastFilm == '' || lastFilm.length > 50 &&  )
// personalMovieDB.movies[lastFilm] = rateFilm;
// console.log(personalMovieDB.movies);



