import { Component,Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MetaService } from './service/meta-service.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly router: Router,
    private readonly titleService: Title,
    private readonly meta : Meta,
    private metaService:MetaService,
    @Inject(DOCUMENT) private dom:any
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.titleService.setTitle(this.getNestedRouteTitles().join(' | '));
    });

  }

  

  getNestedRouteTitles(): string[] {
    let currentRoute = this.router.routerState.root.firstChild;
    const titles: string[] = [];
    let link: HTMLLinkElement = this.dom.createElement('link');

    while (currentRoute) {
      if (currentRoute?.snapshot?.routeConfig?.data?.['title']) {
        titles.push(currentRoute.snapshot.routeConfig.data['title']);
      }
      if (currentRoute?.snapshot?.routeConfig?.data?.['description']) {
        this.meta.updateTag({ name: 'description', content: currentRoute?.snapshot?.routeConfig?.data?.['description'] })
      }

      if (currentRoute?.snapshot?.routeConfig?.data?.['keyword']) {
        this.meta.updateTag({ name: 'keywords', content: currentRoute?.snapshot?.routeConfig?.data?.['keyword'] })
      }
      console.log('currentRoute', currentRoute)

      var elem = document.getElementById("test");
      if(elem)
      elem!.parentElement!.removeChild(elem!);
      
    link.id = 'test'
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', this.dom.URL);
    currentRoute = currentRoute.firstChild;
    }

    return titles;
  }

  






}
