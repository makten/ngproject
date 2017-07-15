import { FavoriteChangedEventArgs } from './../favourite/favourite.component';
import { Component, Input } from "@angular/core";

@Component({
	selector: 'admin-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

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

	posts: any[] = [
		{
			title: 'Post 1',
			isFavorite: true,
			isLiked: false,
			likeCount: 10
		},
		{
			title: 'Post 2',
			isFavorite: false,
			isLiked: false,
			likeCount: 2
		},
		{
			title: 'Post 3',
			isFavorite: true,
			isLiked: false,
			likeCount: 5
		},
	];



	firstMethod(): string {
		return this.gender + " " + this.age;
	}

	enabledBtn(): void {
		this.isDisabled = !this.isDisabled;
	}

	toggleDetails(): void {

		this.showDetails = !this.showDetails;
	}

	onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
		console.log("Nothing really changed!", eventArgs)
	}


}