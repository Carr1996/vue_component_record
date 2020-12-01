// 寻找数组中最大值index, -1 为未找到或参数错误
Array.prototype.findIndexOfMax = function (key = undefined) {
  let empty = {
    value: undefined,
    index: -1,
  }
  if (!this.length) {
    console.warn("传递数据不为数组或数组为空!!!");
    return empty;
  }
  let maxValue = this[0];
  let maxIndex = 0;
  // 处理一般数组
  if (typeof key !== "string") {
    for (let i = 0, length = this.length; i < length; i++) {
      if (+this[i] > maxValue) {
        maxValue = +this[i];
        maxIndex = i;
      }
    }
    if (typeof this[maxIndex] !== 'number') {
      console.warn("数组包含无法转换数字类型, 无法使用 findIndexOfMax!!!")
      return empty;
    }
  }
  // 处理对象类数组
  else {
    for (let i = 0, length = this.length; i < length; i++) {
      if (+this[i][key] > maxValue[key]) {
        maxValue = this[i];
        maxIndex = i;
      }
    }
  }
  return {
    value: maxValue,
    index: maxIndex,
  } || empty;
};
// 寻找数组中最小值index, -1 为未找到或参数错误
Array.prototype.findIndexOfMin = function (key = undefined) {
  let empty = {
    value: undefined,
    index: -1,
  }
  if (!this.length) {
    console.warn("传递数据不为数组或数组为空!!!");
    return empty;
  }
  let minValue = this[0];
  let minIndex = 0;

  // 处理一般数组
  if (typeof key !== "string") {
    for (let i = 0, length = this.length; i < length; i++) {
      if (+this[i] < minValue) {
        minValue = +this[i];
        minIndex = i;
      }
    }
    if (typeof this[minIndex] !== 'number') {
      console.warn("数组包含无法转换数字类型, 无法使用 findIndexOfMin!!!")
      return empty;
    }
  }
  // 处理对象类数组
  else {
    for (let i = 0, length = this.length; i < length; i++) {
      if (+this[i][key] < minValue[key]) {
        minValue = this[i];
        minIndex = i;
      }
    }
  }

  return {
    value: minValue,
    index: minIndex,
  } || empty;
};
// 将数组由 n * 1 转换为 n * n
Array.prototype.reshape = function (row = -1, col = -1) {
  if (typeof row !== 'number' || typeof col !== 'number') {
    console.warn("参数不为数字类型,请检查参数传递");
  }
  if (row === -1 && col === -1) {
    return this;
  }
  let interval = row !== -1 ? Math.ceil(this.length / row) : col;
  let arr = [];
  for (let i = 0; i < this.length; i += interval) {
    i >= this.length - 2 ?
      arr.push(this.slice(i, this.length)) :
      arr.push(this.slice(i, i + interval))
  }
  return arr;
};

export default {
  xmlHttpRequest(url, param, method) {
    return new Promise((resolve, reject) => {
      let _method = (method || '').toUpperCase() || 'GET';

      if (!url) {
        reject();
      } else {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open(_method, url);
        xmlhttp.send(JSON.stringify(param));
        xmlhttp.onreadystatechange = () => {
          if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
              let json = JSON.parse(xmlhttp.responseText);
              resolve(json)
            }
          } else {
            let json = JSON.parse(xmlhttp.responseText);
            resolve(json)
          }
        }
      }
    })
  },
  copyText(copytext) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', copytext);
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      return true;
    }
    document.body.removeChild(input);
  },
}
