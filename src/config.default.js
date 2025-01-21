import axios from 'axios';
import qs from 'qs';


export default {
    server: {
        type: "R4", // "DSTU-2" or "STU-3" or "R4"

        url: "https://qed-fhir-test01.azurehealthcareapis.com",

        conditions: {},

        tags: []
    },

    hideTagSelector: false,

    patientsPerPage: 25,

    // AJAX requests timeout
    timeout: 20000,

    // Only the selected patients are rendered. Should be false or the
    // preselected patient IDs should be passed to the window. Otherwise
    // It will result in rendering no patients at all.
    renderSelectedOnly: false,

    // If enabled is true (then url and param MUST be set) then clicking on the
    // patient-related resources in detail view will open their source in that
    // external viewer. Otherwise they will just be opened in new browser tab.
    fhirViewer: {
        enabled: true,
        url    : "http://docs.smarthealthit.org/fhir-viewer/index.html",
        param  : "url"
    },

    // What to send when the OK dialog button is clicked. Possible values:
    // "id-list"  - comma-separated list of patient IDs (default)
    // "id-array" - array of patient IDs
    // "patients" - array of patient JSON objects
    outputMode: "id-list",

    // "automatic" -> onChange plus defer in some cases
    // "manual" -> render a submit button
    submitStrategy: "manual"   ,

}

export async function getBearerToken(config) {

    const tenantId =
    const tokenUrl = 'https://login.microsoftonline.com/' + tenantId + '/oauth2/token';
    console.log("URL:",tokenUrl)
    const requestBody = qs.stringify({
        grant_type: 'client_credentials',
        client_id:
        client_secret:
        resource: 'https://qed-fhir-test01.azurehealthcareapis.com'

    });
    const response = await axios.post(tokenUrl, requestBody, {
        headers: {'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/fhir+json'
        }
    });
    return response.data.access_token;
}
