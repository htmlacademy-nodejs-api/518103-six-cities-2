import { CommandName } from "./command.constant.js";
import { Command } from "./command.interface.js";

const HELP_MESSAGE = `
    Программа для подготовки данных для REST API сервера.  

    Пример: cli.js --<command> [--arguments]
    Команды:

    ${CommandName.Version}:     # выводит номер версии
    ${CommandName.Help}:        # печатает этот текст
    ${CommandName.Import}:      # импортирует данные из TSV
    ${CommandName.Generate}:    # генерирует произвольное количество тестовых данных
`;

export class HelpCommand implements Command {
  public getName(): string {
    return CommandName.Help;
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(HELP_MESSAGE);
  }
}
