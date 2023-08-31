export default class Skills {
    #designSkills: string[];
    #developmentSkills: string[];
    #generalSkills: string[];

    static SKILLS_ERROR = 'SKILLS VALUE NOT FOUND';

    constructor(jsonResponse: Skills) {
        const { designSkills, developmentSkills, generalSkills } = jsonResponse;

        this.#designSkills = designSkills || Skills.SKILLS_ERROR;
        this.#developmentSkills = developmentSkills || Skills.SKILLS_ERROR;
        this.#generalSkills = generalSkills || Skills.SKILLS_ERROR;
    }

    get designSkills() {
        return this.#designSkills;
    }

    get developmentSkills() {
        return this.#developmentSkills;
    }

    get generalSkills() {
        return this.#generalSkills;
    }
}