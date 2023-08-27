import { JSONSchemaType } from 'ajv';
import Qualification from 'model/Qualification';

const schemaQualifications: JSONSchemaType<Qualification[]> = {
    type: 'array',
    minItems: 1,
    items: {
        type: 'object',
        properties: {
            title: {
                type: 'string'
            },
            graduationDate: {
                type: 'string'
            },
            institutionName: {
                type: 'string'
            },
            logo: {
                type: 'string'
            }
        },
        required: [
            'title',
            'graduationDate',
            'institutionName',
            'logo'
        ]
    }
};

export default schemaQualifications;