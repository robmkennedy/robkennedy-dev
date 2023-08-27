import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import schemaSkills from 'validation/schemaSkills';
import schemaProfile from 'validation/schemaProfile';
import schemaEmployers from 'validation/schemaEmployers';
import schemaQualifications from 'validation/schemaQualifications';


const jsonValidator = new Ajv();
addFormats(jsonValidator);

jsonValidator.addSchema(schemaSkills, 'skills');
jsonValidator.addSchema(schemaProfile, 'profile');
jsonValidator.addSchema(schemaEmployers, 'employer');
jsonValidator.addSchema(schemaQualifications, 'qualifications');


export default jsonValidator;
