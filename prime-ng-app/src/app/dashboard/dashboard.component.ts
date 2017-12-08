import { Component, OnInit } from '@angular/core';
import { UIChart } from "primeng/primeng";

const DEFAULT_COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099',
'#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E',
'#316395', '#994499', '#22AA99', '#AAAA11', '#6633CC',
'#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC']


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild("mixedChart") mixedChart: UIChart;

  hoursByProject = [
    { id: 1, name: 'Payroll App', hoursSpent: 8 },
    { id: 2, name: 'Agile Times App', hoursSpent: 16 },
    { id: 3, name: 'Point of Sale App', hoursSpent: 24 },
  ];

  pieLabels = this.hoursByProject.map ((proj) => proj.name);
  pieData = this.hoursByProject.map ((proj) => proj.hoursSpent);

  pieColors = this.configureDefaultColours(this.pieData);
  
  
    private configureDefaultColours(data: number[]): string[] {
      let customColours = []
      if (data.length) {
  
        customColours = data.map((element, idx) => {
          return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
        });
      }
  
      return customColours;
    }

  hoursByProjectData = {
    labels: this.pieLabels,
    datasets: [
      { data: this.pieData,
        backgroundColor: this.pieColors
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
