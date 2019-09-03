import {bold, blue} from 'kleur';
import {ConsoleMessage} from '../interfaces/Console';
import figlet from 'figlet';

export class Logger {

  public showTitleAndBanner(): void {
    console.log(bold().blue(figlet.textSync(ConsoleMessage.TITLE, { font: "Graffiti"})));
    console.log(blue(ConsoleMessage.BANNER));
    console.log('\n')
  }
}
