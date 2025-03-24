import chalk from "chalk";
import { TSVFileReader } from "../../shared/libs/file-reader/tsv-file-reader.js";
import { CommandName } from "./command.constant.js";
import { Command } from "./command.interface.js";

export class ImportCommand implements Command {
  public getName(): string {
    return CommandName.Import;
  }

  public async execute(...parameters: string[]): Promise<void> {
    const [filename] = parameters;
    const fileReader = new TSVFileReader(filename);

    try {
      fileReader.read();
      console.info(`File ${chalk.green(filename)} was successfully loaded: \n`);
      console.info(fileReader.toArray());
    } catch (error) {
        if (!(error instanceof Error)) {
            throw error;
          }
    
          console.error(chalk.red(`Can't import data from file: ${filename}`));
          console.error(chalk.red(`Details: ${error.message}`));
    }
  }
}
