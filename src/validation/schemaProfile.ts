import { JSONSchemaType } from 'ajv';
import Profile from 'model/Profile';

const schemaProfile: JSONSchemaType<Profile> = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        photo: {
            type: 'string'
        },
        gitHub: {
            type: 'string'
        },
        linkedIn: {
            type: 'string'
        },
        summary: {
            type: 'array',
            minItems: 1,
            items: {
                type: 'object',
                properties: {
                    icon: { type: 'string' },
                    text: { type: 'string' }
                },
                required: [
                    'icon',
                    'text'
                ]
            }
        }
    },
    required: [
        'name',
        'photo',
        'gitHub',
        'linkedIn',
        'summary'
    ]
};

export default schemaProfile;