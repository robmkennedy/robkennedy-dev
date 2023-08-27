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
                type: 'string'
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