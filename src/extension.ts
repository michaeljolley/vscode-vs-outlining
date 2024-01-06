import * as vscode from "vscode";

import { collapseToDefinitions } from "./commands/collapseToDefinitions";
import { toggleOutliningExpansion } from "./commands/toggleOutliningExpansion";
import { toggleAllOutlining } from "./commands/toggleAllOutlining";
import { Telemetry } from "./telemetry";

export function activate(context: vscode.ExtensionContext) {
  // If enabled, initialize telemetry
  Telemetry.initialize(context);

  const collapseToDefinitionsDisposable = vscode.commands.registerCommand(
    "vscode-vs-outlining.collapseToDefinitions",
    collapseToDefinitions,
  );

  const toggleOutliningExpansionDisposable = vscode.commands.registerCommand(
    "vscode-vs-outlining.toggleOutliningExpansion",
    toggleOutliningExpansion,
  );

  const toggleAllOutliningDisposable = vscode.commands.registerCommand(
    "vscode-vs-outlining.toggleAllOutlining",
    toggleAllOutlining,
  );

  context.subscriptions.push(
    collapseToDefinitionsDisposable,
    toggleOutliningExpansionDisposable,
    toggleAllOutliningDisposable,
  );
}

export function deactivate() {}
