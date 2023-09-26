import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css', './menu-bar.responsive.component.css']
})
export class MenuBarComponent implements OnInit {
  @ViewChild('menuToggle', { static: true }) menuToggle!: ElementRef;
  @ViewChild('menuItems', { static: true }) menuItems!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Use o Renderer2 para adicionar a lógica do menu hamburger
    this.renderer.listen(this.menuToggle.nativeElement, 'click', () => {
      this.menuItems.nativeElement.classList.toggle('active');
    });
  }
}
