export default class Profile {
    #name: string;
    #title: string;
    #photo: string;
    #gitHub: string;
    #linkedIn: string;
    #summary: { icon: string, text: string }[];

    static PROFILE_ERROR = 'PROFILE VALUE NOT FOUND';

    constructor(jsonResponse: Profile) {
        const { name, title, photo, gitHub, linkedIn, summary } = jsonResponse;

        this.#name = name || Profile.PROFILE_ERROR;
        this.#title = title || Profile.PROFILE_ERROR;
        this.#photo = photo || Profile.PROFILE_ERROR;
        this.#gitHub = gitHub || Profile.PROFILE_ERROR;
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

    get gitHub() {
        return this.#gitHub;
    }

    get linkedIn() {
        return this.#linkedIn;
    }

    get summary() {
        return this.#summary;
    }
}