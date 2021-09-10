import {
  mutableHandlers,
  readonlyHandlers,
} from "./baseHandler";

export function reactive(raw) {
  return createReactiveObject(raw, mutableHandlers);
}

export function readonly(raw) {
  return createReactiveObject(raw, readonlyHandlers);
}

function createReactiveObject(target, baseHandles) {
  return new Proxy(target, baseHandles);
}
