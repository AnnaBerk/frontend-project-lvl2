import fs from 'fs';
import path from 'path';
import genAST from './AST.js';

const readFile = (filepath) => fs.readFileSync(`${path.resolve(process.cwd(), filepath)}`, 'utf-8');

const genDiff = (pathToFirstFile, pathToSecondFile, format = 'stylish') => {
  const dataFirstFile = JSON.parse(readFile(pathToFirstFile));
  // const beforeConfig = JSON.parse(typeFirstFile, dataFirstFile);
  const dataSecondFile = JSON.parse(readFile(pathToSecondFile));
  //   const afterConfig = JSON.parse(typeSecondFile, dataSecondFile);
  const AST = genAST(dataFirstFile, dataSecondFile);
  return AST;
};

export default genDiff;
