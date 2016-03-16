// 编写游戏所需要的数据内容
//存储图片的路径
var imgsUrl = {
			bg : ["images/background.png"],
			logo : ["images/start.png"],
			loadings : [
				"images/game_loading1.png",
				"images/game_loading2.png",
				"images/game_loading3.png",
				"images/game_loading4.png"
			],
			heros : [
				"images/hero1.png",
				"images/hero2.png",
				"images/hero_blowup_n1.png",
				"images/hero_blowup_n2.png",
				"images/hero_blowup_n3.png",
				"images/hero_blowup_n4.png"
			],
			bullet : ["images/bullet.png"],
			enemy1 : [
				"images/enemy1.png",
				"images/enemy1_down1.png",
				"images/enemy1_down2.png",
				"images/enemy1_down3.png",
				"images/enemy1_down4.png"
			],
			enemy2 : [
				"images/enemy2.png",
				"images/enemy2_down1.png",
				"images/enemy2_down2.png",
				"images/enemy2_down3.png",
				"images/enemy2_down4.png"
			],
			enemy3 : [
				"images/enemy3_n1.png",
				"images/enemy3_n2.png",
				"images/enemy3_down1.png",
				"images/enemy3_down2.png",
				"images/enemy3_down3.png",
				"images/enemy3_down4.png",
				"images/enemy3_down5.png",
				"images/enemy3_down6.png"
			],
			paused : ["images/game_pause_nor.png"]
		}
var datas = {
			bg : [createImgs(imgsUrl.bg),480,852],
			loading : [createImgs(imgsUrl.loadings),186,38,createImgs(imgsUrl.loadings).length],
			hero : [createImgs(imgsUrl.hero),99,124,createImgs(imgsUrl.hero).length],
			bullet : [createImgs(imgsUrl.bullet),9,21],
			enemy1 : [createImgs(imgsUrl.enemy1),57,51,createImgs(imgsUrl.enemy1).length,1,1,1]
		}