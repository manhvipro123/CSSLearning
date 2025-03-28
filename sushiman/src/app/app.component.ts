import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { PopularComponent } from './components/popular/popular.component';
import { TrendingComponent } from './components/trending/trending.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    PopularComponent,
    TrendingComponent,
    SubscribeComponent,
    FooterComponent,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sushiman';
  ngOnInit() {
    AOS.init({
      duration: 1000,
      offset: 100,
    }); //AOS - 2
    AOS.refresh(); //refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }
}
