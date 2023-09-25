import * as vscode from "vscode";

export async function collapseToDefinitions() {
  const textEditor = vscode.window.activeTextEditor;
  if (!textEditor) {
    return;
  }

  const selection = textEditor.selection;

  const language =
    textEditor && textEditor.document && textEditor.document.languageId;
  let levels = 1;

  switch (language) {
    case "javascript":
    case "typescript":
    case "ruby":
      levels = 2;
      break;

    case "csharp":
      levels = 3;
      break;
  }

  // Set position to top of editor so all regions collapse
  textEditor.selection = new vscode.Selection(0, 0, 0, 0);

  await vscode.commands.executeCommand("editor.unfoldAll");
  await vscode.commands.executeCommand("editor.foldLevel" + levels);
}
