import { patient_exp } from "./tspatientexpmodel";

export class Doctor{
    doc_name!:String;
    doc_photo!:String;
    doc_patient!:patient_exp[];
    doc_overview!:String;
    hosp_name!:String;
    hosp_location!:string;
    hosp_address!:String;
    hosp_phone!:String;
    hosp_mail!:String;
    doc_qualification!:String;
    doc_experience!:String;
    tag!:string;
}