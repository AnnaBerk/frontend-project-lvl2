import _ from 'lodash';

const genAST = (dataBefore, dataAfter) => {
  const keysBefore = Object.keys(dataBefore);
  const keysAfter = Object.keys(dataAfter);
  const unsortedKeys = _.union(keysBefore, keysAfter);
  const sortedKeys = _.sortBy(unsortedKeys);

  const addEntry = (key) => {
    if (!_.has(dataBefore, key)) {
      return {
        name: key,
        type: 'added',
        value: dataAfter[key],
      };
    }
    if (!_.has(dataAfter, key)) {
      return {
        name: key,
        type: 'removed',
        value: dataBefore[key],
      };
    }

    if (dataBefore[key] === dataAfter[key]) {
      return {
        name: key,
        type: 'unchanged',
        value: dataAfter[key],
      };
    }
    return {
      name: key,
      type: 'changed',
      valueBefore: dataBefore[key],
      valueAfter: dataAfter[key],
    };
  };

  return sortedKeys.map(addEntry);
};

export default genAST;
