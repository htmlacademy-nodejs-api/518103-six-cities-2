import { CommandParser } from "./commands/command-parser.js";
import { CommandName } from "./commands/command.constant.js";
import { Command } from "./commands/command.interface.js";

type CommandCollection = Record<string, Command>;

export class CLIApplication {
    private readonly commandCollection: CommandCollection = {};

    constructor(
        private readonly defaultCommand: string = CommandName.Help
      ) {}
    
    public registerCommands(commandList: Command[]): void {
        commandList.forEach((command) => {
            if (Object.hasOwn(this.commandCollection, command.getName())) {
                throw new Error(`Command ${command.getName()} is already registered.`);
            }

            this.commandCollection[command.getName()] = command;
        });
    }

    private getDefaultCommand(): Command {
        if (!this.commandCollection[this.defaultCommand]) {
            throw new Error(`Default command ${this.defaultCommand} is not registered.`);
        }

        return this.commandCollection[this.defaultCommand];
    }

    public getCommand(commandName: string): Command {
        return this.commandCollection[commandName] ?? this.getDefaultCommand();
    }

    public processCommand(argv: string[]): void {
        const parsedCommand = CommandParser.parse(argv);

        const [commandName = '', commandArgs = []] = Object.entries(parsedCommand)[0] ?? [];
        const command = this.getCommand(commandName);
        command.execute(...commandArgs);
    }
}
