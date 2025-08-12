interface Logger {
  level: "trace" | "debug" | "info" | "warn" | "error" | "fatal";
  transport: {
    target: string;
    options: {
      colorize?: boolean;
      translateTime?: string;
    };
  };
}
const logger = {
  level: "debug",
  transport: {
    target: "pino-pretty",
    options: { colorize: true, translateTime: "HH:MM:ss Z" },
  },
};
export default logger;
