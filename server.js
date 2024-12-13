// import { createServer } from "miragejs";
import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.post("/api/execute", (schema, request) => {
        let { language, code } = JSON.parse(request.requestBody);

        if (code.includes("error")) {
          return { status: "error", error: "SyntaxError: Unexpected token" };
        }

        return { status: "success", output: `Output for ${language}:\n${code || 'Текст по умолчанию Hello, World!'}\n` };
      });
    },
  });
}
