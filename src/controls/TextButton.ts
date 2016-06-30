export class TextButtonOptions {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  textStyle: any;
  callback: Function;
  context: any;
}

export default class TextButton extends Phaser.Graphics {
  text: Phaser.Text;
  private originalWidth: number;
  private originalHeight: number;
  constructor (game: Phaser.Game, options: TextButtonOptions) {
    const {x, y, width, height, text, textStyle, callback, context} = options;

    super(game, x, y);
    this.game.add.existing(this);

    this.originalHeight = height;
    this.originalWidth = width;

    this.lineStyle(2, 0x00dd00, 1);
    this.beginFill(0x000000, 1);
    this.drawRect(0, 0, width, height);

    this.text = this.game.add.text(x + (this.width / 2), y + (this.height / 2), text, textStyle);
    this.text.anchor.setTo(0.5, 0.5);

    this.inputEnabled = true;
    this.events.onInputDown.add(callback, context);
    this.events.onInputOver.add(this._over, this);
    this.events.onInputOut.add(this._out, this);
  }

  _over (button: TextButton) {
    button.lineStyle(2, 0x00dd00, 1);
    button.beginFill(0x009900, 1);
    button.drawRect(0, 0, this.originalWidth, this.originalHeight);
    button.text.fill = '#000';
  }

  _out (button: TextButton) {
    button.lineStyle(2, 0x00dd00, 1);
    button.beginFill(0x00000, 1);
    button.drawRect(0, 0, this.originalWidth, this.originalHeight);
    button.text.fill = '#0d0';
  }
}
