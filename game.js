var get_stones = false;
var get_sticks = false;
var get_flower = false;
var get_fruit = false;
var get_ball = false;
var get_treasure = false;
var get_grappel = false;
var used_grappel = false;
var monkey_played = false;
var get_rope = false;
var get_key = false;

class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Shore");
    }
    preload(){
        this.load.image("background1", "D2 assets/shore.png");
        this.load.image("toolbox", "D2 assets/toolbox.png");
        this.load.image("stones", "D2 assets/stones.png");
        this.load.image("a1", "D2 assets/arrow.png");
    }
    onEnter() {

        let shore = this.add.image(0, this.h / 8, 'background1').setOrigin(0, 0)
        shore.setScale(3)

        let toolbox = this.add.image(this.w * 0.5, this.w * 0.15, "toolbox")
            .setScale(0.2)
            .setInteractive()
            if(get_grappel == false){
                toolbox.on('pointerover', () => this.showMessage("Tools available for use. Maybe when I have enough materials."))
                if(this.hasItem('Stones') == true && this.hasItem('Rope') == true && this.hasItem('Sticks') == true){
                    toolbox.on('pointerdown', () => {
                        this.showMessage("You crafted a grappling hook using the resources you gathered");
                        this.gainItem('Grappling Hook');
                        this.loseItem('Stones');
                        this.loseItem('Rope');
                        this.loseItem('Sticks');
                        get_grappel = true;
                        });
                }
                else{
                    toolbox.on('pointerdown', () => {
                        this.showMessage("Not enough resources.");
                        this.noAccessAnimation(toolbox)
                    });
                }
            }
            else{
                toolbox.on('pointerdown', () => {
                    this.showMessage("You crafted a grappling hook using the resources you gathered");
                });
            }
        
        if(get_stones == false){
            let stones = this.add.image(this.w * 0.4, this.w * 0.3, "stones")
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("Some stones lying around.")
                })
                .on('pointerdown', () => {
                    this.showMessage("These can be a great source for crafting.");
                    this.gainItem('Stones');
                    this.getItemAnimation(stones)
                    get_stones = true;
                })
                this.pulseAnimation(stones)
        }

        let shore_forest = this.add.image(this.w * 0.63, this.w * 0.44, "a1")
            .setScale(1)
            .setAngle(90)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("Enter forest.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo2');
            })
            this.pulseAnimation(shore_forest)

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "Forest");
    }
    preload(){
        this.load.image("background2", "D2 assets/forest.png");
        this.load.image("sticks", "D2 assets/sticks.png");
        this.load.image("fruit", "D2 assets/fruit.png");
        this.load.image("flower", "D2 assets/flower.png");
        this.load.image("a2", "D2 assets/arrow.png");
        this.load.image("a3", "D2 assets/arrow.png");
        this.load.image("a4", "D2 assets/arrow.png");
    }
    onEnter() {

        let shore = this.add.image(0, this.h / 8, 'background2').setOrigin(0, 0)
        shore.setScale(3)
        let forest_shore = this.add.image(this.w * 0.07, this.w * 0.13, "a2")
            .setScale(1)
            .setAngle(315)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter shore.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });
            this.pulseAnimation(forest_shore)

        let forest_cove = this.add.image(this.w * 0.045, this.w * 0.39, "a3")
            .setScale(1)
            .setAngle(270)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter cove.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo3');
            });
            this.pulseAnimation(forest_cove)

        let forest_peak = this.add.image(this.w * 0.44, this.w * 0.45, "a4")
            .setScale(1)
            .setAngle(180)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter peak.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo4');
            });
            this.pulseAnimation(forest_peak)
        
        if(get_sticks == false){
            let sticks = this.add.image(this.w * 0.27, this.w * 0.23, "sticks")
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("Some sticks lying around.")
                })
                .on('pointerdown', () => {
                    this.showMessage("These can be a great source for crafting.");
                    this.gainItem('Sticks');
                    this.getItemAnimation(sticks)
                    get_sticks = true;
                })
                this.pulseAnimation(sticks)
        }

        if(get_fruit == false ){
            let fruit = this.add.image(this.w * 0.54, this.w * 0.32, "fruit")
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("There is a fruit growing here.")
                })
                if(this.hasItem('Hungry monkey') == true){
                    fruit.on('pointerdown', () => {
                        this.showMessage("Maybe the monkey will enjoy eating this.");
                        this.gainItem('Fruit');
                        this.getItemAnimation(fruit)
                        get_fruit = true;
                    })
                    this.pulseAnimation(fruit)
                }
        }

        if(get_flower == false){
            let flower = this.add.image(this.w * 0.12, this.w * 0.33, "flower")
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("This flower smells nice.")
                })
                .on('pointerdown', () => {
                    this.showMessage("You took the flower.");
                    this.gainItem('Flower');
                    this.getItemAnimation(flower)
                    get_flower = true;
                })
                this.pulseAnimation(flower)
        }
    }
}

class Demo3 extends AdventureScene {
    constructor() {
        super("demo3", "Cove");
    }
    preload(){
        this.load.image("background3", "D2 assets/cove.png");
        this.load.image("treasure", "D2 assets/treasure.png");
        this.load.image("ball", "D2 assets/ball.png");
        this.load.image("goldfruit", "D2 assets/goldfruit.png");
        this.load.image("a5", "D2 assets/arrow.png");
    }
    onEnter() {

        let shore = this.add.image(0, this.h / 8, 'background3').setOrigin(0, 0)
        shore.setScale(3)
        let shore_forest = this.add.image(this.w * 0.67, this.w * 0.27, "a5")
            .setScale(1)
            .setAngle(45)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter forest.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo2');
            });
            this.pulseAnimation(shore_forest)

        let treasure = this.add.image(this.w * 0.3, this.w * 0.15, "treasure")
            .setScale(1.5)
            .setInteractive()
            if(used_grappel == false){
                if(treasure.y == this.w * 0.3){
                    treasure.on('pointerover', () => this.showMessage("You used the grappling hook to pull the treasure in reach, but it appears to be locked."))
                }
                else{
                    treasure.on('pointerover', () => this.showMessage("There's some treasure on the other side."))
                }
            }
            else{
                treasure.y = this.w * 0.3;
                treasure.on('pointerover', () => this.showMessage("It appears to be locked."))
            }
            if(this.hasItem('Grappling Hook') == true){
                treasure.on('pointerdown', () => {
                    treasure.y = this.w * 0.3;
                    this.showMessage("You used the grappling hook to pull the treasure in reach, but it appears to be locked.")
                    this.loseItem('Grappling Hook')
                    used_grappel = true;
                    treasure.on('pointerover', () => this.showMessage("You used the grappling hook to pull the treasure in reach, but it appears to be locked."))
                    treasure.on('pointerdown', () => {
                        this.showMessage("It's locked!");
                        this.noAccessAnimation(treasure)
                    });
                });
            }
            else{
                treasure.on('pointerdown', () => {
                    if(used_grappel == true && get_key == true){
                        treasure.on('pointerdown', () => {
                            this.showMessage("You unlocked the treasure and got a golden fruit!");
                            this.gainItem('Gold Fruit');
                            this.loseItem('Key');
                            this.tweens.add({
                                targets: treasure,
                                alpha: { from: 1, to: 0 },
                                duration: 500,
                                onComplete: () => treasure.destroy()
                            });
                            get_treasure = true;
                            let gold_fruit = this.add.image(this.w * 0.3, this.w * 0.3, "goldfruit")
                            .setScale(1)
                            this.getItemAnimation(gold_fruit)
                        });
                    }
                    else if(get_grappel == true && get_key == false){
                        treasure.on('pointerdown', () => {
                            this.showMessage("It's locked!");
                            this.noAccessAnimation(treasure)
                        });
                    }
                    else{
                        treasure.on('pointerdown', () => {
                            this.showMessage("It's too far to reach!");
                            this.noAccessAnimation(treasure)
                        });
                    }
                });
            }

        if(get_ball == false){
            let ball = this.add.image(this.w * 0.4, this.w * 0.4, "ball")
                .setScale(1)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("There is a ball lying on the sand.")
                })
                .on('pointerdown', () => {
                    this.showMessage("This would be fun to play with.");
                    this.gainItem('Ball');
                    this.getItemAnimation(ball)
                    get_ball = true;
                })
                this.pulseAnimation(ball)
        }
    }
}

class Demo4 extends AdventureScene {
    constructor() {
        super("demo4", "Peak");
    }
    preload(){
        this.load.image("background4", "D2 assets/peak.png");
        this.load.image("monkeynpc", "D2 assets/monkey.png");
        this.load.image("a6", "D2 assets/arrow.png");
        this.load.audio("monkeynoise", "D2 assets/monkey.wav");
    }
    onEnter() {

        let shore = this.add.image(0, this.h / 8, 'background4').setOrigin(0, 0)
        shore.setScale(3)
        let peak_forest = this.add.image(this.w * 0.08, this.w * 0.16, "a6")
            .setScale(1)
            .setAngle(315)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter forest.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo2');
            });
            this.pulseAnimation(peak_forest)
        
        let monkey = this.add.image(this.w * 0.4, this.w * 0.15, "monkeynpc")
            .setScale(0.2)
            .setInteractive()
            if(get_rope == false){
                monkey.on('pointerover', () => {
                    if(monkey_played == false){
                        this.showMessage("It looks like it wants to play.")
                    }
                    else{
                        this.showMessage("The monkey played with the ball and it gave you a rope in return.")
                    }
                })
                if(this.hasItem('Ball') == true){
                    monkey.on('pointerdown', () => {
                        this.monkeynoise = this.sound.add("monkeynoise");
                            this.monkeynoise.play();
                        this.showMessage("The monkey played with the ball and it gave you a rope in return.");
                        this.gainItem('Rope');
                        this.loseItem('Ball');
                        get_rope = true;
                        monkey_played = true;
                    });
                }
            }
            else if(get_key == false){
                monkey.on('pointerover', () => {
                    this.showMessage("The monkey has enjoyed playing but now looks hungry.")
                    if(get_key == false){
                        this.gainItem('Hungry monkey');
                    }
                })
                if(this.hasItem('Fruit') == true){
                    monkey.on('pointerdown', () => {
                        this.monkeynoise = this.sound.add("monkeynoise");
                            this.monkeynoise.play();
                        this.showMessage("You gave the monkey the fruit and it gave you a key in return.");
                        this.gainItem('Key');
                        get_key = true;
                        this.loseItem('Hungry monkey');
                        this.loseItem('Fruit');
                        monkey.on('pointerover', () => {
                            this.showMessage("You gave the monkey the fruit and it gave you a key in return.")
                        })
                    });
                }
                else{}
            }
            else if(this.hasItem('Flower') == true){
                monkey.on('pointerdown', () => {
                    this.monkeynoise = this.sound.add("monkeynoise");
                        this.monkeynoise.play();
                    this.showMessage("The monkey wasn't sure what to do with the flower so it just ate it.");
                    this.loseItem('Flower');
                });
            }
        if(get_treasure == true){
            let monkeytwo = this.add.image(this.w * 0.5, this.w * 0.2, "monkeynpc")
                .setScale(0.2)
                .setInteractive()
                monkeytwo.on('pointerover', () => {
                    this.showMessage("Another monkey appeared, and it looks very hungry!")
                });
                monkeytwo.on('pointerdown', () => {
                    this.monkeynoise = this.sound.add("monkeynoise");
                        this.monkeynoise.play();
                    this.showMessage("It was delicious!");
                    this.loseItem('Gold Fruit');
                    this.time.delayedCall(1000, () => {
                        this.gotoScene('outro')});
                });
        }
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
        this.load.image("monkeynpc", "D2 assets/monkey.png");
        this.load.audio("monkeynoise", "D2 assets/monkey.wav");
    }
    create() {
        this.cameras.main.fadeIn(500, 0, 0, 0);
        this.cameras.main.setBackgroundColor('#001133');
        this.add.image(1920 * 0.25, 1080 * 0.4, "monkeynpc").setScale(0.6)
        this.add.image(1920 * 0.75, 1080 * 0.4, "monkeynpc").setScale(0.6)
        this.add.text(1920/2,1080/2 - 170, "Treasure Hunt").setFontFamily('Impact').setFontSize(100).setOrigin(0.5,0.5);
        let start = this.add.text(1920/2,1080/2 - 50, "Start").setFontFamily('Impact').setFontSize(70).setOrigin(0.5,0.5);
        start.setInteractive()
        this.tweens.add({
            targets: start,
            scale: 1.15,
            repeat: -1,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 500,
        })
        start.on('pointerdown', () => {
            this.monkeynoise = this.sound.add("monkeynoise");
                this.monkeynoise.play();
            this.cameras.main.fade(500, 0,0,0);
            this.time.delayedCall(500, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    preload(){
        this.load.image("monkeynpc", "D2 assets/monkey.png");
        this.load.audio("monkeynoise", "D2 assets/monkey.wav");
    }
    create() {
        this.cameras.main.setBackgroundColor('#001133');
        this.add.image(1920 * 0.25, 1080 * 0.4, "monkeynpc").setScale(0.6)
        this.add.image(1920 * 0.75, 1080 * 0.4, "monkeynpc").setScale(0.6)
        this.add.text(1920/2,1080/2 - 170, "The End!").setFontFamily('Impact').setFontSize(100).setOrigin(0.5,0.5);
        let restart = this.add.text(1920/2,1080/2 - 50, "Restart.").setFontFamily('Impact').setFontSize(70).setOrigin(0.5,0.5);
        restart.setInteractive()
        this.tweens.add({
            targets: restart,
            scale: 1.15,
            repeat: -1,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 500,
        })
        restart.on('pointerdown', () => {
            this.monkeynoise = this.sound.add("monkeynoise");
                this.monkeynoise.play();
            this.cameras.main.fade(500, 0,0,0);
            this.time.delayedCall(500, () => this.scene.start('intro'));
        });
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Demo3, Demo4, Outro],
    title: "Adventure Game",
});

