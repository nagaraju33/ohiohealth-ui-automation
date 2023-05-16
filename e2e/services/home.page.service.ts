export class HomePageService {

    async launchPage(pageUrl: string) {
        await browser.url(pageUrl);
        await browser.pause(5000);
        await browser.maximizeWindow();
    }

}
export const homePageService = new HomePageService