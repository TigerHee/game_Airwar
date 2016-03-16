function Game(config){
			this.imgs = config.imgs;
			this.width = config.width;
			this.height = config.height;
			this.sum = config.sum;
			this.type = config.type;
			this.life = config.life;
			this.score = config.score;
			this.x = 0;
			this.y = 0;
			this.frameIndex = 0;
			this.down = false;
			this.del = false;
			// 绘制方法
			this.paint = function(cxt){
				cxt.drawImage(this.imgs[this.frameIndex],this.x,this.y);
			}
			// 移动方法
			this.step = function(){}
		}