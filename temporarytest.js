function solution(s) {
  let preStr;

  const strArr = s.split('');

  const removeStr = (strArr) => {
    if (strArr.length === 0) return 1;

    for (let i = 0; i < strArr.length; i++) {
      if (!preStr) {
        preStr = strArr[i];
        continue;
      } else if (preStr && preStr === strArr[i]) {
        preStr = null;
        const newArr = [...strArr.slice(0, i - 1), ...strArr.slice(i + 1)];
        return removeStr(newArr);
      } else {
        preStr = strArr[i];
        continue;
      }
    }
    return 0;
  };

  return removeStr(strArr);
}

console.log(solution());
