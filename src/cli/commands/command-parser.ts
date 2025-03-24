import { COMMAND_PREFIX } from "./command.constant.js";

type ParsedCommand = Record<string, string[]>;

export class CommandParser {
  public static parse(cliArguments: string[]): ParsedCommand {
    const parsedCommand: ParsedCommand = {};
    let currentCommand = "";

    for (const argument of cliArguments) {
      if (argument.startsWith(COMMAND_PREFIX)) {
        currentCommand = argument.substring(COMMAND_PREFIX.length);
        parsedCommand[currentCommand] = [];
      } else if (currentCommand && argument) {
        parsedCommand[currentCommand].push(argument);
      }
    }

    return parsedCommand;
  }
}
