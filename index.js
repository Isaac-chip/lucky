$(document).ready(function () {
  let data = [
    {
      id: 1,
      department: "金融部",
      name: "许康",
      position: "金融部总监",
      background: "#b8c5f2",
      fonts: [{ text: "金融部-许康" }],
    },
    {
      id: 2,
      department: "金融部",
      name: "赵淦辉",
      position: "金融主管",
      background: "#e9e8fe",
      fonts: [{ text: "金融部-赵淦辉" }],
    },
    {
      id: 3,
      department: "金融部",
      name: "罗汉超",
      position: "金融专员",
      background: "#b8c5f2",
      fonts: [{ text: "金融部-罗汉超" }],
    },
    {
      id: 4,
      department: "综合部",
      name: "万福",
      position: "综合部副总监",
      background: "#e9e8fe",
      fonts: [{ text: "综合部-万福" }],
    },
    {
      id: 5,
      department: "市场部",
      name: "黄敏华",
      position: "运营专员",
      background: "#b8c5f2",
      fonts: [{ text: "市场部-黄敏华" }],
    },
    {
      id: 6,
      department: "市场部",
      name: "杜政豪",
      position: "运营专员",
      background: "#e9e8fe",
      fonts: [{ text: "市场部-杜政豪" }],
    },
    {
      id: 7,
      department: "市场部",
      name: "文智豪",
      position: "涉外运营专员",
      background: "#b8c5f2",
      fonts: [{ text: "市场部-文智豪" }],
    },
    {
      id: 8,
      department: "市场部",
      name: "郑广迪",
      position: "市场部总监",
      background: "#e9e8fe",
      fonts: [{ text: "市场部-郑广迪" }],
    },
    {
      id: 9,
      department: "市场部",
      name: "严铭达",
      position: "运营专员",
      background: "#b8c5f2",
      fonts: [{ text: "市场部-严铭达" }],
    },
    {
      id: 10,
      department: "市场部",
      name: "陈芝婷",
      position: "流程专员",
      background: "#e9e8fe",
      fonts: [{ text: "市场部-陈芝婷" }],
    },
    {
      id: 11,
      department: "市场部",
      name: "钟淑玲",
      position: "运营专员",
      background: "#b8c5f2",
      fonts: [{ text: "市场部-钟淑玲" }],
    },
    {
      id: 12,
      department: "市场部",
      name: "周子杰",
      position: "企划宣传",
      background: "#e9e8fe",
      fonts: [{ text: "市场部-周子杰" }],
    },
    {
      id: 13,
      department: "项目部",
      name: "林树雄",
      position: "项目部副总监",
      background: "#b8c5f2",
      fonts: [{ text: "项目部-林树雄" }],
    },
    {
      id: 14,
      department: "项目部",
      name: "任浩林",
      position: "项目专员",
      background: "#e9e8fe",
      fonts: [{ text: "项目部-任浩林" }],
    },
    {
      id: 15,
      department: "项目部",
      name: "石嘉瑶",
      position: "项目主管",
      background: "#b8c5f2",
      fonts: [{ text: "项目部-石嘉瑶" }],
    },
    {
      id: 16,
      department: "项目部",
      name: "赖泽燕",
      position: "专利代理人",
      background: "#e9e8fe",
      fonts: [{ text: "项目部-赖泽燕" }],
    },
    {
      id: 17,
      department: "项目部",
      name: "卢梓峰",
      position: "专利代理人",
      background: "#b8c5f2",
      fonts: [{ text: "项目部-卢梓峰" }],
    },
    {
      id: 18,
      department: "信息组",
      name: "蒋宏凯",
      position: "信息组主管",
      background: "#e9e8fe",
      fonts: [{ text: "信息组-蒋宏凯" }],
    },
    {
      id: 19,
      department: "信息组",
      name: "许雨帆",
      position: "信息组主管",
      background: "#b8c5f2",
      fonts: [{ text: "信息组-许雨帆" }],
    },
    {
      id: 20,
      department: "财务部",
      name: "林秀章",
      position: "出纳",
      background: "#e9e8fe",
      fonts: [{ text: "财务部-林秀章" }],
    },
    {
      id: 21,
      department: "财务部",
      name: "赵倩",
      position: "会计",
      background: "#b8c5f2",
      fonts: [{ text: "财务部-赵倩" }],
    },
    {
      id: 22,
      department: "综合部",
      name: "香健霞",
      position: "行政前台",
      background: "#e9e8fe",
      fonts: [{ text: "综合部-香健霞" }],
    },
    {
      id: 23,
      department: "综合部",
      name: "余信",
      position: "人事主管",
      background: "#b8c5f2",
      fonts: [{ text: "综合部-余信" }],
    },
    {
      id: 24,
      department: "项目部",
      name: "吴凯桐",
      position: "项目主管",
      background: "#e9e8fe",
      fonts: [{ text: "项目部-吴凯桐" }],
    },
    {
      id: 25,
      department: "信息组",
      name: "吴业华",
      position: "后端开发工程师",
      background: "#b8c5f2",
      fonts: [{ text: "信息组-吴业华" }],
    },
    {
      id: 26,
      department: "项目部",
      name: "叶芷晴",
      position: "专利代理人",
      background: "#e9e8fe",
      fonts: [{ text: "项目部-叶芷晴" }],
    },
    {
      id: 27,
      department: "信息组",
      name: "谢明荣",
      position: "前端开发工程师",
      background: "#b8c5f2",
      fonts: [{ text: "信息组-谢明荣" }],
    },
    {
      id: 28,
      department: "综合部",
      name: "林志扬",
      position: "总经理助理",
      background: "#e9e8fe",
      fonts: [{ text: "综合部-林志扬" }],
    },
    {
      id: 29,
      department: "项目部",
      name: "袁杰夫",
      position: "项目专员",
      background: "#b8c5f2",
      fonts: [{ text: "项目部-袁杰夫" }],
    },
    {
      id: 30,
      department: "综合部",
      name: "梁夏艳",
      position: "企划主管",
      background: "#e9e8fe",
      fonts: [{ text: "综合部-梁夏艳" }],
    },
  ];
  let selectedMan = [];
  let projectArr = []
  let internetArr=[]
  let cwArr = []
  let zhArr = []
  let scArr = []
  let jrArr = []
  const myLucky = new LuckyCanvas.LuckyWheel("#my-lucky", {
    width: "300px",
    height: "300px",
    blocks: [{ padding: "10px", background: "#617df2" }],
    prizes: data,
    buttons: [
      {
        radius: "35%",
        background: "#8a9bf3",
        pointer: true,
        fonts: [{ text: "开始", top: "-10px" }],
      },
    ],
    start: function () {
      let selectDept = document.getElementById("dept").value;
      console.log(selectDept)
      // 开始游戏
      myLucky.play();
      // 使用定时器模拟接口 
      luckyDog()
    },
    end: function (prize) {
      // 游戏停止时触发
    //   alert("恭喜中奖: " + JSON.stringify(prize));
      console.log("恭喜中奖: " + JSON.stringify(prize));
      
      selectedMan.push(prize);
        if(document.getElementById("dept").value=="项目部" && prize.name!=undefined){
            $("#project").append(prize.department+"-"+prize.name+"/");   
            projectArr.push(prize.department)
        }
        if(document.getElementById("dept").value=="信息组" && prize.name!=undefined){
            $("#internet").append(prize.department+"-"+prize.name+"/");   
            internetArr.push(prize.department)
        }
        if(document.getElementById("dept").value=="财务部" && prize.name!=undefined){
            $("#cw").append(prize.department+"-"+prize.name+"/");   
            cwArr.push(prize.department)
        }
        if(document.getElementById("dept").value=="综合部" && prize.name!=undefined){
            $("#zh").append(prize.department+"-"+prize.name+"/");   
            cwArr.push(prize.department)
        }
        if(document.getElementById("dept").value=="市场部" && prize.name!=undefined){
            $("#sc").append(prize.department+"-"+prize.name+"/");   
            cwArr.push(prize.department)
        }
        if(document.getElementById("dept").value=="金融部" && prize.name!=undefined){
            $("#jr").append(prize.department+"-"+prize.name+"/");   
            cwArr.push(prize.department)
        }
 
   
    },
  });

  function luckyDog(selectDept) {
    const min = 1; // 随机数最小值
    const max = data.length-1; // 随机数最大值
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    const names = selectedMan.map(obj => obj.name)
    const depts =selectedMan.map(obj => obj.department)
    const flattenedDepts= depts.reduce((acc, curr) => acc.concat(curr), []); 
    const flattenedNames = names.reduce((acc, curr) => acc.concat(curr), []);
    if (data[random].department!=selectDept && !flattenedNames.includes(data[random].name) && !(selectDept=="项目部" && projectArr.includes(data[random].department)) && !(selectDept=="信息组" && internetArr.includes(data[random].department)) && !(selectDept=="财务部" && cwArr.includes(data[random].department))&& !(selectDept=="综合部" && zhArr.includes(data[random].department))&& !(selectDept=="市场部" && scArr.includes(data[random].department))&& !(selectDept=="金融部" && jrArr.includes(data[random].department))) {
      // alert(JSON.stringify(data[random]))
 
      console.log(random)
      console.log(JSON.stringify(data[random]));
      myLucky.stop(random);
    //   return random;
    } else {
      luckyDog(selectDept);
    }
  }
});
