"""
Project Timeline Analysis and Visualization Tool
"""

import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime, timedelta

class ProjectTimeline:
    def __init__(self):
        self.start_date = datetime(2025, 1, 1)
        self.end_date = datetime(2025, 12, 31)
        
    def create_gantt_data(self):
        """Create timeline data for Gantt chart"""
        tasks = [
            dict(Task="BJT Development", Start=self.start_date,
                 Finish=self.start_date + timedelta(days=90), Phase="Manufacturing"),
            dict(Task="Process Integration", 
                 Start=datetime(2025, 4, 1),
                 Finish=datetime(2025, 9, 30), Phase="Manufacturing"),
            dict(Task="Material Research", 
                 Start=self.start_date,
                 Finish=self.start_date + timedelta(days=120), Phase="Materials"),
            dict(Task="Prototype Testing", 
                 Start=datetime(2025, 7, 1),
                 Finish=datetime(2025, 9, 30), Phase="Materials"),
            dict(Task="Design Phase", 
                 Start=datetime(2025, 4, 1),
                 Finish=datetime(2025, 5, 31), Phase="Products"),
            dict(Task="Market Testing", 
                 Start=datetime(2025, 10, 1),
                 Finish=self.end_date, Phase="Products")
        ]
        return pd.DataFrame(tasks)
    
    def create_resource_data(self):
        """Create resource allocation data"""
        resources = [
            ("Q1", "Equipment", 800),
            ("Q1", "Personnel", 300),
            ("Q1", "Materials", 200),
            ("Q1", "Training", 100),
            ("Q2", "Process Dev", 500),
            ("Q2", "Testing", 300),
            ("Q2", "Integration", 400),
            ("Q2", "Documentation", 100),
            ("Q3", "Testing", 400),
            ("Q3", "Validation", 300),
            ("Q3", "Quality Control", 200),
            ("Q3", "Documentation", 100),
            ("Q4", "Market Testing", 500),
            ("Q4", "Production Prep", 400),
            ("Q4", "Documentation", 200),
            ("Q4", "Review & Planning", 100)
        ]
        return pd.DataFrame(resources, columns=["Quarter", "Category", "Amount"])
    
    def plot_gantt(self):
        """Create interactive Gantt chart"""
        df = self.create_gantt_data()
        fig = px.timeline(df, x_start="Start", x_end="Finish", 
                         y="Task", color="Phase",
                         title="Project Implementation Timeline")
        fig.update_yaxes(autorange="reversed")
        return fig
    
    def plot_resource_allocation(self):
        """Create resource allocation visualization"""
        df = self.create_resource_data()
        fig = px.bar(df, x="Quarter", y="Amount", color="Category",
                    title="Resource Allocation by Quarter ($K)",
                    barmode="stack")
        return fig
    
    def plot_risk_timeline(self):
        """Create risk level visualization"""
        quarters = ["Q1", "Q2", "Q3", "Q4"]
        technical_risk = [5, 4, 3, 2]
        market_risk = [2, 3, 4, 5]
        resource_risk = [4, 3, 2, 1]
        
        fig = go.Figure()
        fig.add_trace(go.Scatter(x=quarters, y=technical_risk,
                                name="Technical Risk", mode="lines+markers"))
        fig.add_trace(go.Scatter(x=quarters, y=market_risk,
                                name="Market Risk", mode="lines+markers"))
        fig.add_trace(go.Scatter(x=quarters, y=resource_risk,
                                name="Resource Risk", mode="lines+markers"))
        
        fig.update_layout(title="Risk Levels Through Project Phases",
                         yaxis_title="Risk Level (1-5)",
                         xaxis_title="Quarter")
        return fig
    
    def generate_reports(self):
        """Generate and save all visualizations"""
        gantt = self.plot_gantt()
        resources = self.plot_resource_allocation()
        risks = self.plot_risk_timeline()
        
        gantt.write_html("/tmp/fair-rite/docs/gantt_chart.html")
        resources.write_html("/tmp/fair-rite/docs/resource_allocation.html")
        risks.write_html("/tmp/fair-rite/docs/risk_timeline.html")

if __name__ == "__main__":
    timeline = ProjectTimeline()
    timeline.generate_reports()