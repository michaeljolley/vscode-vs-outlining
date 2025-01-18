import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";

suite("Extension Activation Tests", () => {
  test("Commands are registered", () => {
    vscode.commands.getCommands(true).then((commands) => {
      assert.notEqual(
        commands.find((v) => v === "vscode-vs-outlining.collapseToDefinitions"),
        undefined,
      );
      assert.notEqual(
        commands.find(
          (v) => v === "vscode-vs-outlining.toggleOutliningExpansion",
        ),
        undefined,
      );
      assert.notEqual(
        commands.find((v) => v === "vscode-vs-outlining.toggleAllOutlining"),
        undefined,
      );
    });
  });
});
