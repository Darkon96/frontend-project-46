
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

Генерация отчета в виде `stylish`, `plain text` и `json`.

## Установка
```
make install
```
## Запуск тестов
```
make test
```
```
make test-coverage
```
## Запуск Eslint
```
make lint
```
### Eslint --fix
```
make lintFix
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
[![asciicast](https://asciinema.org/a/5BhTBs7wKahFfmdeYmgwSPE8X.svg)](https://asciinema.org/a/5BhTBs7wKahFfmdeYmgwSPE8X)

Формат: `stylish` (по умолчанию)
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

[![asciicast](https://asciinema.org/a/EBLjycNNkamBJFeFFImawbiJL.svg)](https://asciinema.org/a/EBLjycNNkamBJFeFFImawbiJL)
[![asciicast](https://asciinema.org/a/5pFc7yPmlKbqxhTzh0sHMIxPD.svg)](https://asciinema.org/a/5pFc7yPmlKbqxhTzh0sHMIxPD)
Формат: `plain`
```bash
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

```
[![asciicast](https://asciinema.org/a/g4sktCqzLZNVmrdZugv9VXYNd.svg)](https://asciinema.org/a/g4sktCqzLZNVmrdZugv9VXYNd)
Формат: `json`
```bash
gendiff --format json __fixtures__/file1.json __fixtures__/file2.json

[{"key":"common","state":"nested","value":[{"key":"follow","state":"added","value":false},{"key":"setting1","state":"notChanged","value":"Value 1"},{"key":"setting2","state":"deleted","value":200},{"key":"setting3","state":"changed","value1":true,"value2":null},{"key":"setting4","state":"added","value":"blah blah"},{"key":"setting5","state":"added","value":{"key5":"value5"}},{"key":"setting6","state":"nested","value":[{"key":"doge","state":"nested","value":[{"key":"wow","state":"changed","value1":"","value2":"so much"}]},{"key":"key","state":"notChanged","value":"value"},{"key":"ops","state":"added","value":"vops"}]}]},{"key":"group1","state":"nested","value":[{"key":"baz","state":"changed","value1":"bas","value2":"bars"},{"key":"foo","state":"notChanged","value":"bar"},{"key":"nest","state":"changed","value1":{"key":"value"},"value2":"str"}]},{"key":"group2","state":"deleted","value":{"abc":12345,"deep":{"id":45}}},{"key":"group3","state":"added","value":{"deep":{"id":{"number":45}},"fee":100500}}]

```
[![asciicast](https://asciinema.org/a/cEf7uI9mlB2nDOSW8yK80Uwlo.svg)](https://asciinema.org/a/cEf7uI9mlB2nDOSW8yK80Uwlo)

### Стек технологий:

JavaScript, NodeJS, Git, npm, ESLint, Codeclimate, Jest

### Полученные навыки:

- Структуры данных и Алгоритмы: работа с древовидными структурами данных и рекурсивными алгоритмами :heavy_check_mark:
- Тестирование и отладка: Jest, TDD,  GitHub Actions :heavy_check_mark:
- Архитектура: Модульность, абстракции, библиотека для построения cli приложений: commander.js :heavy_check_mark:

## Description

Difference Calculator is a program that determines the difference between two data structures. This is a popular task, for which there are many online services, for example http://www.jsondiff.com /. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

## Utility Features

Support for different input formats: `yaml`, `json`.

Generating a report in the form of `stylish`, `plain text` and `json`.

## Installation 
```
make install
```
## Running tests
```
make test
```
```
make test-coverage
```
## Run Eslint
```
make lint
```
### Eslint --fix
```
make lintFix
```

## Usage example
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
[![asciicast](https://asciinema.org/a/5BhTBs7wKahFfmdeYmgwSPE8X.svg)](https://asciinema.org/a/5BhTBs7wKahFfmdeYmgwSPE8X)

Format: `stylish` (default)
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

[![asciicast](https://asciinema.org/a/EBLjycNNkamBJFeFFImawbiJL.svg)](https://asciinema.org/a/EBLjycNNkamBJFeFFImawbiJL)
[![asciicast](https://asciinema.org/a/5pFc7yPmlKbqxhTzh0sHMIxPD.svg)](https://asciinema.org/a/5pFc7yPmlKbqxhTzh0sHMIxPD)
Format: `plain`
```bash
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

```
[![asciicast](https://asciinema.org/a/g4sktCqzLZNVmrdZugv9VXYNd.svg)](https://asciinema.org/a/g4sktCqzLZNVmrdZugv9VXYNd)
Format: `json`
```bash
gendiff --format json __fixtures__/file1.json __fixtures__/file2.json

[{"key":"common","state":"nested","value":[{"key":"follow","state":"added","value":false},{"key":"setting1","state":"notChanged","value":"Value 1"},{"key":"setting2","state":"deleted","value":200},{"key":"setting3","state":"changed","value1":true,"value2":null},{"key":"setting4","state":"added","value":"blah blah"},{"key":"setting5","state":"added","value":{"key5":"value5"}},{"key":"setting6","state":"nested","value":[{"key":"doge","state":"nested","value":[{"key":"wow","state":"changed","value1":"","value2":"so much"}]},{"key":"key","state":"notChanged","value":"value"},{"key":"ops","state":"added","value":"vops"}]}]},{"key":"group1","state":"nested","value":[{"key":"baz","state":"changed","value1":"bas","value2":"bars"},{"key":"foo","state":"notChanged","value":"bar"},{"key":"nest","state":"changed","value1":{"key":"value"},"value2":"str"}]},{"key":"group2","state":"deleted","value":{"abc":12345,"deep":{"id":45}}},{"key":"group3","state":"added","value":{"deep":{"id":{"number":45}},"fee":100500}}]

```
[![asciicast](https://asciinema.org/a/cEf7uI9mlB2nDOSW8yK80Uwlo.svg)](https://asciinema.org/a/cEf7uI9mlB2nDOSW8yK80Uwlo)



### Stack:

JavaScript, NodeJS, Git, npm, ESLint, Codeclimate, Jest

### Get Skills:

- Setting up the environment: VSCode, node.js, npm, ESLint :heavy_check_mark:
- Working with Git and Github :heavy_check_mark:
- CodeClimate Integration :heavy_check_mark:
- Connecting additional libraries (Lodash, readlineasync) :heavy_check_mark:
- Building the project architecture :heavy_check_mark:
- Using a single Airbnb coding style :heavy_check_mark: