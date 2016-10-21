import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/HeroService';
import { Hero } from '../model/Hero';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];
	constructor(
		private heroService: HeroService,
		private router: Router
	) {

	}

	ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}