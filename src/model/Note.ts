export default class Note {
    #question: string;
    #answers: string[];

    static NOTE_ERROR = 'NOTE VALUE NOT FOUND';

    constructor(jsonResponse: Note) {
        const { question, answers } = jsonResponse;

        this.#question = question || Note.NOTE_ERROR;
        this.#answers = answers || [Note.NOTE_ERROR];
    }

    get question() {
        return this.#question;
    }

    get answers() {
        return this.#answers;
    }
};