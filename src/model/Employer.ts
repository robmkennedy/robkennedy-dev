export default class Employer {
    #name: string;
    #role: string;
    #startDate: string;
    #endDate: string;
    #logo: string;
    #tasks: string[];

    static EMPLOYER_ERROR = 'EMPLOYER VALUE NOT FOUND';

    constructor(jsonResponse: Employer) {
        const { name, role, startDate, endDate, logo, tasks } = jsonResponse;

        this.#name = name || Employer.EMPLOYER_ERROR;
        this.#role = role || Employer.EMPLOYER_ERROR;
        this.#startDate = startDate || Employer.EMPLOYER_ERROR;
        this.#endDate = endDate || Employer.EMPLOYER_ERROR;
        this.#logo = logo || Employer.EMPLOYER_ERROR;
        this.#tasks = tasks || [Employer.EMPLOYER_ERROR];
    }

    get name() {
        return this.#name;
    }

    get role() {
        return this.#role;
    }

    get startDate() {
        return this.#startDate;
    }

    get endDate() {
        return this.#endDate;
    }

    get logo() {
        return this.#logo;
    }

    get tasks() {
        return this.#tasks;
    }
}