import { City } from "@api/admin/cities";

export type DialogState = {
  type: "none" | "create" | "update";
  selectedCity?: City;
};
