export default class Note {
    #content: string;

    static NOTE_ERROR = 'NOTE VALUE NOT FOUND';

    constructor(jsonResponse: Note) {
        const { content } = jsonResponse;

        this.#content = content || Note.NOTE_ERROR;
    }

    get content() {
        return this.#content;
    }
};