import { setupServer } from "msw/node";
import { Handlers } from "./msHandlers";

export const server = setupServer(...Handlers);
