export class FindDoctorPage { 

    async searchDoctorInput() {
        return $(`[class="react-autosuggest__input"]`);
    }

    async searchDoctorButton() {
        return $(`[class="search-button-container"]`);
    }
    
}