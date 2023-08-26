export default class Profile {
    #name: string;
    #title: string;
    #photo: string;
    #linkedIn: string;
    #summary: string[];

    static PROFILE_ERROR = 'VALUE NOT FOUND';

    constructor(jsonResponse: string) {
        const { name, title, photo, linkedIn, summary } = JSON.parse(jsonResponse);

        this.#name = name || Profile.PROFILE_ERROR;
        this.#title = title || Profile.PROFILE_ERROR;
        this.#photo = photo || Profile.PROFILE_ERROR;
        this.#linkedIn = linkedIn || Profile.PROFILE_ERROR;
        this.#summary = summary || [Profile.PROFILE_ERROR];
    }

    get name() {
        return this.#name;
    }

    get title() {
        return this.#title;
    }

    get photo() {
        return this.#photo;
    }

    get linkedIn() {
        return this.#linkedIn;
    }

    get summary() {
        return this.#summary;
    }
}