import { NgModule } from "@angular/core";
import { SearchItemComponent } from "./search-item/search-item.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [FormsModule, BrowserModule],
    exports: [SearchItemComponent],
    declarations: [SearchItemComponent],
    providers: [],
})

export class SearchItemModule {}