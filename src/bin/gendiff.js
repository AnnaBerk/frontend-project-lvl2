#!/usr/bin/env node
import program from 'commander';


program
  .version('0.1.1')
  .description('Compares two configuration files and shows a difference.')
  .action(() => {
    console.log('It`s alive!');
  })
  .parse(process.argv);

  
  