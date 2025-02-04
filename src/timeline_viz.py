"""
Project Timeline Visualization Tool for Material Science Innovation
"""

import plotly.figure_factory as ff
import plotly.io as pio
import datetime

def create_timeline():
    # Define project tasks and timelines
    df = [
        dict(Task="Material Development", Start='2025-01-01', Finish='2025-06-30',
             Resource='Phase 1'),
        dict(Task="Powder Synthesis", Start='2025-01-01', Finish='2025-03-31',
             Resource='Phase 1'),
        dict(Task="Property Characterization", Start='2025-02-15', Finish='2025-05-15',
             Resource='Phase 1'),
        dict(Task="Process Parameters", Start='2025-04-01', Finish='2025-06-30',
             Resource='Phase 1'),
        
        dict(Task="Process Integration", Start='2025-04-01', Finish='2025-09-30',
             Resource='Phase 2'),
        dict(Task="BJT Optimization", Start='2025-04-01', Finish='2025-07-31',
             Resource='Phase 2'),
        dict(Task="Sintering Development", Start='2025-05-15', Finish='2025-08-31',
             Resource='Phase 2'),
        dict(Task="Quality Control", Start='2025-07-01', Finish='2025-09-30',
             Resource='Phase 2'),
        
        dict(Task="Scaling & Validation", Start='2025-07-01', Finish='2025-12-31',
             Resource='Phase 3'),
        dict(Task="Production Scale-up", Start='2025-07-01', Finish='2025-10-31',
             Resource='Phase 3'),
        dict(Task="Performance Verification", Start='2025-09-01', Finish='2025-11-30',
             Resource='Phase 3'),
        dict(Task="Customer Qualification", Start='2025-10-01', Finish='2025-12-31',
             Resource='Phase 3')
    ]

    colors = {'Phase 1': 'rgb(46, 137, 205)',
              'Phase 2': 'rgb(114, 44, 121)',
              'Phase 3': 'rgb(198, 47, 105)'}

    fig = ff.create_gantt(df, colors=colors, index_col='Resource',
                         show_colorbar=True,
                         group_tasks=True,
                         showgrid_x=True,
                         showgrid_y=True)

    fig.update_layout(
        title='Material Science Innovation Implementation Timeline',
        xaxis_title='Timeline',
        height=400
    )

    # Save as HTML for interactive viewing
    pio.write_html(fig, '/tmp/fair-rite/docs/timeline.html')

if __name__ == "__main__":
    create_timeline()