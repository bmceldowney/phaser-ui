"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TextButtonOptions = (function () {
    function TextButtonOptions() {
    }
    return TextButtonOptions;
}());
exports.TextButtonOptions = TextButtonOptions;
var TextButton = (function (_super) {
    __extends(TextButton, _super);
    function TextButton(game, options) {
        var x = options.x, y = options.y, width = options.width, height = options.height, text = options.text, textStyle = options.textStyle, callback = options.callback, context = options.context;
        _super.call(this, game, x, y);
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
    TextButton.prototype._over = function (button) {
        button.lineStyle(2, 0x00dd00, 1);
        button.beginFill(0x009900, 1);
        button.drawRect(0, 0, this.originalWidth, this.originalHeight);
        button.text.fill = '#000';
    };
    TextButton.prototype._out = function (button) {
        button.lineStyle(2, 0x00dd00, 1);
        button.beginFill(0x00000, 1);
        button.drawRect(0, 0, this.originalWidth, this.originalHeight);
        button.text.fill = '#0d0';
    };
    return TextButton;
}(Phaser.Graphics));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextButton;
//# sourceMappingURL=TextButton.js.map