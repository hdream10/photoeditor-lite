import { Store } from "@/shared/store-kit";
import { getSystemInfo } from "./actions";

const store = new Store(undefined, {
  actions: {
    getSystemInfo,
  },
});

export default store;
