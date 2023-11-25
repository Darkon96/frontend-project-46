import _ from 'lodash';

export default function buildTree(file1, file2) {
  const file1Keys = _.keys(file1); // ключи первого файла
  const file2Keys = _.keys(file2); // ключи второго файла
  const sortedKeys = _.sortBy(_.union(file1Keys, file2Keys));
  return sortedKeys.map((key) => {
    if (!_.has(file1, key)) {
      return { key, state: 'added', value: file2[key] };
    }
    if (!_.has(file2, key)) {
      return { key, state: 'deleted', value: file1[key] };
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { key, state: 'nested', value: buildTree(file1[key], file2[key]) };
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return {
        key, state: 'changed', value1: file1[key], value2: file2[key],
      };
    }

    return { key, state: 'notChanged', value: file1[key] };
  });
}
