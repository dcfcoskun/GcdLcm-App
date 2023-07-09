import { Component } from '@angular/core';
import { NavController,ToastController,Platform} from '@ionic/angular';

import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig
} from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[AdMobFree]
})
export class HomePage {
  OKEKSONUC:number=0;
  OBEBSONUC:number=0;
 constructor(public navCtrl: NavController,private toastCtrl: ToastController,
    private admobFree: AdMobFree, private platform :Platform) {

 }

 ngOnInit(){
     this.InterstitialReklam();
     this.reklamBanner();
 }
 CalculateGcdLcm(digitOne,digitTwo){
   
   if (digitOne == null || digitOne == "") {
     this.ToastMessage("Please enter all digits.");
     return;
   }
   if (digitTwo == null || digitTwo == "") {
     this.ToastMessage("Please enter all digits.");
     return;
   }
   let sayi1 = digitOne;
   let sayi2 = digitTwo;
   let OKEK = 0, OBEB = 0, k;

   if (sayi1 < sayi2)
       k = sayi2;
   else
       k = sayi1;

   for (; k <= sayi1 * sayi2; k++)
   {
       if (k % sayi1 == 0 && k % sayi2 == 0)
       {
           OKEK = k;
           break;
       }
   }
   if (sayi1 > sayi2)
       k = sayi2;
   else
       k = sayi1;

   for (; k > 0; k--)
   {
       if (sayi1 % k == 0 && sayi2 % k == 0)
       {
           OBEB = k;
           break;
       }
   }
   this.OBEBSONUC=OBEB;
   this.OKEKSONUC=OKEK;
 }

 ToastMessage(toastMessage) {
  //  let toast = this.toastCtrl.create({
  //    message: toastMessage,
  //    duration: 3000,
  //    position: 'middle'
  //  });
  //  toast.present();
 }

 
 InterstitialReklam() {
  this.platform.ready().then(() => {
   const interstitialConfig: AdMobFreeInterstitialConfig = {
     // add your config here
     // for the sake of this example we will just use the test config
      isTesting: false,
     autoShow: true,
     id:'ca-app-pub-9260989977089456/1254297188'
    };
    this.admobFree.interstitial.config(interstitialConfig);
    
    this.admobFree.interstitial.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
         this.admobFree.interstitial.show()
      })
      .catch(e => console.log(e));
    });
 }

 reklamBanner() {
  
  this.platform.ready().then(() => {
 
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: false,
      autoShow: true,
      bannerAtTop:false,
      id:'ca-app-pub-9260989977089456/6670275395'
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
          this.admobFree.banner.show()
       })
       .catch(e => console.log(e));

  });
   
 }

}
