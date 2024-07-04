import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SearchResultsComponent } from "./search-results/search-results.component";

@NgModule({
    imports: [FormsModule, BrowserModule],
    exports: [SearchResultsComponent],
    declarations: [SearchResultsComponent],
    providers: [],
})

export class SearchResultsComponentModule {}