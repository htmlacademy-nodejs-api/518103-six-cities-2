import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { Command } from "./command.interface.js";
import { CommandName } from "./command.constant.js";

type PackageJSONConfig = {
  version: string;
};

const PACKAGE_JSON_PATH_STRING = "./package.json";
const VERSION_FIELD = "version";

function isPackageJSONConfig(value: unknown): value is PackageJSONConfig {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.hasOwn(value, VERSION_FIELD)
  );
}

export class VersionCommand implements Command {
  constructor(private readonly filePath: string = PACKAGE_JSON_PATH_STRING) {}

  private readVersion(): string {
    const jsonContent = readFileSync(resolve(this.filePath), "utf-8");
    const importedContent = JSON.parse(jsonContent);

    if (!isPackageJSONConfig(importedContent)) {
      throw new Error("Failed to parse json content.");
    }

    return importedContent[VERSION_FIELD];
  }

  public getName(): string {
    return CommandName.Version;
  }

  public async execute(..._parameters: string[]): Promise<void> {
    try {
      const version = this.readVersion();
      console.info(version);
    } catch (error: unknown) {
      console.error(`Failed to read version from ${this.filePath}`);

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}
