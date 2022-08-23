let Island = {
  day: 1,
  act: 40,
  food: 3,
  position: 480,
  v: 7,
  h: 1,
  cover: `
####################################################################################################
######################### ########################################################## ###############
##### ######    ######### #####     ############  ####   #######  #### #############  #####    #####
####  ##         ######## ####   #   ###########  ####    ######  #### #############  ###        ###
####  ##########  ####### ###  ##### ###########  #####   #####  ##### ############      ######  ###
####  ## #######  ####            ##  ####               ######  #####  #     ###        ####### ###
##    ## ######  ######     # #   ##  ####     #  #############              ################### ###
##        ####  ######### ### ######  ##########  ############      ##  ###########     ######## ###
###  ##   ###  #########  ##      ##  ##########  ####  ######  ######  ##########      ######## ###
### ### #####  ########       ######  ####   ###  ###   ######  ######  #######################  ###
##  ##  ######  ######  #     ######  ####     #  ##   ####### #######      #######    #         ###
##  ##  ######  ###### ## ###  ####  ########  #  ##  #######  ##            #####     #        ####
##  #  #          ####### ###       ############  #  ###########    ##  ############  ###  #########
##  #  ##         ############### ##############  #  #################  ##########      #  #########
##  #  ######## #######  #  ##  ##  ########   #  ##    ##############  ########## ###  #  #########
###   ######### ####### ##  ###  #   #####     #  ####    ############  #########  ###  #  #########
###   ########  ######  ##  #### ##  #####  ####  ##################         #####  ##  #  #####  ##
####    ###     ######  ##  #   ####  ##########  ############                ####     ##         ##
#### #  ####   ####### ####    ################## ########################################      ####
####################################################################################################
####################################################################################################
####################################################################################################
####################################################################################################
####################################################################################################
################    ##     ###     ##   ###    ####      #  ### #      #     ##    #################
######### ###### ##  #  ##  #  #####  ## ## ##  ###  #####  ### ###  ###  ##### ##  ##### ##########
#########    ### ##  #  ##  #  #####  ####. #######  #####   ## ###  ###  ##### ### ###   ##########
############  ##     #     ##     ###    ##    ####     ##    # ###  ###     ##     #  #############
###########   ##   ###  #  ##  ########  #####  ###  #####  # # ###  ###  ##### #  ##    ###########
#########   #### #####  ## ##  ##### ### #  ##  ###  #####  #   ###  ###  ##### ##  ####  ##########
################ #####  ##  #      #     ##     ###      #  ##  ###  ###     ## ### ################
####################################################################################################
####################################################################################################
`,
  name: "",
  story: "",
  error: 0,
  askname: `歡迎來到好想大陸,我該怎麼稱呼您呢？
  (請輸入你的名字)`,
  sayhello: "就這麼稱呼你吧！",
  plant: `讓我們飛向夢想的地方

  ################################################################################
  #####################W##########################################################
  #####################G##########################################################
  ####################;   t#######################################################
  ###################t       #####################################################
  ##################E          D#########################################E     .K#
  ###################;           :####################################D           
  ####################              W##############################W.             
  #####################,               K########################                  
  ######################                 i###################;                   #
  ####################W#W                   ##############f                     W#
  #######################D                    L########j                       W##
  ########################;                     .###D                         ####
  #########################L                                               D######
  ##########################,                                           j#########
  ###########################                                        f####W#######
  ############################                                    ;###############
  ##K#########################D                                .##################
  #   ;########################W                           .W#####################
        :#####################K.                         D########################
  #       j#################i                         E###########################
  ##        i############t                         L##############################
  ##W         ,#######E                         t#################################
  ###L         ####                         j#####################################
  ####,     G###i                        ;########################################
  ####W  ,###D                        .###########################################
  ########E                        :W#############################################
  ######G                       .E################################################
  ##########Et               W####################################################
  ################WLi;;;;ij#######################################################
  ################################################################################
  ################################################################################
`,
  voice: "轟~轟~轟~轟~",
  hr: `
`,
  turbulence: "突然傳來劇烈的晃動，飛機似乎遇上了亂流",
  danger: "隨著晃動逐漸加劇，各種警報開始嗡嗡作響，有種不好的預感逐漸湧上心頭",
  prologueEnd: "突然猛烈的衝擊襲來，你的意識瞬間消失",
};

function start(Island) {
  console.log(Island.cover);
  function startquestion() {
    const readline = require("node:readline");
    const { stdin: input, stdout: output } = require("node:process");

    const rl = readline.createInterface({ input, output });
    rl.question("", (n) => {
      rl.close();
      if (n.length === 0) {
        wakeup(Island);
      } else {
        console.log("直接案ENTER就好");
        startquestion();
      }
    });
  }
  startquestion();
}

function AskName(Island) {
  const readline = require("node:readline");
  const { stdin: input, stdout: output } = require("node:process");

  const rl = readline.createInterface({ input, output });
  rl.question(Island.askname, (name) => {
    rl.close();
    if (name.length === 0) {
      Island.name = "No Name";
    } else if (name.replaceAll(" ", "").length === 0) {
      Island.name = "空格人";
    } else {
      Island.name = name;
      Island.sayhello = "真是個好名字";
    }
    return (
      console.log(Island.hr + Island.name + "," + Island.sayhello),
      prologue(Island)
    );
  });
}

function prologue(Island) {
  global.setTimeout(function () {
    console.log(Island.hr);
    console.log("現在跟我一起前往夢的旅途吧！！！");
    console.log(Island.hr);
  }, 0);
  global.setTimeout(function () {
    console.log(Island.plant);
    console.log(Island.hr);
  }, 3000);
  global.setTimeout(function () {
    console.log(Island.voice);
    console.log(Island.hr);
    console.log(Island.turbulence);
    console.log(Island.hr);
  }, 6000);
  global.setTimeout(function () {
    console.log(Island.voice);
    console.log(Island.hr);
    console.log(Island.danger);
    console.log(Island.hr);
  }, 9000);
  global.setTimeout(function () {
    console.log(Island.prologueEnd);
  }, 12000);
  global.setTimeout(function () {
    start(Island);
  }, 15000);
}

function wakeup(Island) {
  global.setTimeout(function () {
    console.log(Island.name + "醒醒");
    console.log(Island.hr);
  }, 0);
  global.setTimeout(function () {
    console.log("醒醒" + Island.name);
    console.log(Island.hr);
  }, 3000);
  global.setTimeout(function () {
    console.log("渾身劇痛的" + Island.name + "睜開雙眼");
    console.log(Island.hr);
  }, 6000);
  global.setTimeout(function () {
    console.log("...");
    console.log(Island.hr);
  }, 9000);
  global.setTimeout(function () {
    console.log("......");
    console.log(Island.hr);
  }, 10000);
  global.setTimeout(function () {
    console.log(".........");
    console.log(Island.hr);
  }, 11000);
  global.setTimeout(function () {
    console.log("這裡是？？？");
    console.log(Island.hr);
  }, 14000);
  global.setTimeout(function () {
    console.log(Island.name + "困惑的環顧四周，這裡似乎是座熱帶小島");
    console.log(Island.hr);
  }, 17000);
  global.setTimeout(function () {
    console.log("身上的痛楚及先前在飛機上的記憶");
    console.log(Island.hr);
  }, 20000);
  global.setTimeout(function () {
    console.log(Island.name + "似乎在一場空難中奇蹟存活");
    console.log(Island.hr);
  }, 23000);
  global.setTimeout(function () {
    console.log(
      "在概略明白現況後" +
        Island.hr +
        Island.hr +
        Island.hr +
        Island.name +
        "在心中自詡：在救難隊找到我之前，我必須在這座島上活下去"
    );
    console.log(Island.hr);
  }, 26000);
  global.setTimeout(function () {
    console.log("END");
  }, 29000);
}

function rookie(Island) {
  const title = `這是好想無人島
    `;
  const maptop = `┌───┬───┬───┬───┬───┬───┬───┬───┐
    `;
  const mapspace = `│   │   │   │   │   │   │   │   │
    `;
  const maphr = `├───┼───┼───┼───┼───┼───┼───┼───┤
    `;
  const mapbottom = "└───┴───┴───┴───┴───┴───┴───┴───┘";
  const mapspace1 = `│ ◉ │   │   │   │   │   │   │   │
    `;
  const mapspace2 = `│   │ ◉ │   │   │   │   │   │   │
    `;
  const mapspace3 = `│   │   │ ◉ │   │   │   │   │   │
    `;
  const mapspace4 = `│   │   │   │ ◉ │   │   │   │   │
    `;
  const mapspace5 = `│   │   │   │   │ ◉ │   │   │   │
    `;
  const mapspace6 = `│   │   │   │   │   │ ◉ │   │   │
    `;
  const mapspace7 = `│   │   │   │   │   │   │ ◉ │   │
    `;
  const mapspace8 = `│   │   │   │   │   │   │   │ ◉ │
    `;
  let map =
    title +
    maptop +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace +
    maphr +
    mapspace1 +
    mapbottom;
  // console.log(
  //   "你現在因為飛機失事掉落在一個無人島上,◉是你目前的位子,請在這個孤島上努力生存直到搜救隊來救你"
  // );
  // console.log("這是好想無人島");
  console.log(map);
  let m = map.length;
  //   console.log(m);

  // for (let i = 0; i < m; i++) {
  //   console.log(i, map[i]);
  // }
  const readline = require("node:readline");
  const { stdin: input, stdout: output } = require("node:process");

  const rl = readline.createInterface({ input, output });
  let report =
    "Day:" + Island.day + " 行動點:" + Island.act + " 食物:" + Island.food;
  console.log(report);
  console.log("請輸入數字來執行動作");
  console.log(
    "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
  );
  rl.on("line", (n) => {
    switch (Number(n)) {
      case 1:
        console.log(map);
        report =
          "Day:" +
          Island.day +
          " 行動點:" +
          Island.act +
          " 食物:" +
          Island.food;
        console.log(report);
        console.log("請輸入數字來執行動作");
        console.log(
          "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
        );
        break;
      case 2:
        console.log("發現了椰子樹,食物增加2");
        Island.food = Island.food + 2;
        Island.act--;
        if (Island.act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
      case 3:
        if (Island.v == 1) {
          console.log("無法向上");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        Island.position = Island.position - 72;
        Island.v = parseInt((Island.position - 7) / 72 + 1);
        // console.log(Island.v, Island.h);
        map = map.replace(" ◉ ", "   ");
        // console.log(map)
        for (let i = 0; i < (Island.v - 1) * 8 + Island.h; i++) {
          map = map.replace("   ", " ◉ ");
        }
        for (let i = 0; i < (Island.v - 1) * 8 + Island.h - 1; i++) {
          map = map.replace(" ◉ ", "   ");
        }
        console.log(map);
        Island.act--;
        if (Island.act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
      case 4:
        if (Island.h == 8) {
          console.log("無法向右");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        Island.position = Island.position + 4;
        Island.v = parseInt((Island.position - 7) / 72 + 1);
        Island.h = parseInt(
          (Island.position - 7 - 36 - 2 - (Island.v - 1) * 72) / 4 + 1
        );
        // console.log(Island.v, Island.h);
        Island.act--;
        map = map.replace("│ ◉ │   │", "│   │ ◉ │");
        console.log(map);
        if (Island.act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
      case 5:
        if (Island.h == 1) {
          console.log("無法向左");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        Island.position = Island.position - 4;
        Island.v = parseInt((Island.position - 7) / 72 + 1);
        Island.h = parseInt(
          (Island.position - 7 - 36 - 2 - (Island.v - 1) * 72) / 4 + 1
        );
        // console.log(Island.v, Island.h);
        Island.act--;
        map = map.replace("│   │ ◉ │", "│ ◉ │   │");
        console.log(map);
        if (Island.act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
      case 6:
        if (Island.v == 7) {
          console.log("無法向下");
          console.log("請輸入數字來執行動作");
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          break;
        }
        Island.position = Island.position + 72;
        Island.v = parseInt((Island.position - 7) / 72 + 1);
        // console.log(Island.v, Island.h);
        map = map.replace("│ ◉ │", "│   │");
        // console.log(map)
        for (let i = 0; i < (Island.v - 1) * 8 + Island.h; i++) {
          map = map.replace("│   │", "│ ◉ │");
        }
        for (let i = 0; i < (Island.v - 1) * 8 + Island.h - 1; i++) {
          map = map.replace("│ ◉ │", "│   │");
        }
        console.log(map);
        Island.act--;
        if (Island.act == 0) {
          rl.close();
          console.log("今天結束");
        } else {
          console.log(
            "1.查詢狀態及地圖 2.調查當地 3.向上移動 4.向右移動 5.向左移動 6.向下移動"
          );
          console.log("請輸入數字來執行動作");
        }
        break;
    }
  });
}

AskName(Island);
