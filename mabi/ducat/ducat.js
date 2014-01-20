function reSize() {
　　//parent.document.all.iframe1.height = document.body.scrollHeight;
	if(frameElement!=null)
	parent.document.getElementById(frameElement.id).height = document.body.scrollHeight;
} 
window.onload = reSize;

angular.module('myModule', ['ui.bootstrap']).directive('selectOnClick', function() {
	// Linker function
	return function(scope, element, attrs) {
		element.bind('click', function() {
			this.select();
		});
	};
});

function DucatCtrl($scope) {
	//Tir Chonaill
	var tg1 = [[320, 480, 640, 560], [400, 600, 800, 700], [200, 400, 450, 700], [133, 266, 300, 350], [133, 266, 300, 566]];
	var t1 = [["Lv1", "嬰孩藥水", 1, 1, 80], ["Lv1", "減肥藥水", 1, 1, 100], ["Lv3", "防打鼾藥水", 1, 2, 100], ["Lv5", "山人參藥水", 1, 3, 50], ["Lv7", "可愛藥水", 1, 3, 100]];
	var g1 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

	//Dunbarton
	var tg2 = [[40, 60, 80, 70], [40, 60, 80, 70], [100, 200, 225, 350], [16, 30, 36, 35], [40, 60, 80, 70]];
	var t2 = [["Lv1", "蜘蛛絲手套", 1, 5, 10], ["Lv1", "羊毛靴子", 1, 8, 10], ["Lv3", "食人魔屠殺者面具", 1, 4, 50], ["Lv6", "惡翅魅魔正裝", 1, 25, 5], ["Lv7", "魅魔泳衣", 1, 6, 10]];
	var g2 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

	//Bangor
	var tg3 = [[40, 60, 80, 70], [20, 40, 45, 70], [16, 32, 36, 68], [13, 26, 30, 56], [13, 26, 30, 56]];
	var t3 = [["Lv1", "產的煤", 1, 8, 10], ["Lv1", "大理石", 1, 20, 10], ["Lv4", "黃水晶", 1, 25, 10], ["Lv5", "海蘭德礦石", 1, 30, 8], ["Lv6", "鉛", 1, 30, 10]];
	var g3 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

	//Emain Macha
	var tg4 = [[133, 240, 300, 280], [100, 200, 225, 350], [133, 266, 300, 350], [80, 160, 180, 340], [10, 20, 22, 42]];
	var t4 = [["Lv1", "莓類麥片", 1, 3, 40], ["Lv2", "奶油啤酒", 1, 4, 50], ["Lv4", "燻烤野生動物", 1, 3, 50], ["Lv5", "松露義大利麵", 1, 5, 50], ["Lv7", "燒烤樽熊", 1, 40, 10]];
	var g4 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

	//Taillteann
	var tg5 = [[200, 400, 450, 700], [133, 266, 300, 350], [200, 400, 450, 700], [100, 200, 225, 425], [40, 60, 80, 70]];
	var t5 = [["Lv1", "熱氣的結晶", 1, 2, 100], ["Lv2", "音樂盒保存石", 1, 3, 50], ["Lv4", "帕拉魯的結晶", 1, 2, 100], ["Lv5", "圓形防護壁的結晶", 1, 4, 100], ["Lv6", "鍊金的結晶", 1, 5, 10]];
	var g5 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

	//Tara
	var tg6 = [[20, 40, 45, 70], [16, 30, 36, 35], [16, 30, 36, 35], [5, 10, 12, 21], [1, 2, 3, 5]];
	var t6 = [["Lv1", "迷你梳妝台", 1, 20, 10], ["Lv2", "茶几", 1, 25, 5], ["Lv4", "搖椅", 1, 25, 5], ["Lv6", "小朋友兩層樓床", 1, 75, 3], ["Lv7", "大型葡萄酒架", 1, 300, 1]];
	var g6 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

	//Cobh
	var tg7 = [[200, 300, 400, 350], [133, 266, 300, 350], [100, 200, 225, 350], [66, 133, 150, 210], [200, 300, 400, 350]];
	var t7 = [["Lv1", "加布產海苔", 1, 2, 50], ["Lv1", "加布產牡蠣", 1, 3, 50], ["Lv3", "魚翅", 1, 4, 50], ["Lv5", "果凍水母", 1, 6, 30], ["Lv7", "納伊德的鱗片", 1, 2, 50]];
	var g7 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

	//Belfast
	var tg8 = [[50, 90, 112, 105], [33, 60, 75, 70], [1, 3, 4, 7], [2, 4, 5, 7], [10, 20, 22, 42]];
	var t8 = [["Lv1", "鐵鞭", 1, 8, 15], ["Lv2", "闇之劍", 1, 12, 10], ["Lv4", "金庫", 1, 220, 1], ["Lv5", "骷髏食人魔的鎧甲", 1, 180, 1], ["Lv7", "摩根特的頭盔(仿製品)", 1, 40, 10]];
	var g8 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

	$scope.trades = {
		t1 : [4, 400],
		t2 : [6, 800],
		t3 : [8, 900],
		t4 : [7, 1700]
	};
	$scope.citys = {
		1 : ["堤爾克那", "Tir Chonaill", t1, g1],
		2 : ["杜巴頓", "Dunbarton", t2, g2],
		3 : ["班克爾", "Bangor", t3, g3],
		4 : ["艾明馬夏", "Emain Macha", t4, g4],
		5 : ["塔爾汀", "Taillteann", t5, g5],
		6 : ["塔拉", "Tara", t6, g6],
		7 : ["卡普", "Cobh", t7, g7],
		8 : ["貝爾法斯特", "Belfast", t8, g8]
	};

	$scope.earn = function(price, weight, a_slot, trade) {
		var ducat;
		var mySlot = trade[0];
		var myWeight = trade[1];
		if ($scope.partner) {
			mySlot += 1;
			myWeight += 100;
		}
		if (mySlot * a_slot * weight > myWeight)
			ducat = Math.floor(myWeight / weight);
		else
			ducat = mySlot * a_slot;
		return ducat * price;
	};

	$scope.partner = true;
	$scope.init = function() {
		angular.forEach($scope.citys, function(city, key) {
			for (var i = 0; i < city[2].length; i++) {
				angular.forEach($scope.trades, function(t, key) {
					var index = parseInt(key.substring(1, 2)) - 1; 
					city[3][i][index] = $scope.earn(city[2][i][2], city[2][i][3], city[2][i][4], t);
				});
			}
		});
	};
	$scope.init();
}

