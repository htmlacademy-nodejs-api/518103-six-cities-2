export const COMMAND_PREFIX = '--';

export const enum CommandName {
    Version = `${COMMAND_PREFIX}version`,
    Help = `${COMMAND_PREFIX}help`,
    Import = `${COMMAND_PREFIX}import`,
    Generate = `${COMMAND_PREFIX}generate`,
  }