export default class Qualification {
    #title: string;
    #graduationDate: string;
    #institutionName: string;

    static QUALIFICATION_ERROR = 'QUALIFICATION VALUE NOT FOUND';

    constructor(jsonResponse: Qualification) {
        const { title, graduationDate, institutionName } = jsonResponse;

        this.#title = title || Qualification.QUALIFICATION_ERROR;
        this.#graduationDate = graduationDate || Qualification.QUALIFICATION_ERROR;
        this.#institutionName = institutionName || Qualification.QUALIFICATION_ERROR;
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
}