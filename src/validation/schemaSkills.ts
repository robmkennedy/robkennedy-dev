import { JSONSchemaType } from 'ajv';
import Skills from 'model/Skills';

const schemaSkills: JSONSchemaType<Skills> = {
    type: 'object',
    properties: {
        designSkills: {
            type: 'array',
            minItems: 1,
            items: {
                type: 'string'
            }
        },
        developmentSkills: {
            type: 'array',
            minItems: 1,
            items: {
                type: 'string'
            }
        },
        generalSkills: {
            type: 'array',
            minItems: 1,
            items: {
                type: 'string'
            }
        }
    },
    required: [
        'designSkills',
        'developmentSkills',
        'generalSkills'
    ]
};

export default schemaSkills;