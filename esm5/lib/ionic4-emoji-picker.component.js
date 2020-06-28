/**
 * @fileoverview added by tsickle
 * Generated from: lib/ionic4-emoji-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { EMOJIS } from '../data/emoji.data';
import { IonSlides, ModalController } from '@ionic/angular';
var Ionic4EmojiPickerComponent = /** @class */ (function () {
    function Ionic4EmojiPickerComponent(modalCtrl) {
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
    Ionic4EmojiPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.getEmojiCategories();
    };
    /**
     * @return {?}
     */
    Ionic4EmojiPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('ngAfterViewInit');
        this.setActiveCategorySlide();
        this.slides.ionSlideDidChange.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            console.log('Slide changed data', data);
            _this.setActiveCategorySlide();
        }));
    };
    /**
     * @return {?}
     */
    Ionic4EmojiPickerComponent.prototype.getEmojiCategories = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mainEmojiData.forEach((/**
         * @param {?} category
         * @return {?}
         */
        function (category) {
            _this.emojiCategories.push(category);
        }));
        this.currentCategoryName = this.emojiCategories[0].name;
        this.currentEmojiList = this.emojiCategories[0].emojis;
    };
    /**
     * @param {?} selectedEmojiList
     * @param {?} categoryIndex
     * @return {?}
     */
    Ionic4EmojiPickerComponent.prototype.categoryChanged = /**
     * @param {?} selectedEmojiList
     * @param {?} categoryIndex
     * @return {?}
     */
    function (selectedEmojiList, categoryIndex) {
        this.currentEmojiList = selectedEmojiList.emojis;
        this.currentCategoryName = selectedEmojiList.name;
        this.slides.slideTo(categoryIndex);
        this.setActiveCategorySlide();
    };
    /**
     * @param {?} code
     * @return {?}
     */
    Ionic4EmojiPickerComponent.prototype.selectEmoji = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        /** @type {?} */
        var selectionData = {
            data: code
        };
        this.selectionEvent.emit(selectionData);
        if (this.isInModal) {
            this.modalCtrl.dismiss(selectionData); //Dismiss the modal with data
        }
    };
    /**
     * @return {?}
     */
    Ionic4EmojiPickerComponent.prototype.setActiveCategorySlide = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slides.getActiveIndex().then((/**
                         * @param {?} index
                         * @return {?}
                         */
                        function (index) {
                            _this.currentCategoryName = _this.emojiCategories[index].name;
                            console.log(_this.currentCategoryName);
                            /** @type {?} */
                            var categoryDiv = _this.categoryContainer.nativeElement.children.item(index);
                            _this.categoryContainer.nativeElement.scrollLeft = categoryDiv.offsetLeft - 20;
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Ionic4EmojiPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-picker',
                    template: "<ion-content>\n \n  <ion-row>\n    <ion-col size=\"12\">\n      <!--EMOJI CATEGORIES-->\n\n      <div class=\"categoryContainer\" #categoryDiv>\n        <div  class=\"category\" [class.selectedCategory]=\"currentCategoryName==item.name\" *ngFor=\"let item of emojiCategories;let i=index;\" (click)=\"categoryChanged(item,i)\">\n          <p>{{item.icon[0]}}</p>\n          <p>{{item.name}}</p>\n        </div>\n      </div>\n\n    </ion-col>\n    <ion-col size=\"12\">\n      <!--CATEGORY CONTENT-->\n\n      <ion-slides #slides pager=\"false\">\n        <ion-slide *ngFor=\"let item of emojiCategories\">\n          <ion-row>\n            <ion-col size=\"1.5\" *ngFor=\"let childItem of item.emojis\" (click)=\"selectEmoji(childItem[0])\">\n              <p style=\"margin:1px;\">{{childItem[0]}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n      \n\n\n    </ion-col>\n  </ion-row>\n</ion-content>",
                    styles: [".categoryContainer\n  {\n      overflow: scroll;\n      white-space: nowrap;\n  }\n\n  .category\n  {\n      display: inline-block;\n      padding: 10px;\n      text-align: center;\n  }\n  \n  .selectedCategory\n  {\n      border-bottom: 2px solid var(--ion-color-primary);\n  }"]
                }] }
    ];
    /** @nocollapse */
    Ionic4EmojiPickerComponent.ctorParameters = function () { return [
        { type: ModalController }
    ]; };
    Ionic4EmojiPickerComponent.propDecorators = {
        slides: [{ type: ViewChild, args: ['slides', { static: false },] }],
        categoryContainer: [{ type: ViewChild, args: ['categoryDiv', { static: false },] }],
        isInModal: [{ type: Input, args: ['isInModal',] }],
        selectionEvent: [{ type: Output, args: ['onEmojiSelect',] }]
    };
    return Ionic4EmojiPickerComponent;
}());
export { Ionic4EmojiPickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWM0LWVtb2ppLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb25pYzQtZW1vamktcGlja2VyLyIsInNvdXJjZXMiOlsibGliL2lvbmljNC1lbW9qaS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RDtJQWlFSSxvQ0FBb0IsU0FBeUI7UUFBekIsY0FBUyxHQUFULFNBQVMsQ0FBZ0I7UUFQL0Msb0JBQWUsR0FBTyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBQyxNQUFNLENBQUM7UUFDckIscUJBQWdCLEdBQU8sRUFBRSxDQUFDO1FBQzFCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUVWLGNBQVMsR0FBQyxLQUFLLENBQUMsQ0FBQyxvRUFBb0U7O1FBQ2hGLG1CQUFjLEdBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLDBDQUEwQztJQUlwRyxDQUFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBRUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELG9EQUFlOzs7SUFBZjtRQUFBLGlCQVNDO1FBUEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7OztJQUVELHVEQUFrQjs7O0lBQWxCO1FBQUEsaUJBU0M7UUFQQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLFFBQVE7WUFFL0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixHQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRXpELENBQUM7Ozs7OztJQUVELG9EQUFlOzs7OztJQUFmLFVBQWdCLGlCQUFpQixFQUFDLGFBQWE7UUFFN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztRQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsZ0RBQVc7Ozs7SUFBWCxVQUFZLElBQUk7O1lBRVYsYUFBYSxHQUFDO1lBQ2hCLElBQUksRUFBQyxJQUFJO1NBQ1Y7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxJQUFHLElBQUksQ0FBQyxTQUFTLEVBQ2pCO1lBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyw2QkFBNkI7U0FDckU7SUFDSCxDQUFDOzs7O0lBQ0ssMkRBQXNCOzs7SUFBNUI7Ozs7OzRCQUdDLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSTs7Ozt3QkFBQyxVQUFBLEtBQUs7NEJBRXhDLEtBQUksQ0FBQyxtQkFBbUIsR0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Z0NBQ25DLFdBQVcsR0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzRCQUN6RSxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBQyxXQUFXLENBQUMsVUFBVSxHQUFDLEVBQUUsQ0FBQzt3QkFFM0UsQ0FBQyxFQUFDLEVBQUE7O3dCQVBMLFNBT0ssQ0FBQzs7Ozs7S0FFTjs7Z0JBaklKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFDLHM3QkErQkk7NkJBQ0osd1JBZ0JQO2lCQUNIOzs7O2dCQXJEbUIsZUFBZTs7O3lCQXlEaEMsU0FBUyxTQUFDLFFBQVEsRUFBQyxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUM7b0NBQ2pDLFNBQVMsU0FBQyxhQUFhLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDOzRCQU90QyxLQUFLLFNBQUMsV0FBVztpQ0FDakIsTUFBTSxTQUFDLGVBQWU7O0lBb0V6QixpQ0FBQztDQUFBLEFBcElELElBb0lDO1NBaEZZLDBCQUEwQjs7O0lBR3JDLDRDQUFxRDs7SUFDckQsdURBQXNFOztJQUV0RSxxREFBeUI7O0lBQ3pCLG1EQUFxQjs7SUFDckIsc0RBQTBCOztJQUMxQix5REFBOEI7O0lBRTlCLCtDQUFvQzs7SUFDcEMsb0RBQTJEOzs7OztJQUM3QywrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVNT0pJUyB9IGZyb20gJy4uL2RhdGEvZW1vamkuZGF0YSc7XG5pbXBvcnQgeyBJb25TbGlkZXMsIE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktcGlja2VyJyxcbiAgdGVtcGxhdGU6YDxpb24tY29udGVudD5cbiBcbiAgPGlvbi1yb3c+XG4gICAgPGlvbi1jb2wgc2l6ZT1cIjEyXCI+XG4gICAgICA8IS0tRU1PSkkgQ0FURUdPUklFUy0tPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlDb250YWluZXJcIiAjY2F0ZWdvcnlEaXY+XG4gICAgICAgIDxkaXYgIGNsYXNzPVwiY2F0ZWdvcnlcIiBbY2xhc3Muc2VsZWN0ZWRDYXRlZ29yeV09XCJjdXJyZW50Q2F0ZWdvcnlOYW1lPT1pdGVtLm5hbWVcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBlbW9qaUNhdGVnb3JpZXM7bGV0IGk9aW5kZXg7XCIgKGNsaWNrKT1cImNhdGVnb3J5Q2hhbmdlZChpdGVtLGkpXCI+XG4gICAgICAgICAgPHA+e3tpdGVtLmljb25bMF19fTwvcD5cbiAgICAgICAgICA8cD57e2l0ZW0ubmFtZX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9pb24tY29sPlxuICAgIDxpb24tY29sIHNpemU9XCIxMlwiPlxuICAgICAgPCEtLUNBVEVHT1JZIENPTlRFTlQtLT5cblxuICAgICAgPGlvbi1zbGlkZXMgI3NsaWRlcyBwYWdlcj1cImZhbHNlXCI+XG4gICAgICAgIDxpb24tc2xpZGUgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZW1vamlDYXRlZ29yaWVzXCI+XG4gICAgICAgICAgPGlvbi1yb3c+XG4gICAgICAgICAgICA8aW9uLWNvbCBzaXplPVwiMS41XCIgKm5nRm9yPVwibGV0IGNoaWxkSXRlbSBvZiBpdGVtLmVtb2ppc1wiIChjbGljayk9XCJzZWxlY3RFbW9qaShjaGlsZEl0ZW1bMF0pXCI+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPVwibWFyZ2luOjFweDtcIj57e2NoaWxkSXRlbVswXX19PC9wPlxuICAgICAgICAgICAgPC9pb24tY29sPlxuICAgICAgICAgIDwvaW9uLXJvdz5cbiAgICAgICAgPC9pb24tc2xpZGU+XG4gICAgICA8L2lvbi1zbGlkZXM+XG4gICAgICBcblxuXG4gICAgPC9pb24tY29sPlxuICA8L2lvbi1yb3c+XG48L2lvbi1jb250ZW50PmAsXG4gIHN0eWxlczogW2AuY2F0ZWdvcnlDb250YWluZXJcbiAge1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAuY2F0ZWdvcnlcbiAge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLnNlbGVjdGVkQ2F0ZWdvcnlcbiAge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBJb25pYzRFbW9qaVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBAVmlld0NoaWxkKCdzbGlkZXMnLHtzdGF0aWM6ZmFsc2V9KSBzbGlkZXM6SW9uU2xpZGVzO1xuICBAVmlld0NoaWxkKCdjYXRlZ29yeURpdicse3N0YXRpYzpmYWxzZX0pIGNhdGVnb3J5Q29udGFpbmVyOkVsZW1lbnRSZWY7XG4gIFxuICBlbW9qaUNhdGVnb3JpZXM6YW55W109W107XG4gIG1haW5FbW9qaURhdGE9RU1PSklTO1xuICBjdXJyZW50RW1vamlMaXN0OmFueVtdPVtdO1xuICBjdXJyZW50Q2F0ZWdvcnlOYW1lOnN0cmluZz0nJztcbiAgXG4gIEBJbnB1dCgnaXNJbk1vZGFsJykgaXNJbk1vZGFsPWZhbHNlOyAvL1RvIGRldGVybWluZSB3aGV0aGVyIHRoaXMgY29tcG9uZXQgaXMgY3JlYXRlZCB1c2luZyBhIG1vZGFsIG9yIG5vdFxuICBAT3V0cHV0KCdvbkVtb2ppU2VsZWN0Jykgc2VsZWN0aW9uRXZlbnQ9bmV3IEV2ZW50RW1pdHRlcigpOyAvL1RPIGVtbWl0IGV2ZW50IHdoZW4gYW4gZW1vamkgaXMgc2VsZWN0ZWRcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsQ3RybDpNb2RhbENvbnRyb2xsZXIpIFxuICAgIHtcbiAgXG4gICAgfVxuICBcbiAgICBuZ09uSW5pdCgpIFxuICAgIHtcbiAgICAgIHRoaXMuZ2V0RW1vamlDYXRlZ29yaWVzKCk7XG4gICAgfVxuICBcbiAgICBuZ0FmdGVyVmlld0luaXQoKVxuICAgIHtcbiAgICAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQnKTtcbiAgICAgIHRoaXMuc2V0QWN0aXZlQ2F0ZWdvcnlTbGlkZSgpO1xuICAgICAgdGhpcy5zbGlkZXMuaW9uU2xpZGVEaWRDaGFuZ2Uuc3Vic2NyaWJlKGRhdGE9PlxuICAgICAgICB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1NsaWRlIGNoYW5nZWQgZGF0YScsZGF0YSk7XG4gICAgICAgICAgdGhpcy5zZXRBY3RpdmVDYXRlZ29yeVNsaWRlKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICBcbiAgICBnZXRFbW9qaUNhdGVnb3JpZXMoKVxuICAgIHtcbiAgICAgIHRoaXMubWFpbkVtb2ppRGF0YS5mb3JFYWNoKGNhdGVnb3J5PT5cbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuZW1vamlDYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2F0ZWdvcnlOYW1lPXRoaXMuZW1vamlDYXRlZ29yaWVzWzBdLm5hbWU7XG4gICAgICAgIHRoaXMuY3VycmVudEVtb2ppTGlzdD10aGlzLmVtb2ppQ2F0ZWdvcmllc1swXS5lbW9qaXM7XG4gICAgICBcbiAgICB9XG4gIFxuICAgIGNhdGVnb3J5Q2hhbmdlZChzZWxlY3RlZEVtb2ppTGlzdCxjYXRlZ29yeUluZGV4KVxuICAgIHtcbiAgICAgIHRoaXMuY3VycmVudEVtb2ppTGlzdD1zZWxlY3RlZEVtb2ppTGlzdC5lbW9qaXM7XG4gICAgICB0aGlzLmN1cnJlbnRDYXRlZ29yeU5hbWU9c2VsZWN0ZWRFbW9qaUxpc3QubmFtZTtcbiAgICAgIHRoaXMuc2xpZGVzLnNsaWRlVG8oY2F0ZWdvcnlJbmRleCk7XG4gICAgICB0aGlzLnNldEFjdGl2ZUNhdGVnb3J5U2xpZGUoKTtcbiAgICB9XG4gIFxuICAgIHNlbGVjdEVtb2ppKGNvZGUpXG4gICAge1xuICAgICAgbGV0IHNlbGVjdGlvbkRhdGE9e1xuICAgICAgICBkYXRhOmNvZGVcbiAgICAgIH07XG4gIFxuICAgICAgdGhpcy5zZWxlY3Rpb25FdmVudC5lbWl0KHNlbGVjdGlvbkRhdGEpO1xuICAgICAgaWYodGhpcy5pc0luTW9kYWwpXG4gICAgICB7XG4gICAgICAgIHRoaXMubW9kYWxDdHJsLmRpc21pc3Moc2VsZWN0aW9uRGF0YSk7IC8vRGlzbWlzcyB0aGUgbW9kYWwgd2l0aCBkYXRhXG4gICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHNldEFjdGl2ZUNhdGVnb3J5U2xpZGUoKVxuICAgIHtcbiAgXG4gICAgIGF3YWl0IHRoaXMuc2xpZGVzLmdldEFjdGl2ZUluZGV4KCkudGhlbihpbmRleD0+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRDYXRlZ29yeU5hbWU9dGhpcy5lbW9qaUNhdGVnb3JpZXNbaW5kZXhdLm5hbWU7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50Q2F0ZWdvcnlOYW1lKTtcbiAgICAgICAgIGxldCBjYXRlZ29yeURpdj10aGlzLmNhdGVnb3J5Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4uaXRlbShpbmRleCk7IC8vR2UgaXRlbSBhdCB0aGlzIGluZGV4XG4gICAgICAgICB0aGlzLmNhdGVnb3J5Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdD1jYXRlZ29yeURpdi5vZmZzZXRMZWZ0LTIwO1xuICBcbiAgICAgICAgfSk7XG4gICAgXG4gICAgfVxuICBcblxufVxuIl19