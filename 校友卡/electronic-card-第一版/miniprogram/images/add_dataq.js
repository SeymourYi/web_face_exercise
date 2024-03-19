
 let s;
var bar = {
 aa:function(){
   console.log("hello")
 },
 bb:function(data1){
  wx.showToast({
    title: '提交人工核对成功',
    icon:"none",
    duration: 5000   
  });


   const db=wx.cloud.database()
   
   db.collection("write_pass")
   .add({
    data:{
    
     name:data1.name,
     studentID:data1.studentID,
     gender:data1.gender,
     birthday:data1.birthday,
     graduation_time:data1.graduation_time,
     major:data1.major,
     start_time:`${data1.start_time}01`,
     level:data1.level,
     years_of_education:data1.years_of_education,
    }
  })
 },
   //.where({
  //    data:{
     
  //     name:data1.name,
  //     // studentID:data1.studentID,
  //     gender:data1.gender,
  //     // birthday:data1.birthday,
  //     // graduation_time:data1.graduation_time,
  //     // major:data1.major,
  //     start_time:data1.start_time,
  //     // level:data1.level,
  //     // years_of_education:data1.years_of_education,
  //    }
  //  }).then()




 
}
module.exports={
  bar:bar,
}