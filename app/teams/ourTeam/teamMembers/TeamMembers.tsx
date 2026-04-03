import PlaceHolder from './placeholder.png'
import Ubhay from './photos/Ubhay.jpg'
import Bilal from './photos/Bilal.jpg'
import Daniel from './photos/Daniel.jpg'
import Blessing from './photos/Blessing.jpg'
import Estella from './photos/Estella.jpg'
import James from './photos/James.jpg'
import Lorenzo from './photos/Lorenzo.jpg'
import Manuela from './photos/Manuela.jpg'
import Raidah from './photos/Raidah.jpg'
import Tamjeed from './photos/Tamjeed.jpg'

export const teamMembers = [
  //Team Leads
  {Name:"Ubhay Ahmed", role:"Head of Electrical Systems",
    Image:Ubhay,
    tag:["TP","TL","EV"],
    desc:""
  },
  {Name:"Hamza Waqas", role:"Head of Mechanical Systems",
    Image:PlaceHolder,
    tag:["TL","ME"],
    desc:""
  },
  {Name:"Daniel Ronnau-Bradbeer", role:"Chassis Team Lead",
    Image:Daniel,
    tag:["TL","ME"],
    desc:""
  },
  {Name:"Muhammad Bilal", role:"Powertrain Team Lead",
    Image:Bilal,
    tag:["TL","ME"],
    desc:""
  },
  {Name:"Lorenzo Donati", role:"SSB Team Lead", 
    Image:Lorenzo,
    tag:["TL","ME"],
    desc:""
  },
  { Name: "Blessing Emmanuel", role:"Head Of Software",
    Role: "", 
    Image:Blessing ,
    tag:["TL","SW"],
    desc:""
  },
  {Name:"Liam Christian", role:"Firmware Team Lead",
    Image:PlaceHolder,
    tag:["TL","SW"],
    desc:""
  },
  {Name:"Zoya Fahd", role:"Data Aquisition Team Lead",
    Image:PlaceHolder,
    tag:["TL","SW"],
    desc:""
  },
  {Name:"Estella Threadwell", role:"Head Of Opperations",
    Image:Estella,
    tag:["TL","OP"],
    desc:""
  },
  {Name:"Raidah Khan", role:"Administrative Coordinator",
    Image:Raidah,
    tag:["TL","OP"],
    desc:""
  }
  ,{Name:"Manuela Blazquez Barrero", role:"Media & Marketing Team Lead",
    Image:Manuela,
    tag:["TL","OP"],
    desc:""
  },

  //other
  { Name: "Calum Breen-Chapman", role:"Software",
    Image:PlaceHolder ,
    tag:["SW"],
    desc:""
  },
];

// to add
//Technical Advisors: 
//Technical Advisor: James Cahill
//Technical Advisor: Zakariyya Chawdhury

export const departments=[
  {id:"TL", name:"Team Leads"},
  {id:"SW", name:"Software"},
  {id:"ME", name:"Mechanical Systems"},
  {id:"EV", name:"Electrical Systems"},
  {id:"PE", name:"Performance"},
  {id:"OP", name:"Operations"},
];