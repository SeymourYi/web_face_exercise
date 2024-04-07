import XLSX from 'xlsx';


import { ArticleCategoryAddExcelService } from '@/api/article.js'







export function readExcel(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsBinaryString(file);

  reader.onload = (e) => {
    const data = e.target.result;
    const wb = XLSX.read(data, { type: 'binary' });

    const sheetName = wb.SheetNames[0]; // 获取文档中第一个sheet页签的名字
    const sheets = wb.Sheets[sheetName]; // 获sheet名页签下的数据
    console.log(sheets); // 返回sheet对象到控制台

    const groupSize = 100;
    let loopthvalue = 0;
    const processedData = [];
    let startvalue = 0;
    console.log(Object.keys(sheets).filter(key => key.startsWith('A')).length);
    //获得数据总长度
    const allLength = Object.keys(sheets).filter(key => key.startsWith('A')).length;
    //分割成每十个一组
    for (let index = 0; index < allLength; index += groupSize) {
      if (index + groupSize <= allLength) {
        loopthvalue = index + groupSize;
        startvalue = index;
      } else {
        loopthvalue = allLength - loopthvalue;
        loopthvalue = index + loopthvalue;
        startvalue = index;
      }
      //对每组进行操作
      for (let i = 1 + startvalue; i <= loopthvalue; i++) {
        const rowData = {
          studentid: sheets[`A${i}`]?.v ? Number(sheets[`A${i}`].v) : null,
          name: sheets[`B${i}`]?.v || null,
          sex: sheets[`C${i}`]?.v === '男' ? '男' : (sheets[`C${i}`]?.v === '女' ? '女' : null),
          birthdate: sheets[`D${i}`]?.v || null,
          societyid: '',
          major: sheets[`F${i}`]?.v || null,
          level: sheets[`G${i}`]?.v || null,
          systemtype: sheets[`H${i}`]?.v || null,
          joindate: sheets[`I${i}`]?.v || null,
          enddate: sheets[`J${i}`]?.v || null,
          Certification: 0,
          isdelete: 0,
        };
        console.log(i);
        processedData.push(rowData);
      }
      //输出后清空
      console.log(processedData[0]);
      console.log(processedData);

      processedData.splice(0, processedData.length);
    }
    console.log(processedData);
  };
}




