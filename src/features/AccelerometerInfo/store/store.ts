import { Store } from "@/shared/store-kit";
import { createModel } from "./@Model";
import { syncPosition } from "./observers";

const store = new Store(createModel(), {
  observers: [syncPosition],
});

export default store;
