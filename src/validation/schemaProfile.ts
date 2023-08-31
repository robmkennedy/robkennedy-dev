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
        'linkedIn',
        'summary'
    ]
};

export default schemaProfile;