import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import schemaSkills from 'utils/validation/schemaSkills';
import schemaProfile from 'utils/validation/schemaProfile';
import schemaEmployers from 'utils/validation/schemaEmployers';
import schemaQualifications from 'utils/validation/schemaQualifications';


const jsonValidator = new Ajv();
addFormats(jsonValidator);

jsonValidator.addSchema(schemaSkills, 'skills');
jsonValidator.addSchema(schemaProfile, 'profile');
jsonValidator.addSchema(schemaEmployers, 'employer');
jsonValidator.addSchema(schemaQualifications, 'qualifications');


export default jsonValidator;
