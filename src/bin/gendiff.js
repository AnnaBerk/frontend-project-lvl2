#!/usr/bin/env node
import program from 'commander';
import genDiff from '../index.js';

program
  .version('0.1.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'Output format', 'stylish')
  .description('Compares two configuration files and shows a difference.')
  .action((beforeConfig, afterdConfig) => {
    console.log(genDiff(beforeConfig, afterdConfig, program.format));
  })
  .parse(process.argv);
