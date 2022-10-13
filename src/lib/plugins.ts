import localforage from "localforage";

export type Plugin = {
  isEnabled: boolean;
  name: string;
  uuid: string;
  description: string;
};

(async () => {
  await set([
    {
      isEnabled: true,
      name: "brainfuck",
      uuid: "710e292e-856b-4151-a9c5-6414f542baf6",
      description: "Convert normal language into gybrish stuff:)",
    },
    {
      isEnabled: true,
      name: "sandbox",
      uuid: "2f73db78-da6d-4b07-af29-e48f3e04e8f8",
      description: "Multiple functionality",
    },
    {
      description: "Can fetch API documentation from the internet",
      isEnabled: true,
      name: "apidocs",
      uuid: "b11b366c-d647-420d-b8cb-56975da23568",
    },
  ]);
})();

export async function getPlugins(query = "plugins") {
  await fakeNetwork(query);
  let plugins = await localforage.getItem<Plugin[]>("plugins");
  if (!plugins) plugins = [];
  return plugins;
}

export async function getPlugin(id: string) {
  await fakeNetwork(`plugin:${id}`);
  const plugins = await localforage.getItem<Plugin[]>("plugins");

  if (plugins) return plugins.find(({ uuid }) => uuid === id);
  return null;
}

export async function updatePlugin(id: string, updates: Partial<Plugin>) {
  await fakeNetwork();
  const plugins = await localforage.getItem<Plugin[]>("plugins");
  if (!plugins) return null;
  const plugin = plugins.find(({ uuid }) => uuid === id);
  if (!plugin) throw new Error(`No plugin found for ${id}`);

  Object.assign(plugins, updates);
  await set(plugins);
  return plugin;
}

function set<T>(plugins: T) {
  return localforage.setItem("plugins", plugins);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: Record<string, boolean> = {};

async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
  } else {
    if (fakeCache[key]) {
      return;
    }
    fakeCache[key] = true;
  }

  return new Promise((res) => {
    setTimeout(res, 1800);
  });
}
