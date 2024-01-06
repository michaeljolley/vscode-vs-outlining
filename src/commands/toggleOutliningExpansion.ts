import * as vscode from "vscode";
import { Telemetry } from "../telemetry";

export async function toggleOutliningExpansion() {
  const textEditor = vscode.window.activeTextEditor;
  if (!textEditor) {
    return;
  }

  await vscode.commands.executeCommand("editor.unfoldAll");

  Telemetry.sendTelemetryEvent("toggleOutliningExpansion");
}
