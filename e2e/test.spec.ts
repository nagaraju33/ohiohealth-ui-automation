describe('test case #1', async () => {
    it('test step #1', async () => {
        await browser.url('https://www.ohiohealth.com/find-a-doctor');
        await browser.pause(5000);
        await (await $(`[class="react-autosuggest__input"]`)).setValue("Shane D Smith")
        await browser.pause(5000);
        await (await $(`[class="btn apply-button fad-search-button desktop"]`)).click
        await browser.pause(5000);
        console.log("Test case #1 is executed");
    })
})