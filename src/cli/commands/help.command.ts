import chalk from "../../shared/libs/chalk/index.js";
import { COMMAND_PREFIX, CommandName } from "./command.constant.js";
import { Command } from "./command.interface.js";

const HELP_MESSAGE = `
    ${chalk.yellow('Программа для подготовки данных для REST API сервера.')}

    ${chalk.green('Пример:')} cli.js --<command> [--arguments]

    ${chalk.magenta('Команды:')}

    ${chalk.green(`${COMMAND_PREFIX}${CommandName.Version}`)}:     # выводит номер версии
    ${chalk.green(`${COMMAND_PREFIX}${CommandName.Help}`)}:        # печатает этот текст
    ${chalk.green(`${COMMAND_PREFIX}${CommandName.Import}`)}:      # импортирует данные из TSV
    ${chalk.green(`${COMMAND_PREFIX}${CommandName.Generate}`)}:    # генерирует произвольное количество тестовых данных
`;

export class HelpCommand implements Command {
  public getName(): string {
    return CommandName.Help;
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(HELP_MESSAGE);
  }
}
