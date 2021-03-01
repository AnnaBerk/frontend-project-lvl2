#!/usr/bin/env node
import program from 'commander';

program
  .version('0.1.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'Output format', 'stylish')
  .description('Compares two configuration files and shows a difference.')
  .action(() => {
    console.log('It`s alive!');
  })
  .parse(process.argv);
