import { OHIO_HEALTH_FIND_DOCTOR_URL } from "./meta-data/page-config-urls";
import { findDoctorPageService } from "./services/find-doctor.page.service";
import { homePageService } from "./services/home.page.service";

describe('find-a-doctor test case', async () => {
    it('test step #1 Browser Function', async () => {
        await homePageService.launchPage(OHIO_HEALTH_FIND_DOCTOR_URL);
    });

    it('test step #2 Search for specialties', async () => {
        await findDoctorPageService.searchForDoctor("Shane D Smith");

    });

    it('test step #3 Verfiy Correct specialties specification', async () => {
       
        findDoctorPageService.verfiydoctorSpecialties();

    })
    it('test step #4 browser Close', async () => {
        
        console.log("find-a-doctor test case is executed"); 
 
     })
})

