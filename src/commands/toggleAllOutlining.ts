import { Telemetry } from "../telemetry";
import { collapseToDefinitions } from "./collapseToDefinitions";
import { toggleOutliningExpansion } from "./toggleOutliningExpansion";

let toggleState = false;

export async function toggleAllOutlining() {
  if (toggleState) {
    toggleOutliningExpansion();
  } else {
    await collapseToDefinitions();
  }

  toggleState = !toggleState;

  Telemetry.sendTelemetryEvent("toggleAllOutlining");
}
