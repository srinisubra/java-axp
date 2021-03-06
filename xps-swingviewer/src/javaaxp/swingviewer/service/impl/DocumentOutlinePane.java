/*
 * java-axp XPS utility
 * Copyright (C) 2007-2008 Chris Pope
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

package javaaxp.swingviewer.service.impl;

import java.awt.Component;
import java.util.List;

import javaaxp.core.service.XPSError;
import javaaxp.core.service.model.document.IDocumentStructure;
import javaaxp.core.service.model.document.IOutlineEntry;
import javaaxp.swingviewer.PageController;

import javax.swing.JComponent;
import javax.swing.JLabel;
import javax.swing.JTree;
import javax.swing.event.TreeSelectionEvent;
import javax.swing.event.TreeSelectionListener;
import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.DefaultTreeCellRenderer;
import javax.swing.tree.TreeNode;
import javax.swing.tree.TreePath;

public class DocumentOutlinePane  {
	public static JComponent getDocumentTree(final PageController pageController) {
		try {
			IDocumentStructure struct = pageController.getCurrDocStructure();
			if(struct == null || struct.getDocumentStructureOutline() == null || struct.getDocumentStructureOutline().getDocumentOutline() == null){
				return new JLabel("No Structure");
			}
			
			DefaultMutableTreeNode root = new DefaultMutableTreeNode("Document",true);
			List<? extends IOutlineEntry>  entries = struct.getDocumentStructureOutline().getDocumentOutline().getOutlineEntry();
			
			addEntries(1, root, entries, 0);
			
			
			JTree tree =  new JTree(root);
			tree.setCellRenderer(new DefaultTreeCellRenderer() {
				@Override
				public Component getTreeCellRendererComponent(JTree tree, Object value,
						boolean sel, boolean expanded, boolean leaf, int row,
						boolean hasFocus) {
					if(value instanceof TreeNode && ((DefaultMutableTreeNode)value).getUserObject() instanceof IOutlineEntry){
						return super.getTreeCellRendererComponent(tree, ((IOutlineEntry)((DefaultMutableTreeNode)value).getUserObject()).getDescription(), sel, expanded,leaf, row, hasFocus);
					} else {
						return super.getTreeCellRendererComponent(tree, value, sel, expanded,leaf, row, hasFocus);
					}
				}
			});
			
			
			tree.addTreeSelectionListener(new TreeSelectionListener() {
				public void valueChanged(TreeSelectionEvent e) {
					TreePath p = e.getPath();
					DefaultMutableTreeNode node = (DefaultMutableTreeNode)p.getLastPathComponent();
					Object o =node.getUserObject();
					if(o instanceof IOutlineEntry){
						IOutlineEntry entry = (IOutlineEntry)o;
						pageController.setPageForOutlineTarget(entry.getOutlineTarget());
					}
				}
			});
			
			return tree;
		} catch (XPSError e) {
			return new JLabel("No Structure");
		}

	}

	private static int addEntries(int currLevel, DefaultMutableTreeNode currRoot, List<? extends IOutlineEntry> entries, int i) {
		DefaultMutableTreeNode lastAdded = null;
		for(; i < entries.size(); i++){
			IOutlineEntry entry = entries.get(i);
			DefaultMutableTreeNode newNode = new DefaultMutableTreeNode(entry);
			if(entry.getOutlineLevel() == currLevel){
				currRoot.add(newNode);
				lastAdded = newNode;
			} else if(entry.getOutlineLevel() > currLevel){
				i = addEntries(entry.getOutlineLevel(), lastAdded, entries, i);
			} else {
				break;
			}
		}
		return i - 1;
	}



}
