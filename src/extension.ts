// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('toggle-sidebar.toggleSidebar', async () => {
			await vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');
			await vscode.commands.executeCommand('workbench.action.toggleAuxiliaryBar');
		}),
		vscode.commands.registerCommand('toggle-sidebar.toggleAll', async () => {
			await vscode.commands.executeCommand('workbench.action.toggleSidebarVisibility');
			await vscode.commands.executeCommand('workbench.action.toggleAuxiliaryBar');
			await vscode.commands.executeCommand('workbench.action.togglePanel');
		})
	);
}

// This method is called when your extension is deactivated
export function deactivate() {}
