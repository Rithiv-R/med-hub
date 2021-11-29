import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Doctor } from '../tsdoctorsmodel';
import { Hospital } from '../tsmodel';
import { patient_exp } from '../tspatientexpmodel';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  selected!:Doctor;
  value!:Boolean;
  formholder!:String;
  formmessage!:String;
  formemail!:String;
  selectedind!:number;
  doctorList! : Doctor[]
  urlSafe!: SafeResourceUrl;
  val!:String;

  constructor(private _sanitizer :DomSanitizer) { 
    this.doctorList = [
      {
        doc_name:"Dr Jai Prasad",
        doc_qualification:"MBBS; MNAMS; Dortho; DNB; FAO",
        doc_experience:'22 years +',
        doc_photo:'https://www.himalayanbuzz.com/wp-content/uploads/2020/05/Manu_Bora_Doctor-768x768.jpg',
        doc_overview:'Consultant Orthopaedic Surgeon Fellowship Germany, France, USA, Working in Apollo Hospitals since last Assignment',
        doc_patient:[{
          name:'Ram Kumar',
          details:'Makes Proper and Good Consulatation',
          photo:'https://image.shutterstock.com/image-photo/shoulder-shot-doctor-explaining-patient-600w-1878587941.jpg'
        },
        {
          name:'Ram Kumar',
          details:'Makes Proper and Good Consulatation',
          photo:'https://image.shutterstock.com/image-photo/shoulder-shot-doctor-explaining-patient-600w-1878587941.jpg'
        },
        {
          name:'Ram Kumar',
          details:'Makes Proper and Good Consulatation',
          photo:'https://image.shutterstock.com/image-photo/shoulder-shot-doctor-explaining-patient-600w-1878587941.jpg'
        },],
        hosp_name:"Apollo Hospital, Chennai",
        hosp_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5674466850287!2d80.24934881464623!3d13.063182390795836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666accdfbb59%3A0x2e0d1b10a5e06d2f!2sApollo%20Hospital%20Chennai!5e0!3m2!1sen!2sin!4v1637238422897!5m2!1sen!2sin",
        hosp_mail: 'info@apollohospitals.com',
        hosp_phone:'04428293333',
        hosp_address:"Apollo Hospital Chennai, Greams Lane, 21, Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5674466850287!2d80.24934881464623!3d13.063182390795836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666accdfbb59%3A0x2e0d1b10a5e06d2f!2sApollo%20Hospital%20Chennai!5e0!3m2!1sen!2sin!4v1637238422897!5m2!1sen!2sin",
      },
      {
        doc_name:"Dr Jai Prasad",
        doc_qualification:"MBBS; MNAMS; Dortho; DNB; FAO",
        doc_experience:'22 years +',
        doc_photo:'https://www.himalayanbuzz.com/wp-content/uploads/2020/05/Manu_Bora_Doctor-768x768.jpg',
        doc_overview:'Consultant Orthopaedic Surgeon Fellowship Germany, France, USA, Working in Apollo Hospitals since last Assignment',
        doc_patient:[{
          name:'Ram Kumar',
          details:'Makes Proper and Good Consulatation',
          photo:'https://image.shutterstock.com/image-photo/shoulder-shot-doctor-explaining-patient-600w-1878587941.jpg'
        },
        {
          name:'Ram Kumar',
          details:'Makes Proper and Good Consulatation',
          photo:'https://image.shutterstock.com/image-photo/shoulder-shot-doctor-explaining-patient-600w-1878587941.jpg'
        },
        {
          name:'Ram Kumar',
          details:'Makes Proper and Good Consulatation',
          photo:'https://image.shutterstock.com/image-photo/shoulder-shot-doctor-explaining-patient-600w-1878587941.jpg'
        },],
        hosp_name:"Apollo Hospital, Chennai",
        hosp_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5674466850287!2d80.24934881464623!3d13.063182390795836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666accdfbb59%3A0x2e0d1b10a5e06d2f!2sApollo%20Hospital%20Chennai!5e0!3m2!1sen!2sin!4v1637238422897!5m2!1sen!2sin",
        hosp_mail: 'info@apollohospitals.com',
        hosp_phone:'04428293333',
        hosp_address:"Apollo Hospital Chennai, Greams Lane, 21, Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5674466850287!2d80.24934881464623!3d13.063182390795836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666accdfbb59%3A0x2e0d1b10a5e06d2f!2sApollo%20Hospital%20Chennai!5e0!3m2!1sen!2sin!4v1637238422897!5m2!1sen!2sin",
      },
      {
        doc_name:"Dr Jai Prasad",
        doc_qualification:"MBBS; MNAMS; Dortho; DNB; FAO",
        doc_experience:'22 years +',
        doc_photo:'https://www.himalayanbuzz.com/wp-content/uploads/2020/05/Manu_Bora_Doctor-768x768.jpg',
        doc_overview:'Consultant Orthopaedic Surgeon Fellowship Germany, France, USA, Working in Apollo Hospitals since last Assignment',
        doc_patient:[{
          name:'Ram Kumar',
          details:'Makes Proper and Good Consulatation',
          photo:'https://image.shutterstock.com/image-photo/shoulder-shot-doctor-explaining-patient-600w-1878587941.jpg'
        },
        {
          name:'Ram Kumar',
          details:'Makes Proper and Good Consulatation',
          photo:'https://image.shutterstock.com/image-photo/shoulder-shot-doctor-explaining-patient-600w-1878587941.jpg'
        },
        {
          name:'Ram Kumar',
          details:'Makes Proper and Good Consulatation',
          photo:'https://image.shutterstock.com/image-photo/shoulder-shot-doctor-explaining-patient-600w-1878587941.jpg'
        },],
        hosp_address:"Apollo Hospital Chennai, Greams Lane, 21, Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006",
        hosp_name:"Apollo Hospital, Chennai",
        hosp_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5674466850287!2d80.24934881464623!3d13.063182390795836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666accdfbb59%3A0x2e0d1b10a5e06d2f!2sApollo%20Hospital%20Chennai!5e0!3m2!1sen!2sin!4v1637238422897!5m2!1sen!2sin",
        hosp_mail: 'info@apollohospitals.com',
        hosp_phone:'04428293333',
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5674466850287!2d80.24934881464623!3d13.063182390795836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666accdfbb59%3A0x2e0d1b10a5e06d2f!2sApollo%20Hospital%20Chennai!5e0!3m2!1sen!2sin!4v1637238422897!5m2!1sen!2sin",
      },
     
    ]
  }

  ngOnInit(): void {
  }

  onclick(val:Doctor,ind:number)
  {
    this.value = true;
    this.selected=val;
    this.selectedind = ind;
    this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl(val.hosp_location);
  }
  
  onsubmit()
  {
    alert('YOUR SUGGESTION HAS BEEN RECODED '+this.formholder);
  }


  GetData()
  {  
    alert('REQUEST SENT SUCCESSFULLY');
  }  
  
}
