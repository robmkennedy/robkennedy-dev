export default class Qualification {
    #title: string;
    #graduationDate: string;
    #institutionName: string;
    #logo: string;

    static QUALIFICATION_ERROR = 'QUALIFICATION VALUE NOT FOUND';

    constructor(jsonResponse: string) {
        const { title, graduationDate, institutionName, logo } = JSON.parse(jsonResponse);

        this.#title = title || Qualification.QUALIFICATION_ERROR;
        this.#graduationDate = graduationDate || Qualification.QUALIFICATION_ERROR;
        this.#institutionName = institutionName || Qualification.QUALIFICATION_ERROR;
        this.#logo = logo || Qualification.QUALIFICATION_ERROR;
    }

    get title() {
        return this.#title;
    }

    get graduationDate() {
        return this.#graduationDate;
    }

    get institutionName() {
        return this.#institutionName;
    }

    get logo() {
        return this.#logo;
    }
}