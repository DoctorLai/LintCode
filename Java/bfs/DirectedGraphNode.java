package org.likexin.bfs;

import java.util.ArrayList;

/**
 * 有向图
 */
public class DirectedGraphNode {

  int label;
  ArrayList<DirectedGraphNode> neighbors;

  DirectedGraphNode(int x) {
    label = x;
    neighbors = new ArrayList<>();
  }

}
