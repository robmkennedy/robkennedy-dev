import { JSONSchemaType } from 'ajv';
import Note from 'model/Note';

const schemaNotes: JSONSchemaType<Note[]> = {
    type: 'array',
    minItems: 1,
    items: {
        type: 'object',
        properties: {
            question: {
                type: 'string'
            },
            answers: {
                type: 'array',
                minItems: 1,
                items: {
                    type: 'string'
                }
            }
        },
        required: [
            'question',
            'answers'
        ]
    }
};

export default schemaNotes;