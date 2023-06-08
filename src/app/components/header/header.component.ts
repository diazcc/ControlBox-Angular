import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() dataEmit: EventEmitter<string> = new EventEmitter<string>();
  terminoBusqueda: string='';

  onBuscarClick() {
    if (this.terminoBusqueda && this.terminoBusqueda.trim() !== '') {
      this.dataEmit.emit(this.terminoBusqueda.trim());
    }
  }
}
