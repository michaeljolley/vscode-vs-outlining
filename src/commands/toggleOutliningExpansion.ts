import * as vscode from "vscode";

export async function toggleOutliningExpansion() {
  const textEditor = vscode.window.activeTextEditor;
  if (!textEditor) {
    return;
  }

  await vscode.commands.executeCommand("editor.unfoldAll");
}
