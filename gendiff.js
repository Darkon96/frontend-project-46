#!/usr/bin/env node
/* eslint-disable import/extensions */

import { program } from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0');

program.parse();