import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landboot',
  templateUrl: './landboot.component.html',
  styleUrls: ['./landboot.component.scss']
})
export class LandbootComponent implements OnInit{
  private myLandbot: any;
  chatbotWidth: string = '50%'; // Establece el ancho del chatbot en porcentaje
  chatbotHeight: string = '70%'; // Establece la altura del chatbot en porcentaje

  Landbot: any;

  ngOnInit() {
    this.loadLandbotScript();
  }

  loadLandbotScript() {
    const landbotScript = document.createElement('script');
    landbotScript.type = 'text/javascript';
    landbotScript.async = true;
    landbotScript.addEventListener('load', () => {
      this.initLandbot();
    });
    landbotScript.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(landbotScript, firstScript);
  }

  initLandbot() {
    if (!this.myLandbot) {
      this.myLandbot = new (window as any)['Landbot'].Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1626198-UTFGJPS29NBP3RLT/index.json'
      });
    }
  }
}