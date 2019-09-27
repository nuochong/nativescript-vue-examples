import { Observable } from 'tns-core-modules/data/observable';
import { Color } from 'tns-core-modules/color';

export class style extends Observable {

  constructor() {
    super();

    this.title = 'Speed';
    this.titleTextSize = 40;
    this.titleVerticalOffset = 60;
    this.titleHorizontalOffset = 0;

    this.subtitle = 'km/h';
    this.subtitleTextSize = 20;
    this.subtitleVerticalOffset = -10;
    this.subtitleHorizontalOffset = 10;

    this.majorTicksCount = 10;
    this.minorTicksCount = 4;
    this.majorTicksWidth = 5;
    this.minorTicksWidth = 1;
    this.lineThickness = 2;
    this.labelsCount = 10;
    this.androidLabelsSize = 10;
    this.iosLabelsSize = 40;
    this.labelsVisible = true;

    this.needleLength = 0.8;
    this.circleRadius = 7;
    this.strokeWidth = 3;
    this.bottomWidth = 12;
    this.topWidth = 1;

    this.firstPoint = 60;
    this.secondPoint = 120;
    this.barWidth = 0.1;

    this.reset();
  }

  onUpdate() {
    this.set('needleValue', 136);
    this.set('titleTextColor', new Color('DarkRed'));
    this.set('subtitleTextColor', new Color('Red'));
    this.set('fillColor', new Color('Red'));
    this.set('firstColor', new Color('LightGray'));
    this.set('labelsColor', new Color('DarkRed'));
    this.set('lineColor', new Color('SlateGray'));
    this.set('secondColor', new Color('Black'));
    this.set('strokeColor', new Color('DarkGray'));
  }

  onReset() {
    this.reset();
  }

  reset() {
    this.set('needleValue', 48);
    this.resetColors();
  }

  resetColors() {
    this.set('titleTextColor', new Color('DarkGreen'));
    this.set('subtitleTextColor', new Color('Green'));
    this.set('labelsColor', new Color('Green'));
    this.set('lineColor', new Color('Orange'));
    this.set('fillColor', new Color('#9DCA56'));
    this.set('firstColor', new Color('#9DCA56'));
    this.set('secondColor', new Color('#F0C44D'));
    this.set('strokeColor', new Color('Gray'));
  }
}
