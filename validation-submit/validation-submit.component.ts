import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-submit',
  templateUrl: './validation-submit.component.html',
  styleUrls: ['./validation-submit.component.css']
})
export class ValidationSubmitComponent implements OnInit {
  myArray = [
    { id:'1',description: 'Senior', Amount: 50 },
    { id:'2',description: 'Senior', Amount: 10 },
    { id:'3',description: 'Adult', Amount: 75 },
    {id:'4', description: 'Child', Amount: 75 },
    { id:'5',description: 'Infant', Amount: 25 },
    { id:'6',description: 'Adult', Amount: 50 },
  ];
  // constructor() { }

  ngOnInit() {
  }

  // submit() {
  //   debugger;
  //   let res = [];
  //   this.myArray.map(function (item) {
  //     var repeatedDescriptionField = res.find(x => x.description == item.description);
  //     if (repeatedDescriptionField)
  //       console.log(repeatedDescriptionField.description, "repeatedDescriptionField");
  //     var repeatedAmountField = res.find(y => y.Amount == item.Amount);
  //     if (repeatedAmountField)
  //       console.log(repeatedAmountField.Amount, "repeatedAmountField")
  //     res.push(item);

  //   });
  //   console.log(res);
  // }



repeatedField(propertyName, inputArray) {
  debugger;
    var duplicateField = false,
        testObject = {};
        inputArray.forEach(item => {
          debugger;
          // console.log(item)
          var itemPropertyName = item[propertyName];
          if (itemPropertyName in testObject) {
            duplicateField = true;
          }
          else {
                testObject[itemPropertyName] = item;
               //  delete item.duplicate;
              }
              // console.log(testObject)

});
 return duplicateField;

  }

  submit(){
  // if(this.repeatedField('id', this.myArray)==true  || this.repeatedField('description', this.myArray)==true || this.repeatedField('amount', this.myArray)==true)
  // {
  //   alert("Repeaded fields")
  // }
    console.log('Repeated Id: ' + this.repeatedField('id', this.myArray));
    console.log('repeated description: ' + this.repeatedField('description', this.myArray));
    // console.log(this.testObject)
    console.log('repeated amount: ' + this.repeatedField('amount', this.myArray));

  }

// unique(array, propertyName) {
//     return array.filter((e, i) => array.findIndex(a => a[propertyName] === e[propertyName]) === i);
//  }
// submitMethod(){
// this.myArray.sort();
// var last = this.myArray[0];
// for (var i=1; i<this.myArray.length; i++) {
//    if (this.myArray[i] == last)
//    alert('Duplicate : '+last);
//    last = this.myArray[i];
// }
// }
}

