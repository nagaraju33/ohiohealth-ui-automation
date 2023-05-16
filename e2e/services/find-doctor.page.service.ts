import { FindDoctorPage } from "../page-objects/find-doctor.page";

export class FindDoctorPageService extends FindDoctorPage { 

    async searchForDoctor(doctorName: string) {
        await (await this.searchDoctorInput()).setValue(doctorName);
        await browser.pause(5000);
        await (await this.searchDoctorButton()).click();
    }

    async verfiydoctorSpecialties() {
        await browser.pause(5000);
       const speciality = await $('.specialties');
       await expect(speciality).toHaveText('Radiology')
       console.log(await speciality.getText()); 
    }
    
    
}

export const findDoctorPageService = new FindDoctorPageService();