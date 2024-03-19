const cloud = require('wx-server-sdk')
cloud.init({
  env: 'cloud1-6gs02vc254602900'
})
var xlsx = require('node-xlsx');
const db = cloud.database()

exports.main = async (event, context) => {
  context.timeout = 30 * 1000; // 设置超时时间为 30 秒，单位是毫秒

  let { fileID } = event
  const res = await cloud.downloadFile({
    fileID: fileID,
  })
  const buffer = res.fileContent
  const all_excel_data = []

  var sheets = xlsx.parse(buffer);
  sheets.forEach(function (sheet) {
    console.log(sheet['name']);
    for (var rowId in sheet['data']) {
      var row = sheet['data'][rowId];
      if (rowId > 0 && row) {
        all_excel_data.push({
          studentID: String(row[0]),
          name: String(row[1]),
          gender: String(row[2]),
          birthday:String(row[3]),
          ID:String(row[4]),
          major:String(row[5]),
          level:String(row[6]),
          years_of_education:String(row[7]),
          start_time: String(row[8]),
          graduation_time:String(row[9])
          
        })
      }
    }
  });

  var result = await db.collection('passed').add({ data: all_excel_data }).then(res => {
    return res
  }).catch(err => {
    return err
  })

  return result
}
//////////////////////////////
// const cloud = require('wx-server-sdk')
// cloud.init({
//   env : 'cloud1-6gs02vc254602900'
// })
// var xlsx = require('node-xlsx');
// const db = cloud.database()
 
// exports.main = async(event, context) => {
//   let {
//     fileID
//   } = event
//   //1,通过fileID下载云存储里的excel文件
//   const res = await cloud.downloadFile({
//     fileID: fileID,
//   })
//   const buffer = res.fileContent
 
//   const all_excel_data = [] //用来存储所有的excel数据
//   //2,解析excel文件里的数据
//   var sheets = xlsx.parse(buffer); //获取到所有sheets
//   sheets.forEach(function(sheet) {
//     console.log(sheet['name']);
//     for (var rowId in sheet['data']) {
//       //console.log(rowId);
//       var row = sheet['data'][rowId]; //第几行数据
//       if (rowId > 0 && row) { //第一行是表格标题，所以我们要从第2行开始读
//         //3，把解析到的数据存到excelList数据表里
//         all_excel_data.push({
//           name: row[0],
//           sex: row[1],
//           age : row[2],
//           city : row[3],
//           number: row[4]
//         })
//       }
//     }
//   });
//   // 一起添加所有数据  注意填写自己的表名！
//   var result=await db.collection('user').add({data:all_excel_data}).then(res=>{
//     return res
//   }).catch(err=>{return err})
//   return result
// }