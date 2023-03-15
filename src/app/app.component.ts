import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {

    name = "mircea cel batran"
    imageUrl = "https://picsum.photos/id/237/300/300";
    imagesList = [
        "https://picsum.photos/id/237/300/300",
        "https://picsum.photos/id/227/300/300",
        "https://picsum.photos/id/217/300/300"
    ]
    currentDate = new Date();
    cost = 200000;
    temperature = 16.4;

    pizza = {
        toppings: ['mozzarela, peperoni'],
        size: 'large'
    }

    blueClass = false;
    fontSize = 24;
    
    getName() {
        return this.name;
    }

    changeImage(e: KeyboardEvent) {
        this.imageUrl = (e.target as HTMLInputElement).value;
    }

    logImage(event: string) {
        console.log(event);
    }
} 