import { getCriminals } from "./criminals/criminalDataProvider.js";
import criminalListComponent from "./criminals/criminalListComponent.js";
import ConvictionSelect from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import { NoteFormComponent } from "./notes/noteForm.js";
import { getNotes } from "./notes/noteDataProvider.js";
import { noteListComponent } from "./notes/noteList.js";
import { witnessListComponent } from "./witnesses/witnessListComponent.js";
import { getWitness } from "./witnesses/witnessDataProvider.js";
import { textChange } from "./practice.js";
import OfficerSelect from "./officers/OfficerSelect.js";
import { getOfficers } from "./officers/OfficerProvider.js";
import { filterButton } from "./filter/Filter.js";

//On page load this will get the notes then invoke the noteFormComponent then the noteListComponent function
getNotes().then(
  () => { NoteFormComponent()
  }
  ).then(noteListComponent)
  
  
  //On page load this will get the Criminals then invoke the CriminalListComponent function
  getCriminals().then(
    () => {
      criminalListComponent()
    }
    )
    
    //On page load this will get the convictions then invoke the convictionSelect function
  getConvictions().then(
    () => {
      ConvictionSelect()
    } 
    )
    
    //On page load this will get the witnesses then invoke the witnessListComponent function
    getWitness().then(
      () => {
      witnessListComponent()
    }
  )

  getOfficers().then(
    () => {
      OfficerSelect()
    }
  )

filterButton()
textChange()
