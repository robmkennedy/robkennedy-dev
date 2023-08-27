import { JSONSchemaType } from 'ajv';
import Employer from 'model/Employer';

export const schemaEmployers: JSONSchemaType<Employer[]> = {
    type: 'array',
    minItems: 1,
    items: {
        type: 'object',
        properties: {
            name: {
                type: 'string'
            },
            role: {
                type: 'string'
            },
            startDate: {
                type: 'string'
            },
            endDate: {
                type: 'string'
            },
            logo: {
                type: 'string'
            },
            tasks: {
                type: 'array',
                minItems: 1,
                items: {
                    type: 'string'
                }
            }
        },
        required: [
            'name',
            'role',
            'startDate',
            'endDate',
            'logo',
            'tasks'
        ]
    }
};

export default schemaEmployers;