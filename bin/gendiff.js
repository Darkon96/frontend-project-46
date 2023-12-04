#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { program } from 'commander';
import gendiff from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const difference = gendiff(filepath1, filepath2, program.opts().format);
    console.log(difference);
  });

program.parse();
