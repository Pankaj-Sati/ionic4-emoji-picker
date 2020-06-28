# Ionic4EmojiPicker
Emoji picker with slides and tabs (like emoji picker on Whatsapp)
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Installation

Run `npm i ionic4-emoji-picker --save` to install this library. 

## Usage

After installing this package with `npm i ionic4-emoji-picker --save`, import the Ionic4EmojiPickerModule in your module.
Eg: inside home.module.ts:

`    import { Ionic4EmojiPickerModule } from 'ionic4-emoji-picker';

    @NgModule({
      ...
      imports: [
       Ionic4EmojiPickerModule //Import the main module
      ],
     ...
    })
    export class HomeModule { }`

## Add emoji picker to a component: As Selector

Use `<emoji-picker></emoji-picker>` to import the module inside a component's html

Note:`To avoid loading all the emojies again and again, don't use *ngIf to show/hide the emoji picker. Instead, set the height of cantainer to 0px for hiding the component.`

Chat style emoji picker example: 
Inside your .html file
```html<ion-footer>

  <ion-row class="input-position">
    <ion-col size="1">
      <ion-icon (click)="showEmojiPicker = !showEmojiPicker" color="secondary" name="happy" style="zoom:2;"></ion-icon>
    </ion-col>
    <ion-col size="9">
      <ion-input type="text" placeholder="Type a message" [(ngModel)]="newmessage" padding-start>
    </ion-input>
    </ion-col>
    <ion-col size="2" text-right>
        <ion-icon (click)="addmessage()" color="secondary" name="send" style="zoom:2;"></ion-icon>
   </ion-col>
  </ion-row>

  <div class="emojiContainer" [style.height]="showEmojiPicker?'300px':'0px'"> <!--Show/Hide emoji picker. Don't use *ngIf because the component will be created again and again and cause performance issue-->
    <emoji-picker (onEmojiSelect)="addEmoji($event)"></emoji-picker>
  </div>

</ion-footer>
```

In your .ts file
` 
    showEmojiPicker:boolean=false; //To show/hide emoji picker
    addEmoji(event)
    {
        this.newmessage=this.newmessage+event.data; //Concatinate the emoji with text
    }`

## onEmojiSelect Event
When user will select an emoji, onEmojiSelect event is fired. You can listen to this event by binding it to a local method.
`event.data` will contain the actual emoji.

## Use Emoji Picker Modal

You can also use emoji picker inside a modal:

import {Ionic4EmojiPickerComponent} from 'ionic4-emoji-picker';  //Import the component

...

`async openEmojiPicker()
  {

    const modal=await this.modalCtrl.create(
      {
        component:Ionic4EmojiPickerComponent,
        showBackdrop:true,
        componentProps:
        {
          isInModal:true
        }
      });

      modal.present();

      //Listen to emoji select event emmited from the modal
      modal.onDidDismiss().then(event=>
        {
          console.log('Got Data From Emoji Picker',event);
          if(event!=undefined && event.data!=undefined)
          {
            this.yourMessage+=event.data; //Add emoji to the yourMessage string
          }
        });
  }`

  `modal.onDidDismiss()` Promise can be used to get the selected emoji. 

## Further help

For any questions, please raise an issue in the github repository https://github.com/Pankaj-Sati/ionic4-emoji-picker
