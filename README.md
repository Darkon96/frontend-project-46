
## [Проект Вычислитель отличий](https://ru.hexlet.io/programs/frontend/projects/46) / [Профессия Фронтенд-разработчик](https://ru.hexlet.io/programs/frontend)

### Hexlet tests and linter status:

[![Actions Status](https://github.com/Darkon96/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Darkon96/frontend-project-46/actions)
[![Node CI](https://github.com/Darkon96/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Darkon96/frontend-project-46/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/6f295911572031df65d2/maintainability)](https://codeclimate.com/github/Darkon96/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6f295911572031df65d2/test_coverage)](https://codeclimate.com/github/Darkon96/frontend-project-46/test_coverage)

## Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

## Возможности утилиты:

Поддержка разных входных форматов: `yaml`, `json`.

Генерация отчета в виде `plain text`, `stylish` и `json`.

## Установка
```
make install
```

## Пример использования
```bash
gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Arguments:
  filepath1            relative or absolute path to the file
  filepath2            relative or absolute path to the file

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           display help for command
```

Формат: `plain`
```bash
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
```

Формат: `stylish`
```bash
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}

```

## Запуск тестов
```
make test
```
```
test-watch
```
```
make test-coverage
```
## Запуск Eslint
```
make lint
```
```
make lintFix
```
### Демонстрации: / Demonstrations:

[![asciicast](https://asciinema.org/a/5BhTBs7wKahFfmdeYmgwSPE8X.svg)](https://asciinema.org/a/5BhTBs7wKahFfmdeYmgwSPE8X)
[![asciicast](https://asciinema.org/a/EBLjycNNkamBJFeFFImawbiJL.svg)](https://asciinema.org/a/EBLjycNNkamBJFeFFImawbiJL)
[![asciicast](https://asciinema.org/a/5pFc7yPmlKbqxhTzh0sHMIxPD.svg)](https://asciinema.org/a/5pFc7yPmlKbqxhTzh0sHMIxPD)
[![asciicast](https://asciinema.org/a/g4sktCqzLZNVmrdZugv9VXYNd.svg)](https://asciinema.org/a/g4sktCqzLZNVmrdZugv9VXYNd)
[![asciicast](https://asciinema.org/a/cEf7uI9mlB2nDOSW8yK80Uwlo.svg)](https://asciinema.org/a/cEf7uI9mlB2nDOSW8yK80Uwlo)

### Стек технологий:

JavaScript, NodeJS, Git, npm, ESLint, Codeclimate

### Полученные навыки:

- Настройка окружения: VSCode, node.js, npm, ESLint :heavy_check_mark:
- Работа с Git и Github :heavy_check_mark:
- Интеграция CodeClimate :heavy_check_mark:
- Подключение дополнительных библиотек(lodash, readlineSync) :heavy_check_mark:
- Построение архитектуры проекта :heavy_check_mark:
- Поддержка единого стиля кодирования Airbnb :heavy_check_mark:

### Description

Brain Games is a set of 5 console games built on the principle of popular mobile applications for brain pumping. Each game asks questions that need to be answered correctly. After three correct answers, it is considered that the game is over. Incorrect answers end the game and offer to go through it again.

Games:

- Calculator. Arithmetic expressions that need to be calculated.
- Progression. Search for missing numbers in a sequence of numbers.
- Definition of an even number.
- Determination of the greatest common divisor.
- Definition of a prime number.

Example:

```
$ brain-progression

Welcome to the Brain Game!
What number is missing in this progression?

May I have your name? Roman
Hello, Roman!

Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # The user enters the answer
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # The user enters the answer
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # The user enters the answer
Correct!
Congratulations, Roman!
```

### Stack:

JavaScript, NodeJS, Git, npm, ESLint, Codeclimate

### Get Skills:

- Setting up the environment: VSCode, node.js, npm, ESLint :heavy_check_mark:
- Working with Git and Github :heavy_check_mark:
- CodeClimate Integration :heavy_check_mark:
- Connecting additional libraries (Lodash, readlineasync) :heavy_check_mark:
- Building the project architecture :heavy_check_mark:
- Using a single Airbnb coding style :heavy_check_mark: