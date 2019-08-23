import { ssLogger } from "../../src/util/logger";

// Use like:
// SS_MODE=dev SS_LOG_LEVEL=trace ts-node test/util/logger-test.ts 

ssLogger.trace("BEGIN logger-test module");
ssLogger.trace("Testing logger - trace message");
ssLogger.debug("Testing logger - debug message");
ssLogger.info("Testing logger - info message");
ssLogger.warn("Testing logger - warn message");
ssLogger.error("Testing logger - error message");
ssLogger.fatal("Testing logger - fatal message");
ssLogger.trace("END logger-test module");
