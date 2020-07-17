const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const resTime = time => {
  var now = new Date()
  var nowTime = now.getTime()
  var gap = time - nowTime
  var days = parseInt(gap / (1000 * 60 * 60 * 24));
  var hours = parseInt((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = parseInt((gap % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = parseInt((gap % (1000 * 60)) / 1000);
  if(days){
    return days + "天" + formatNumber(hours) + "时" + formatNumber(minutes) + "分" + formatNumber(seconds) + "秒"
  }else{
    return formatNumber(hours) + "时" + formatNumber(minutes) + "分" + formatNumber(seconds) + "秒"
  }
}

module.exports = {
  formatTime: formatTime,
  resTime:resTime
}
