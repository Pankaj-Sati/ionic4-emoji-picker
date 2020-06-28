import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';
export declare class Ionic4EmojiPickerComponent implements OnInit {
    private modalCtrl;
    slides: IonSlides;
    categoryContainer: ElementRef;
    emojiCategories: any[];
    mainEmojiData: {
        emojis: string[][];
        name: string;
        icon: string[];
    }[];
    currentEmojiList: any[];
    currentCategoryName: string;
    isInModal: boolean;
    selectionEvent: EventEmitter<any>;
    constructor(modalCtrl: ModalController);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getEmojiCategories(): void;
    categoryChanged(selectedEmojiList: any, categoryIndex: any): void;
    selectEmoji(code: any): void;
    setActiveCategorySlide(): Promise<void>;
}
