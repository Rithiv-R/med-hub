import { Component, NgModule, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import{Hospital} from '../tsmodel';

@Component({
  selector: 'app-hospial-list',
  templateUrl: './hospial-list.component.html',
  styleUrls: ['./hospial-list.component.css']
})

export class HospialListComponent implements OnInit {
  selected!:Hospital;
  value!:Boolean;
  formholder!:String;
  formmessage!:String;
  formemail!:String;
  selectedind!:number;
  listHospital! : Hospital[]
  urlSafe!: SafeResourceUrl;
  val!:String;
  constructor(private _sanitizer :DomSanitizer) { 
    this.listHospital = [
      {
        hosp_address:"Apollo Hospital Chennai, Greams Lane, 21, Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006",
        hosp_name:"Apollo Hospital, Chennai",
        hosp_photo:"https://s.ndtvimg.com//images/entities/300/apollo-hospital-chennai_636408444078079763_108400.jpg?q=50",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5674466850287!2d80.24934881464623!3d13.063182390795836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666accdfbb59%3A0x2e0d1b10a5e06d2f!2sApollo%20Hospital%20Chennai!5e0!3m2!1sen!2sin!4v1637238422897!5m2!1sen!2sin",
        hosp_details:'Apollo Hospitals, Greams Road Chennai, the flagship hospital of the Apollo Group was established in 1983. Revolutionizing the healthcare sector, the hospital has over 60 departments spearheaded by internationally trained doctors, state-of-the-art facilities for various health disorders and cutting-edge medical procedures, that makes it the most preferred destinations for patients from across India and around the globe.',
        hosp_mail: 'info@apollohospitals.com',
        hosp_phone:'04428293333',
      },
      {
        hosp_address:"SIMS Hospital, Metro Station, No.1, Jawaharlal Nehru Rd, next to Vadapalani, Landmark:, Vadapalani, Chennai, Tamil Nadu 600026",
        hosp_name:"SIMS Hospital",
        hosp_photo:"https://avocure-uploads.s3.amazonaws.com/uploads/clinic/cover_pic_url/45/sims-hospital-vadapalani-chennai-dermatologists-15nsg07.jpg",
        tag:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996064.6051279396!2d79.12577510682311!3d12.786471459352876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266ea2747db13%3A0x2ffbe4fed8d74bd2!2sSIMS%20Hospital!5e0!3m2!1sen!2sin!4v1638028782875!5m2!1sen!2sin',
        hosp_details:"SIMS Hospital is a Multi Speciality Hospital in Chennai. As a new-age healthcare provider, SIMS Hospital will continue making a difference in everyone's life and will take the spirit of healthcare excellence well beyond business metrics.",
        hosp_mail:'enquiry@simshospitals.com',
        hosp_phone:"04420002001",
      },
      {
        hosp_address:"C.S.I. Kalyani Multispeciality Hospital, 15, Dr Radha Krishnan Salai, Loganathan Colony, Mylapore, Chennai, Tamil Nadu 600004",
        hosp_name:"C.S.I. Kalyani Multispeciality Hospital",
        hosp_photo:"https://content3.jdmagicbox.com/comp/chennai/14/044p3004014/catalogue/csi-kalyani-multi-speciality-hospital-mylapore-chennai-multispeciality-hospitals-qwiyz.jpg?clr=4d1a1a",
        tag:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995170.80887362!2d78.02870894814936!3d12.395114677555958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52662942ee2ffb%3A0x85868f6b2e4f750f!2sC.S.I.%20Kalyani%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1638028846542!5m2!1sen!2sin',
        hosp_details:'Opened by Lady White, the Methodist Missionary on 1st March 1909, as a small hospital for women and children with 24 beds and a small group of dedicated staffs, the hospital has now grown as a full fledged multispeciality hospital with 220 beds providing all major speciality services.',
        hosp_mail:"csikalyanihospital@rocketmail.com",
        hosp_phone:"04428476433",
      },
      {
        hosp_address:"MGM Healthcare, No 54, Old, 72, Nelson Manickam Rd, Aminjikarai, Chennai, Tamil Nadu 600029",
        hosp_name:"MGM Healthcare",
        hosp_photo:"https://www.joonsquare.com/usermanage/image/business/mgm-healthcare-chennai-9441/mgm-healthcare-chennai-mgm-1.jpg",
        tag:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995170.80887362!2d78.01823459814933!3d12.395114677555956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ae643b0ee7%3A0x9405bf4578941d04!2sMGM%20Healthcare!5e0!3m2!1sen!2sin!4v1638028925009!5m2!1sen!2sin',
        hosp_details:"MGM Healthcare is a 400-bedded super specialty hospital in Chennai. The hospital has added many feathers to its cap: 102 heart transplants in a year (3rd highest in the world) 110 Pediatric Heart Transplants (Highest in Asia) India's highest number of transplants i.e., more than 365 heart-lung transplant surgeries",
        hosp_mail:"info@mgmhealthcare.in",
        hosp_phone:"04445242407",
      },
      {
        hosp_address:"Fortis Malar Hospital, Adyar, Chennai, No. 52, 1st Main Rd, Gandhi Nagar, Adyar, Chennai, Tamil Nadu 600020",
        hosp_name:"Fortis Malar Hospital",
        hosp_photo:"https://avocure-uploads.s3.amazonaws.com/uploads/clinic/cover_pic_url/44/0.05775000_1461667459_malar.png",
        tag:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995170.80887362!2d78.02707419814934!3d12.395114677555956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ebca1ef1c9%3A0x65f09e8a6db91462!2sFortis%20Malar%20Hospital%2C%20Adyar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1638028704164!5m2!1sen!2sin",
        hosp_details:'Fortis Malar Hospital has a vast pool of talented and experienced team of doctors, who are further supported by a team of highly qualified, experienced & dedicated support staff & cutting edge technology. More than 160 consultants and 650 employees work together to manage over 11000 inpatients per year. The hospital has an infrastructure comprising of around 180 beds including about 60 ICU beds, 4 Operation Theatres, state-of-the-art digital flat panel Cath lab, an ultra-modern dialysis unit besides a host of other world-class facilities.',
        hosp_mail:'contactus.malar@fortishealthcare.com',
        hosp_phone:'09962599933',
      },
    ]
  }

  ngOnInit(): void {
  }

  onclick(val:Hospital,ind:number)
  {
    this.value = true;
    this.selected=val;
    this.selectedind = ind;
    this.urlSafe = this._sanitizer.bypassSecurityTrustResourceUrl(this.selected.tag)
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
