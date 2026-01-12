"""
Visual rendering for memory palace
"""

import plotly.graph_objects as go
from typing import Set
import logging

from .memory_palace import MemoryPalace, MemoryLocation

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class VisualPalaceRenderer:
    """Render memory palace visualizations"""
    
    def __init__(self, palace: MemoryPalace):
        self.palace = palace
        self.color_scheme = {
            'visited': '#2ecc71',
            'current': '#e74c3c',
            'unvisited': '#95a5a6',
            'path': '#3498db'
        }
    
    def create_2d_map(self, current_location_id: int, visited_ids: Set[int]) -> go.Figure:
        """Create interactive 2D map"""
        locations = list(self.palace.locations.values())
        
        x_coords = [loc.coordinates[0] for loc in locations]
        y_coords = [loc.coordinates[1] for loc in locations]
        
        # Determine colors and sizes
        colors = []
        sizes = []
        for loc in locations:
            if loc.id == current_location_id:
                colors.append(self.color_scheme['current'])
                sizes.append(30)
            elif loc.id in visited_ids:
                colors.append(self.color_scheme['visited'])
                sizes.append(20)
            else:
                colors.append(self.color_scheme['unvisited'])
                sizes.append(20)
        
        fig = go.Figure()
        
        # Add paths
        for loc in locations:
            for connected_id in loc.connected_to:
                connected_loc = self.palace.locations[connected_id]
                fig.add_trace(go.Scatter(
                    x=[loc.coordinates[0], connected_loc.coordinates[0]],
                    y=[loc.coordinates[1], connected_loc.coordinates[1]],
                    mode='lines',
                    line=dict(color=self.color_scheme['path'], width=2),
                    showlegend=False,
                    hoverinfo='skip'
                ))
        
        # Add location nodes
        fig.add_trace(go.Scatter(
            x=x_coords,
            y=y_coords,
            mode='markers+text',
            marker=dict(size=sizes, color=colors, line=dict(width=2, color='white')),
            text=[loc.name for loc in locations],
            textposition='top center',
            hovertemplate='<b>%{text}</b><br>Click to visit<extra></extra>',
            customdata=[loc.id for loc in locations]
        ))
        
        # Add word count annotations
        for loc in locations:
            word_count = sum(1 for item in self.palace.items.values() 
                           if item.location_id == loc.id)
            if word_count > 0:
                fig.add_annotation(
                    x=loc.coordinates[0],
                    y=loc.coordinates[1] - 1.5,
                    text=f"📚 {word_count}",
                    showarrow=False,
                    font=dict(size=10, color='gray')
                )
        
        fig.update_layout(
            title="Your Bashkir Memory Palace",
            showlegend=False,
            hovermode='closest',
            xaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
            yaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
            plot_bgcolor='rgba(240,240,240,0.5)',
            height=600
        )
        
        return fig