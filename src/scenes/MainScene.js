import Phaser from "phaser";
import Config from "../Config";
import Button from "../ui/Button";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("mainScene");
  }

  create() {
    const bg = this.add.graphics();
    bg.fillStyle(0xbbdefb);
    bg.fillRect(0, 0, Config.width, Config.height);
    bg.setScrollFactor(0);

    // TODO 비트맵 텍스트 로딩에 문제가 있으세욥!
    // this.add
    //   .bitmapText(Config.width / 2, 150, "pixelFont", "Meow Meow Fuzzyface", 40)
    //   .setOrigin(0.5);

    this.add.image(Config.width / 2, Config.height / 2, "cat");

    new Button(
      Config.width / 2,
      Config.height / 2 + 150,
      "Start Game",
      this,
      () => this.scene.start("playGame")
    );
  }
}
