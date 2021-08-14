export default {
  // firestoreは改行がうまく保存されないのでbbを改行として扱う
  decodeStringForFileStore(str) {
    if (str) {
      return str.replace('bb', '\n')
    }
    return str
  },
  encodeStringForFileStore(str) {
    if (str) {
      return str.replace('\n', 'bb')
    }
    return str
  },
  formatDate(dt) {
    var y = dt.getFullYear()
    var m = ('00' + (dt.getMonth() + 1)).slice(-2)
    var d = ('00' + dt.getDate()).slice(-2)
    return y + '-' + m + '-' + d
  },
}
