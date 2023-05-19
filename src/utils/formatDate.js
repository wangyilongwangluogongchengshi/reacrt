export default function formatDate() {
   const year = new Date().getFullYear()
   let month = new Date().getMonth() + 1
   if (month < 10) {
      month = "0" + month
   }
   let day = new Date().getDate()
   if (day < 10) {
      day = "0" + day
   }
   var hour = new Date().getHours(); // 时
   var minutes = new Date().getMinutes(); // 分
   var seconds = new Date().getSeconds() //秒
   return year + "年" + month + "月" + day + '日' + hour + '时' + minutes + '分' + seconds + '秒'
}