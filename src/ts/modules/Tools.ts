class Tools {
  // 不安全的字符，这里多数是控制字符，需要替换掉
  static unsafeStr = new RegExp(
    /[\u0001-\u001f\u007f-\u009f\u00ad\u0600-\u0605\u061c\u06dd\u070f\u08e2\u180e\u200b-\u200f\u202a-\u202e\u2060-\u2064\u2066-\u206f\ufdd0-\ufdef\ufeff\ufff9-\ufffb\ufffe\uffff]/g
  )

  // 一些需要替换成全角字符的符号，左边是正则表达式的字符
  static fullWidthDict: string[][] = [
    ['\\\\', '＼'],
    ['/', '／'],
    [':', '：'],
    ['\\?', '？'],
    ['"', '＂'],
    ['<', '＜'],
    ['>', '＞'],
    ['\\*', '＊'],
    ['\\|', '｜'],
    ['~', '～'],
  ]

  // 用正则过滤不安全的字符，（Chrome 和 Windows 不允许做文件名的字符）
  // 把一些特殊字符替换成全角字符
  static replaceUnsafeStr(str: string) {
    str = str.replace(this.unsafeStr, '')
    for (let index = 0; index < this.fullWidthDict.length; index++) {
      const rule = this.fullWidthDict[index]
      const reg = new RegExp(rule[0], 'g')
      str = str.replace(reg, rule[1])
    }
    return str
  }

  // 对象深拷贝
  static deepCopy<T>(data: T): T {
    if (data === null || typeof data !== 'object') {
      return data
    }

    const result = (Array.isArray(data) ? [] : {}) as any

    for (const [key, value] of Object.entries(data)) {
      result[key] =
        data === null || typeof data !== 'object' ? value : this.deepCopy(value)
    }

    return result
  }

  // 字符串分割成数组
  static string2array(str: string): string[] {
    const temp = str.trim().split(',')
    return temp.filter((val) => {
      if (val !== '') {
        return val.trim()
      }
    })
  }

  // 根据对象某个属性的值（视为数字）排序对象。返回的结果是降序排列
  static sortByProperty(key: string, order: 'desc' | 'asc' = 'desc') {
    return function (a: any, b: any) {
      // 排序的内容有时可能是字符串，需要转换成数字排序
      const value1 = typeof a[key] === 'number' ? a[key] : parseFloat(a[key])
      const value2 = typeof b[key] === 'number' ? b[key] : parseFloat(b[key])

      if (value2 < value1) {
        return order === 'desc' ? -1 : 1
      } else if (value2 > value1) {
        return order === 'desc' ? 1 : -1
      } else {
        return 0
      }
    }
  }

  static isR18OrR18G(tags: string | string[]) {
    const str: string = Array.isArray(tags) ? tags.toString() : tags

    return (
      str.includes('R-18') ||
      str.includes('R-18G') ||
      str.includes('R18') ||
      str.includes('R18G')
    )
  }
  
  // 创建 input 元素选择 json 文件
  static async loadJSONFile<T>(): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const i = document.createElement('input')
      i.setAttribute('type', 'file')
      i.setAttribute('accept', 'application/json')
      i.onchange = () => {
        if (i.files && i.files.length > 0) {
          // 读取文件内容
          const file = new FileReader()
          file.readAsText(i.files[0])
          file.onload = () => {
            const str = file.result as string
            let result: T
            try {
              result = JSON.parse(str)
              // if((result as any).constructor !== Object){
              // 允许是对象 {} 或者数组 []
              if (result === null || typeof result !== 'object') {
                const msg = 'Data is not an object!'
                return reject(new Error(msg))
              }
              return resolve(result)
            } catch (error) {
              const msg = 'JSON parse error!'
              return reject(new Error(msg))
            }
          }
        }
      }

      i.click()
    })
  }

  // 通过创建 a 标签来下载文件
  static downloadFile(url: string, fileName: string) {
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.click()
  }

}

export { Tools }