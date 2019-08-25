import pino from "pino";

const ssLogLevel = process.env.SS_LOG_LEVEL || "info";
const ssMode = process.env.SS_MODE || "prod";

// NOTE: Using pino-pretty is not recommended in production!

const pinoDevOptions = {
  level: ssLogLevel,
  prettyPrint: {
    colorize: true,
    translateTime: true,
  },
};


const pinoProdOptions = {
  level: ssLogLevel,
};

const pinoOptions = (ssMode === "prod") ? pinoProdOptions : pinoDevOptions;

function initSSLogger() {
  const myLogger = pino(pinoOptions);
  myLogger.info(`logger: Logger set to ${ssLogLevel}`);
  return myLogger;
}

export const ssLogger = initSSLogger();

