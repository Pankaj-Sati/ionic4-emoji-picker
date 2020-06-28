/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic4-emoji-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { EMOJIS } from '../data/emoji.data';
import { IonSlides, ModalController } from '@ionic/angular';
export class Ionic4EmojiPickerComponent {
    //TO emmit event when an emoji is selected
    /**
     * @param {?} modalCtrl
     */
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.emojiCategories = [];
        this.mainEmojiData = EMOJIS;
        this.currentEmojiList = [];
        this.currentCategoryName = '';
        this.isInModal = false; //To determine whether this componet is created using a modal or not
        //To determine whether this componet is created using a modal or not
        this.selectionEvent = new EventEmitter(); //TO emmit event when an emoji is selected
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getEmojiCategories();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        this.setActiveCategorySlide();
        this.slides.ionSlideDidChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            console.log('Slide changed data', data);
            this.setActiveCategorySlide();
        }));
    }
    /**
     * @return {?}
     */
    getEmojiCategories() {
        this.mainEmojiData.forEach((/**
         * @param {?} category
         * @return {?}
         */
        category => {
            this.emojiCategories.push(category);
        }));
        this.currentCategoryName = this.emojiCategories[0].name;
        this.currentEmojiList = this.emojiCategories[0].emojis;
    }
    /**
     * @param {?} selectedEmojiList
     * @param {?} categoryIndex
     * @return {?}
     */
    categoryChanged(selectedEmojiList, categoryIndex) {
        this.currentEmojiList = selectedEmojiList.emojis;
        this.currentCategoryName = selectedEmojiList.name;
        this.slides.slideTo(categoryIndex);
        this.setActiveCategorySlide();
    }
    /**
     * @param {?} code
     * @return {?}
     */
    selectEmoji(code) {
        /** @type {?} */
        let selectionData = {
            data: code
        };
        this.selectionEvent.emit(selectionData);
        if (this.isInModal) {
            this.modalCtrl.dismiss(selectionData); //Dismiss the modal with data
        }
    }
    /**
     * @return {?}
     */
    setActiveCategorySlide() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.slides.getActiveIndex().then((/**
             * @param {?} index
             * @return {?}
             */
            index => {
                this.currentCategoryName = this.emojiCategories[index].name;
                console.log(this.currentCategoryName);
                /** @type {?} */
                let categoryDiv = this.categoryContainer.nativeElement.children.item(index);
                this.categoryContainer.nativeElement.scrollLeft = categoryDiv.offsetLeft - 20;
            }));
        });
    }
}
Ionic4EmojiPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-picker',
                template: `<ion-content>
 
  <ion-row>
    <ion-col size="12">
      <!--EMOJI CATEGORIES-->

      <div class="categoryContainer" #categoryDiv>
        <div  class="category" [class.selectedCategory]="currentCategoryName==item.name" *ngFor="let item of emojiCategories;let i=index;" (click)="categoryChanged(item,i)">
          <p>{{item.icon[0]}}</p>
          <p>{{item.name}}</p>
        </div>
      </div>

    </ion-col>
    <ion-col size="12">
      <!--CATEGORY CONTENT-->

      <ion-slides #slides pager="false">
        <ion-slide *ngFor="let item of emojiCategories">
          <ion-row>
            <ion-col size="1.5" *ngFor="let childItem of item.emojis" (click)="selectEmoji(childItem[0])">
              <p style="margin:1px;">{{childItem[0]}}</p>
            </ion-col>
          </ion-row>
        </ion-slide>
      </ion-slides>
      


    </ion-col>
  </ion-row>
</ion-content>`,
                styles: [`.categoryContainer
  {
      overflow: scroll;
      white-space: nowrap;
  }

  .category
  {
      display: inline-block;
      padding: 10px;
      text-align: center;
  }
  
  .selectedCategory
  {
      border-bottom: 2px solid var(--ion-color-primary);
  }`]
            }] }
];
/** @nocollapse */
Ionic4EmojiPickerComponent.ctorParameters = () => [
    { type: ModalController }
];
Ionic4EmojiPickerComponent.propDecorators = {
    slides: [{ type: ViewChild, args: ['slides', { static: false },] }],
    categoryContainer: [{ type: ViewChild, args: ['categoryDiv', { static: false },] }],
    isInModal: [{ type: Input, args: ['isInModal',] }],
    selectionEvent: [{ type: Output, args: ['onEmojiSelect',] }]
};
if (false) {
    /** @type {?} */
    Ionic4EmojiPickerComponent.prototype.slides;
    /** @type {?} */
    Ionic4EmojiPickerComponent.prototype.categoryContainer;
    /** @type {?} */
    Ionic4EmojiPickerComponent.prototype.emojiCategories;
    /** @type {?} */
    Ionic4EmojiPickerComponent.prototype.mainEmojiData;
    /** @type {?} */
    Ionic4EmojiPickerComponent.prototype.currentEmojiList;
    /** @type {?} */
    Ionic4EmojiPickerComponent.prototype.currentCategoryName;
    /** @type {?} */
    Ionic4EmojiPickerComponent.prototype.isInModal;
    /** @type {?} */
    Ionic4EmojiPickerComponent.prototype.selectionEvent;
    /**
     * @type {?}
     * @private
     */
    Ionic4EmojiPickerComponent.prototype.modalCtrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWM0LWVtb2ppLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYzQtZW1vamktcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2lvbmljNC1lbW9qaS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXNENUQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFhbkMsWUFBb0IsU0FBeUI7UUFBekIsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFQL0Msb0JBQWUsR0FBTyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBQyxNQUFNLENBQUM7UUFDckIscUJBQWdCLEdBQU8sRUFBRSxDQUFDO1FBQzFCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUVWLGNBQVMsR0FBQyxLQUFLLENBQUMsQ0FBQyxvRUFBb0U7O1FBQ2hGLG1CQUFjLEdBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLDBDQUEwQztJQUlwRyxDQUFDOzs7O0lBRUQsUUFBUTtRQUVOLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxlQUFlO1FBRWIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQSxFQUFFO1lBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUE7SUFDTixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBRWhCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFFBQVEsQ0FBQSxFQUFFO1lBRWpDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG1CQUFtQixHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RELElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUV6RCxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsaUJBQWlCLEVBQUMsYUFBYTtRQUU3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDO1FBQy9DLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBSTs7WUFFVixhQUFhLEdBQUM7WUFDaEIsSUFBSSxFQUFDLElBQUk7U0FDVjtRQUVELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hDLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFDakI7WUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtTQUNyRTtJQUNILENBQUM7Ozs7SUFDSyxzQkFBc0I7O1lBRzNCLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsS0FBSyxDQUFBLEVBQUU7Z0JBRTFDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7b0JBQ25DLFdBQVcsR0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUN6RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBQyxXQUFXLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQztZQUUzRSxDQUFDLEVBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTs7O1lBaklKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBK0JJO3lCQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JQO2FBQ0g7Ozs7WUFyRG1CLGVBQWU7OztxQkF5RGhDLFNBQVMsU0FBQyxRQUFRLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO2dDQUNqQyxTQUFTLFNBQUMsYUFBYSxFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQzt3QkFPdEMsS0FBSyxTQUFDLFdBQVc7NkJBQ2pCLE1BQU0sU0FBQyxlQUFlOzs7O0lBVHZCLDRDQUFxRDs7SUFDckQsdURBQXNFOztJQUV0RSxxREFBeUI7O0lBQ3pCLG1EQUFxQjs7SUFDckIsc0RBQTBCOztJQUMxQix5REFBOEI7O0lBRTlCLCtDQUFvQzs7SUFDcEMsb0RBQTJEOzs7OztJQUM3QywrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVNT0pJUyB9IGZyb20gJy4uL2RhdGEvZW1vamkuZGF0YSc7XG5pbXBvcnQgeyBJb25TbGlkZXMsIE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktcGlja2VyJyxcbiAgdGVtcGxhdGU6YDxpb24tY29udGVudD5cbiBcbiAgPGlvbi1yb3c+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCI+XG4gICAgICA8IS0tRU1PSkkgQ0FURUdPUklFUy0tPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlDb250YWluZXJcIiAjY2F0ZWdvcnlEaXY+XG4gICAgICAgIDxkaXYgIGNsYXNzPVwiY2F0ZWdvcnlcIiBbY2xhc3Muc2VsZWN0ZWRDYXRlZ29yeV09XCJjdXJyZW50Q2F0ZWdvcnlOYW1lPT1pdGVtLm5hbWVcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBlbW9qaUNhdGVnb3JpZXM7bGV0IGk9aW5kZXg7XCIgKGNsaWNrKT1cImNhdGVnb3J5Q2hhbmdlZChpdGVtLGkpXCI+XG4gICAgICAgICAgPHA+e3tpdGVtLmljb25bMF19fTwvcD5cbiAgICAgICAgICA8cD57e2l0ZW0ubmFtZX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9pb24tY29sPlxuICAgIDxpb24tY29sIHNpemU9XCIxMlwiPlxuICAgICAgPCEtLUNBVEVHT1JZIENPTlRFTlQtLT5cblxuICAgICAgPGlvbi1zbGlkZXMgI3NsaWRlcyBwYWdlcj1cImZhbHNlXCI+XG4gICAgICAgIDxpb24tc2xpZGUgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZW1vamlDYXRlZ29yaWVzXCI+XG4gICAgICAgICAgPGlvbi1yb3c+XG4gICAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiMS41XCIgKm5nRm9yPVwibGV0IGNoaWxkSXRlbSBvZiBpdGVtLmVtb2ppc1wiIChjbGljayk9XCJzZWxlY3RFbW9qaShjaGlsZEl0ZW1bMF0pXCI+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjFweDtcIj57e2NoaWxkSXRlbVswXX19PC9wPlxuICAgICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICAgIDwvaW9uLXJvdz5cbiAgICAgICAgPC9pb24tc2xpZGU+XG4gICAgICA8L2lvbi1zbGlkZXM+XG4gICAgICBcblxuXG4gICAgPC9pb24tY29sPlxuICA8L2lvbi1yb3c+XG48L2lvbi1jb250ZW50PmAsXG4gIHN0eWxlczogW2AuY2F0ZWdvcnlDb250YWluZXJcbiAge1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAuY2F0ZWdvcnlcbiAge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNlbGVjdGVkQ2F0ZWdvcnlcbiAge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBJb25pYzRFbW9qaVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBAVmlld0NoaWxkKCdzbGlkZXMnLHtzdGF0aWM6ZmFsc2V9KSBzbGlkZXM6SW9uU2xpZGVzO1xuICBAVmlld0NoaWxkKCdjYXRlZ29yeURpdicse3N0YXRpYzpmYWxzZX0pIGNhdGVnb3J5Q29udGFpbmVyOkVsZW1lbnRSZWY7XG4gIFxuICBlbW9qaUNhdGVnb3JpZXM6YW55W109W107XG4gIG1haW5FbW9qaURhdGE9RU1PSklTO1xuICBjdXJyZW50RW1vamlMaXN0OmFueVtdPVtdO1xuICBjdXJyZW50Q2F0ZWdvcnlOYW1lOnN0cmluZz0nJztcbiAgXG4gIEBJbnB1dCgnaXNJbk1vZGFsJykgaXNJbk1vZGFsPWZhbHNlOyAvL1RvIGRldGVybWluZSB3aGV0aGVyIHRoaXMgY29tcG9uZXQgaXMgY3JlYXRlZCB1c2luZyBhIG1vZGFsIG9yIG5vdFxuICBAT3V0cHV0KCdvbkVtb2ppU2VsZWN0Jykgc2VsZWN0aW9uRXZlbnQ9bmV3IEV2ZW50RW1pdHRlcigpOyAvL1RPIGVtbWl0IGV2ZW50IHdoZW4gYW4gZW1vamkgaXMgc2VsZWN0ZWRcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsQ3RybDpNb2RhbENvbnRyb2xsZXIpIFxuICAgIHtcbiAgXG4gICAgfVxuICBcbiAgICBuZ09uSW5pdCgpIFxuICAgIHtcbiAgICAgIHRoaXMuZ2V0RW1vamlDYXRlZ29yaWVzKCk7XG4gICAgfVxuICBcbiAgICBuZ0FmdGVyVmlld0luaXQoKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQnKTtcbiAgICAgIHRoaXMuc2V0QWN0aXZlQ2F0ZWdvcnlTbGlkZSgpO1xuICAgICAgdGhpcy5zbGlkZXMuaW9uU2xpZGVEaWRDaGFuZ2Uuc3Vic2NyaWJlKGRhdGE9PlxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1NsaWRlIGNoYW5nZWQgZGF0YScsZGF0YSk7XG4gICAgICAgICAgdGhpcy5zZXRBY3RpdmVDYXRlZ29yeVNsaWRlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICBcbiAgICBnZXRFbW9qaUNhdGVnb3JpZXMoKVxuICAgIHtcbiAgICAgIHRoaXMubWFpbkVtb2ppRGF0YS5mb3JFYWNoKGNhdGVnb3J5PT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuZW1vamlDYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2F0ZWdvcnlOYW1lPXRoaXMuZW1vamlDYXRlZ29yaWVzWzBdLm5hbWU7XG4gICAgICAgIHRoaXMuY3VycmVudEVtb2ppTGlzdD10aGlzLmVtb2ppQ2F0ZWdvcmllc1swXS5lbW9qaXM7XG4gICAgICBcbiAgICB9XG4gIFxuICAgIGNhdGVnb3J5Q2hhbmdlZChzZWxlY3RlZEVtb2ppTGlzdCxjYXRlZ29yeUluZGV4KVxuICAgIHtcbiAgICAgIHRoaXMuY3VycmVudEVtb2ppTGlzdD1zZWxlY3RlZEVtb2ppTGlzdC5lbW9qaXM7XG4gICAgICB0aGlzLmN1cnJlbnRDYXRlZ29yeU5hbWU9c2VsZWN0ZWRFbW9qaUxpc3QubmFtZTtcbiAgICAgIHRoaXMuc2xpZGVzLnNsaWRlVG8oY2F0ZWdvcnlJbmRleCk7XG4gICAgICB0aGlzLnNldEFjdGl2ZUNhdGVnb3J5U2xpZGUoKTtcbiAgICB9XG4gIFxuICAgIHNlbGVjdEVtb2ppKGNvZGUpXG4gICAge1xuICAgICAgbGV0IHNlbGVjdGlvbkRhdGE9e1xuICAgICAgICBkYXRhOmNvZGVcbiAgICAgIH07XG4gIFxuICAgICAgdGhpcy5zZWxlY3Rpb25FdmVudC5lbWl0KHNlbGVjdGlvbkRhdGEpO1xuICAgICAgaWYodGhpcy5pc0luTW9kYWwpXG4gICAgICB7XG4gICAgICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3Moc2VsZWN0aW9uRGF0YSk7IC8vRGlzbWlzcyB0aGUgbW9kYWwgd2l0aCBkYXRhXG4gICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHNldEFjdGl2ZUNhdGVnb3J5U2xpZGUoKVxuICAgIHtcbiAgXG4gICAgIGF3YWl0IHRoaXMuc2xpZGVzLmdldEFjdGl2ZUluZGV4KCkudGhlbihpbmRleD0+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRDYXRlZ29yeU5hbWU9dGhpcy5lbW9qaUNhdGVnb3JpZXNbaW5kZXhdLm5hbWU7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50Q2F0ZWdvcnlOYW1lKTtcbiAgICAgICAgIGxldCBjYXRlZ29yeURpdj10aGlzLmNhdGVnb3J5Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbShpbmRleCk7IC8vR2UgaXRlbSBhdCB0aGlzIGluZGV4XG4gICAgICAgICB0aGlzLmNhdGVnb3J5Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdD1jYXRlZ29yeURpdi5vZmZzZXRMZWZ0LTIwO1xuICBcbiAgICAgICAgfSk7XG4gICAgXG4gICAgfVxuICBcblxufVxuIl19