import { Component } from "@angular/core";

@Component({
	selector: 'admin-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	
	// constructor(argument) {
		// 	// code...
		// }
		colSpan: number = 2;
		addClass: string = "colorClass boldClass";
		imagePath: string = `https://lh3.googleusercontent.com/
		Pp2HNNIdGSDkBL4-PiaGv0Zta1hAX8zksfg_M6TnzdTh7xz0oAe3IS
		NzG18Va2Dom5ioauzb-bqlAYGgi08T7dXX7r4MxH8CMvwCf1o3=s660`;
		firstname: string = "Hafiz";
		lastname: string = "Abass";
		gender: string = "Male";
		age: number = 15;
		isDisabled: boolean = false;
		showDetails: boolean = false;


		firstMethod(): string {
			return this.gender + " " + this.age;
		}

		enabledBtn(): void {		
			this.isDisabled = !this.isDisabled;
		}

		toggleDetails(): void {

			this.showDetails = !this.showDetails;
		}
	}