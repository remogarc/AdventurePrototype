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

class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Shore");
    }
    preload(){
        this.load.image("background1", "D2 assets/shore.png");
    }
    onEnter() {

        let shore = this.add.image(0, this.h / 8, 'background1').setOrigin(0, 0)
        shore.setScale(3)

        if(get_grappel == false){
            let toolbox = this.add.text(this.w * 0.5, this.w * 0.15, "📎 toolbox")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => this.showMessage("Tools available for use. Maybe when I have enough materials."))
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
                        this.tweens.add({
                            targets: toolbox,
                            x: '+=' + this.s,
                            repeat: 2,
                            yoyo: true,
                            ease: 'Sine.inOut',
                            duration: 100
                        });
                    });
                }
        }
        
        if(get_stones == false){
            let stones = this.add.text(this.w * 0.4, this.w * 0.3, "🔑 stones")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("Some stones lying around.")
                })
                .on('pointerdown', () => {
                    this.showMessage("These can be a great source for crafting.");
                    this.gainItem('Stones');
                    this.tweens.add({
                        targets: stones,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => stones.destroy()
                    });
                    get_stones = true;
                })
        }

        let shore_forest = this.add.text(this.w * 0.63, this.w * 0.43, "🚪")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                    this.showMessage("Enter forest.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo2');
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "Forest");
    }
    preload(){
        this.load.image("background2", "D2 assets/forest.png");
    }
    onEnter() {

        let shore = this.add.image(0, this.h / 8, 'background2').setOrigin(0, 0)
        shore.setScale(3)
        let forest_shore = this.add.text(this.w * 0.06, this.w * 0.12, "🚪")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter shore.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let forest_cove = this.add.text(this.w * 0.025, this.w * 0.38, "🚪")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter cove.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo3');
            });

        let forest_peak = this.add.text(this.w * 0.43, this.w * 0.45, "🚪")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter peak.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo4');
            });
        
        if(get_sticks == false){
            let sticks = this.add.text(this.w * 0.27, this.w * 0.23, "🔑 sticks")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("Some sticks lying around.")
                })
                .on('pointerdown', () => {
                    this.showMessage("These can be a great source for crafting.");
                    this.gainItem('Sticks');
                    this.tweens.add({
                        targets: sticks,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => sticks.destroy()
                    });
                    get_sticks = true;
                })
        }

        if(get_fruit == false ){
            let fruit = this.add.text(this.w * 0.52, this.w * 0.3, "🔑 fruit")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("There is a fruit growing here.")
                })
                if(this.hasItem('Hungry monkey') == true){
                    fruit.on('pointerdown', () => {
                        this.showMessage("Maybe the monkey will enjoy eating this.");
                        this.gainItem('Fruit');
                        this.tweens.add({
                            targets: fruit,
                            y: `-=${2 * this.s}`,
                            alpha: { from: 1, to: 0 },
                            duration: 500,
                            onComplete: () => fruit.destroy()
                        });
                        get_fruit = true;
                    })
                }
        }

        if(get_flower == false){
            let flower = this.add.text(this.w * 0.1, this.w * 0.35, "🔑 flower")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("This flower smells nice.")
                })
                .on('pointerdown', () => {
                    this.showMessage("You took the flower.");
                    this.gainItem('Flower');
                    this.tweens.add({
                        targets: flower,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => flower.destroy()
                    });
                    get_flower = true;
                })
        }

        // let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage('*giggles*');
        //         this.tweens.add({
        //             targets: finish,
        //             x: this.s + (this.h - 2 * this.s) * Math.random(),
        //             y: this.s + (this.h - 2 * this.s) * Math.random(),
        //             ease: 'Sine.inOut',
        //             duration: 500
        //         });
        //     })
        //     .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Demo3 extends AdventureScene {
    constructor() {
        super("demo3", "Cove");
    }
    preload(){
        this.load.image("background3", "D2 assets/cove.png");
    }
    onEnter() {

        let shore = this.add.image(0, this.h / 8, 'background3').setOrigin(0, 0)
        shore.setScale(3)
        let shore_forest = this.add.text(this.w * 0.66, this.w * 0.26, "🚪")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter forest.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo2');
            });

        let treasure = this.add.text(this.w * 0.3, this.w * 0.15, "📎 treasure")
            .setFontSize(this.s * 2)
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
                    treasure.on('pointerdown', () => {
                        this.showMessage("It's locked!");
                        this.tweens.add({
                            targets: treasure,
                                x: '+=' + this.s,
                                repeat: 2,
                                yoyo: true,
                                ease: 'Sine.inOut',
                                duration: 100
                        });
                    });
                });
            }
            else{
                treasure.on('pointerdown', () => {
                    if(used_grappel == true && this.hasItem('Key')){
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
                            let gold_fruit = this.add.text(this.w * 0.3, this.w * 0.3, "🔑 golden fruit")
                            this.tweens.add({
                                targets: gold_fruit,
                                y: `-=${2 * this.s}`,
                                alpha: { from: 1, to: 0 },
                                duration: 500,
                                delay: 800,
                                onComplete: () => gold_fruit.destroy()
                            });
                        });
                    }
                    if(get_grappel == true && this.hasItem('Key') == false){
                        this.showMessage("It's locked!");
                            this.tweens.add({
                                targets: treasure,
                                x: '+=' + this.s,
                                repeat: 2,
                                yoyo: true,
                                ease: 'Sine.inOut',
                                duration: 100
                            });
                    }
                    else{
                        this.showMessage("It's too far to reach!");
                        this.tweens.add({
                            targets: treasure,
                            x: '+=' + this.s,
                            repeat: 2,
                            yoyo: true,
                            ease: 'Sine.inOut',
                            duration: 100
                        });
                    }
                });
            }

        if(get_ball == false){
            let ball = this.add.text(this.w * 0.4, this.w * 0.4, "🔑 ball")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("There is a ball lying on the sand.")
                })
                .on('pointerdown', () => {
                    this.showMessage("This would be fun to play with.");
                    this.gainItem('Ball');
                    this.tweens.add({
                        targets: ball,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => ball.destroy()
                    });
                    get_ball = true;
                })
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
    }
    onEnter() {

        let shore = this.add.image(0, this.h / 8, 'background4').setOrigin(0, 0)
        shore.setScale(3)
        let peak_forest = this.add.text(this.w * 0.07, this.w * 0.15, "🚪")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Enter forest.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo2');
            });
        
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
                            this.showMessage("The monkey played with the ball and it gave you a rope in return.");
                            this.gainItem('Rope');
                            this.loseItem('Ball');
                            get_rope = true;
                            });
                    }
                }
                else if(this.hasItem('Key') == false){
                    monkey.on('pointerover', () => {
                        this.showMessage("The monkey has enjoyed playing but now looks hungry.")
                        this.gainItem('Hungry monkey');
                    })
                    if(this.hasItem('Fruit') == true){
                        monkey.on('pointerdown', () => {
                            this.showMessage("You gave the monkey the fruit and it gave you a key in return.");
                            this.gainItem('Key');
                            this.loseItem('Hungry monkey');
                            this.loseItem('Fruit');
                            });
                    }
                    else{}
                }
                else if(this.hasItem('Flower') == true){
                        monkey.on('pointerdown', () => {
                            this.showMessage("The monkey wasn't sure what to do with the flower so it just ate it.");
                            this.loseItem('Flower');
                            });
                    }
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Demo1, Demo2, Demo3, Demo4] ,
    // [Intro, Demo1, Demo2, Demo3, Demo4, Outro],
    title: "Adventure Game",
});

